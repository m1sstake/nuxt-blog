import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  commentsLoaded: [],
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
      .then(res => {
        commit('addComment', { ...comment, id: res.data.name })
      })
  },
  
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  }
}