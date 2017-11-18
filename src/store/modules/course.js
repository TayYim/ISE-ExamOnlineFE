import * as types from '../mutation-types'
import subjects from '../../api/subjects'
import exams from '../../api/exams'
import exam from '../../api/exam'
import questions from '../../api/questions'
import judge from '../../api/judge'

// initial state
// shape: [{ id, quantity }]
const state = {
  exams: [],
  exam: {},
  questions: [],
  subjects: [],
  selected: [],
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
    return state.selected.filter(select => select).length;
  },
  totalCorrect: state => {
    return state.result.filter(r => (r==="1" || r===1)).length;
  }
}

// actions
const actions = {
  getExams({
    commit
  }, subjectId) {
    //规范化处理
    let myExams = [];
    for (let exam of exams.getExams()) {
      let {id, paper_title: title, paper_year: year} = exam;
      myExams.push({'id': id, 'title': title, 'year': year});
    }
    commit(types.ADD_EXAMS, myExams)
  },

  getSubjects({commit}) {
    let data = subjects.getSubjects();
    commit(types.ADD_SUBJECTS, data)
  },

  getExam({commit, state}) {
    let questions;
    if (state.mode === 0) {
      //规范化处理
      let {ProblemNum, Problems} = exam.getExam();
      questions = {
        total: ProblemNum,
        id: []
      };
      for (let question of Problems) {
        questions.id.push(question.ProblemId);
      }
    } else {
      console.log("random");
    }
    commit(types.ADD_EXAM, {questions: questions})
  },

  getQuestions({commit, state}) {
    let myQuestions = [];
    //规范化处理
    for (let question of questions.getQuestions()) {
      let {id, pro_detail: content, option: options} = question;
      myQuestions.push({id: id, content: content, options: options})
    }

    commit(types.ADD_QUESTIONS, myQuestions)
    console.log(state.questions);
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
    state.questions = questions;
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
  }
}

export default {state, getters, actions, mutations}
