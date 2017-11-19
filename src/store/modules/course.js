import * as types from '../mutation-types'
import subjects from '../../api/subjects'
import exams from '../../api/exams'
import exam from '../../api/exam'
import questions from '../../api/questions'
import judge from '../../api/judge'
import collection from '../../api/collection'

import axios from '@/axios'
import Vue from 'vue'
import router from '@/router'

// initial state
// shape: [{ id, quantity }]
const state = {
  exams: [],
  exam: {},
  questions: [],
  subjects: [],
  selected: [
    -1, -1, -1, -1
  ],
  result: [],
  answers: [],
  questionsC: [],
  mode: 0,
  evaluate: "good!"
}

// getters
const getters = {
  accuracyRate: state => 1,
  total: state => state.exam.questions.total,
  userDone: state => {
    return state.selected.filter(select => {
      return (select !== -1)
    }).length;
  },
  totalCorrect: state => {
    return state.result.filter(r => (r === "1" || r === 1)).length;
  }
}

// actions
const actions = {
  clear({commit}) {
    commit(types.CLEAR_ANSWERS);
    commit(types.CLEAR_SELECTED);
  },
  getExams({
    commit
  }, subjectId) {

    exams.getExams(subjectId, (_exams) => {
      let myExams = [];
      console.log(_exams);
      for (let exam of _exams) {
        let {id, paper_title: title, paper_year: year} = exam;
        myExams.push({'id': id, 'title': title, 'year': year});
      }
      commit(types.ADD_EXAMS, myExams)
    })

  },

  getSubjects({commit}) {
    let data = subjects.getSubjects();
    commit(types.ADD_SUBJECTS, data)
  },

  getExam({commit, state}) { //to be simplified

    exam.getExam(state.exam.id, state.mode, (_exam) => {
      let {ProblemNum, Problems} = _exam;
      let questions = {
        total: ProblemNum,
        id: []
      };
      for (let question of Problems) {
        questions.id.push(question.ProblemId);
      }
      commit(types.ADD_EXAM, {questions: questions})
    })
  },

  getQuestions({commit, state}) {

    // let _questions = [];
    let ids = state.exam.questions.id;

    let promise = new Promise(function(resolve, reject) {
      let _questions = [];
      for (let questionId of ids) {
        axios({
          method: 'get',
          url: '/course/problem/',
          params: {
            ProblemId: questionId
          }
        }).then(response => {
          _questions.push(response.data);
          if (_questions.length === ids.length) {
            resolve(_questions)
          }
        }).catch(e => {});
      }
    });

    promise.then(_questions => {
      let myQuestions = [];
      for (let question of _questions) {
        let {id, pro_detail: content, option: options} = question;
        myQuestions.push({id: id, content: content, options: options})
      }
      console.log(myQuestions);
      commit(types.ADD_QUESTIONS, myQuestions)
      commit(types.INIT_SELECTED); //init selected
      router.push('/question/work');
    })

    // for (let questionId of ids) {
    //   axios({
    //     method: 'get',
    //     url: '/course/problem/',
    //     params: {
    //       ProblemId: questionId
    //     }
    //   }).then(response => {
    //     _questions.push(response.data);
    //   }).catch(e => {});
    // }

    // setTimeout(function() {
    //     let myQuestions = [];
    //     for (let question of _questions) {
    //       let {id, pro_detail: content, option: options} = question;
    //       myQuestions.push({id: id, content: content, options: options})
    //       console.log(1);
    //     }
    //     console.log(myQuestions);
    //     commit(types.ADD_QUESTIONS, myQuestions)
    // }, 2000);

    // let myQuestions = [];
    // 规范化处理
    // for (let question of questions.getQuestions()) {
    //   let {id, pro_detail: content, option: options} = question;
    //   myQuestions.push({id: id, content: content, options: options})
    // }
    //
    // commit(types.ADD_QUESTIONS, myQuestions)
    // console.log(state.questions);
  },

  getJudge({commit, state}) {
    let answers = [];
    let result = [];
    // will use state.selected
    //规范化处理
    let {evaluate, Problems} = judge.getJudge();

    for (let problem of Problems) {
      answers.push({correct: problem.correctAns});
      result.push(problem.result);
    }

    commit(types.ADD_ANSWERS, answers)
    commit(types.ADD_RESULT, result)
    commit(types.ADD_EVALUATE, evaluate)
  },

  getquestionsC({
    commit,
    state
  }, subjectId) {

    let qs = [];
    let questionsC = [];

    //规范化处理
    // let {id,problemNote:note} = collection.getCollection();
    let coll = collection.getCollection();
    qs = questions.getQuestions();
    for (let index in coll) {
      questionsC.push({id: coll[index].id, correct: coll[index].problemAns, note: coll[index].problemNote, content: qs[index].pro_detail, options: qs[index].option});
    }
    commit(types.ADD_QUESTIONSC, questionsC);
  }
}

// mutations
const mutations = {
  [types.ADD_EXAMS](state, exams) {
    state.exams = exams;
  },

  [types.ADD_EXAM](state, exam) {
    state.exam = Object.assign(state.exam, exam);
  },

  [types.ADD_QUESTIONS](state, questions) {
    // for (var i in questions) {
    //   Vue.set(state.questions, i, questions[i]);
    // }
    state.questions = [];
    for (let q of questions) {
      state.questions.push(q);
    }
    // state.questions = questions;
    console.log(state.questions);
  },

  [types.ADD_RESULT](state, result) {
    state.result = result;
  },

  [types.ADD_ANSWERS](state, answers) {
    state.answers = answers;
  },

  [types.ADD_SUBJECTS](state, subjects) {
    state.subjects = subjects;
  },

  [types.ADD_QUESTIONSC](state, questionsC) {
    state.questionsC = questionsC;
  },

  [types.SET_MODE](state, mode) {
    state.mode = mode;
  },

  [types.ADD_EVALUATE](state, evaluate) {
    state.evaluate = evaluate;
  },

  [types.CLEAR_SELECTED](state) {
    state.selected = [];
  },

  [types.CLEAR_ANSWERS](state) {
    state.answers = [];
  },

  [types.INIT_SELECTED](state) {
    for (var i = 0; i < state.exam.questions.total; i++) {
      Vue.set(state.selected, i, -1);
    }
    console.log(state.exam.questions.total);
  }
}

export default {state, getters, actions, mutations}
