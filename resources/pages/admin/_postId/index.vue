<template>
  <newPostFrom
    :postEdit="post"
    @submit="onSubmit" />
</template>

<script>
import axios from 'axios'

import newPostFrom from '@/components/admin/NewPostForm.vue'
export default {
  components: { newPostFrom },
  layout: 'admin',
  asyncData (contex) {
    return axios.get(`https://blog-nuxt-6cb97.firebaseio.com/posts/${contex.params.postId}.json`)
      .then(res => {
        return {
          post: { ...res.data, id: contex.params.postId }
        }
      })
      .catch(e => contex.error(e))
  },
  methods: {
    onSubmit (post) {
      this.$store.dispatch('editPost', post)
      .then(res => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>
