import axios from 'axios'

export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  addPost (state, post) {
    state.postsLoaded.push(post)
  },
  setPosts (state, postsArray) {
    console.log(postsArray)
    state.postsLoaded = postsArray
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
  }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  }
}