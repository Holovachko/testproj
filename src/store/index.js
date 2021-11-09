import { createStore } from 'vuex'
import usersJson from '/users.json'

export default createStore({
  state: {
    users : usersJson,
    authStatus: false
  },
  getters:{
    getUsers : (state) => state.users,
    getAuthStatus: (state) => state.authStatus
  },

  mutations: {
    addNewUser(state , dataObj){
      state.users.push({
        id: Date.now(),
        ...dataObj
      })
    },
    newAuthStatus(state){
      state.authStatus = !state.authStatus
    }
  },
  actions: {
    addUser({commit} , data){
      commit('addNewUser' , data)
    },
    changeAuthStatus({commit}){
      commit('newAuthStatus')
    }
  },
  modules: {
  }
})
