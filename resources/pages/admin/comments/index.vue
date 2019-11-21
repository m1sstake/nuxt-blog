<template>
<client-only>
<commentTable
:thead="['Name','Text','Status','Change Status', 'Delete']">
<tbody slot="tbody">
  <tr v-for="comment in comments" :key="comment.name">
    <td><span> {{ comment.name }} </span></td>
    <td><span> {{ comment.text }} </span></td>
    <td>
      <span v-if="comment.publish" class="status true"> Publish </span>
      <span v-else class="status false"> Hidden </span>
    </td>
    <td><span @click="changeComment(comment)" class="link"> Change Status</span></td>
    <td><span @click="deleteComment(comment)" class="link"> Delete </span></td>
  </tr>
</tbody>
</commentTable>
</client-only>
</template>

<script>
import commentTable from '@/components/Admin/CommentTable.vue'
import axios from 'axios'
export default {
  components: {
    commentTable
  },
  layout: 'admin',
  data () {
   return {
      comments: [],
   }
  },
  created () {
    axios.get('https://blog-nuxt-6cb97.firebaseio.com/comments.json')
      .then(res => {
        let commentsArray = []
        Object.keys(res.data).forEach(key => {
          const comment = res.data[key]
          commentsArray.push({id: key, ...comment})
        })
        this.comments = commentsArray
        // let commentsRes = Object.values(res.data)
      })
  },
  methods: {
    changeComment(comment) {
      comment.publish = !comment.publish
      axios.put(`https://blog-nuxt-6cb97.firebaseio.com/comments/${comment.id}.json`, comment)
    },
    deleteComment(comment) {
      axios
          .delete(`https://blog-nuxt-6cb97.firebaseio.com/comments/${comment.id}.json`)
          .then(() => {
            this.comments.splice(this.comments.indexOf(comment), 1)
          })
    }
  }
}
</script>

<style>

</style>