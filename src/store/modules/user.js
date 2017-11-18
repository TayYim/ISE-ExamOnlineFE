import * as types from '../mutation-types'


// initial state
// shape: [{ id, quantity }]
const state = {
    name: "admin",
    email: "admin@ywy.com"
}

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
const mutations = {
    [types.ADD_NAME](state,name) {
      state.name = name;
    },
    [types.ADD_EMAIL](state,email) {
      state.email = email;
    }
}

export default {state, getters, actions, mutations}
