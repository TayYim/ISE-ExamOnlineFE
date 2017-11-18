import * as types from '../mutation-types'
import subjects from '../../api/subjects'
import exams from '../../api/exams'
import exam from '../../api/exam'

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
  mode: 0
}

// getters
const getters = {
  accuracyRate: state => 1
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
    commit(types.ADD_EXAM, {questions:questions})
    console.log(state.exam);
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
  }
}

export default {state, getters, actions, mutations}
