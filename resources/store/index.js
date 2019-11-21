import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  token: null,
})

export const mutations = {
  addPost (state, post) {
    state.postsLoaded.push(post)
  },
  setPosts (state, postsArray) {
    state.postsLoaded = postsArray
  },
  editPost (state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  }, 
  addComment (state, comment) {
    console.log(comment)
    state.commentsLoaded.push(comment)
  },
  setToken (state, token) {
    state.token = token
  },
  destroyToken (state) {
    state.token = null
  }
  
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    return axios.get('https://blog-nuxt-6cb97.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },
  addPost ({ commit }, payload) {
    return axios.post('https://blog-nuxt-6cb97.firebaseio.com/posts.json', payload)
      .then(res => {
        commit('addPost', {...payload, id: res.data.name})
      })
      .catch(e => console.log(e))
  },
  editPost ({ commit }, post) {
    return axios.put(`https://blog-nuxt-6cb97.firebaseio.com/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  addComment ({ commit }, comment) {
    return axios.post(`https://blog-nuxt-6cb97.firebaseio.com/comments.json`, comment)
      .catch(e => console.log(e))
  },
  authUser ({ commit }, authData) {
    const key = 'AIzaSyBbA5PnSOwPLFfUhEqRy4JI3bFHHeW-ReA'
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, { 
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    })
      .then(res => {
        commit('setToken', res.data.idToken)
      })
      .catch(e => console.log(e))
  },
  logoutUser ({ commit }) {
    commit('destroyToken')
  }
  
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  },
  checkAuthUser (state) {
    return state.token != null
  }
}