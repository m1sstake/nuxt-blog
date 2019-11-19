<template>
<newPostForm 
:postEdit="post"
@submit="onSubmit"/>
</template>

<script>
import newPostForm from '@/components/admin/NewPostForm.vue'
export default {
  components: {
    newPostForm
  },
  data () {
   return {
     post: {
       id: 1,
       title: '1 post',
       description: 'Lorem ipsum dolor sit amet.',
       img: 'https://i.pinimg.com/originals/34/4c/35/344c353218d0e6447f7358f52f1d75e7.jpg',
       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
   }
  },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      console.log('Post Editting')
      console.log(post)
    }
  }
}
</script>

<style>

</style>