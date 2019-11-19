<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post
    :post="post"
    />
    <comments
    :comments="comments"
    />
    <newComment
    />
  </div>
</template>

<script>
import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'
export default {
  components: {
    post,
    newComment,
    comments
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
      comments: [
        { name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia.' },
        { name: 'Evgenii', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia.'}
        ],
      }
    }
  }
</script>

<style lang="scss">
.post {
  min-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    margin-bottom: 30px;
    max-width: 400px;
  }
  p {
    color: #999999
  }
}
.post-body{
  text-align: left;
}

</style>