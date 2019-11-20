<template>
<div class="wrapper-content wrapper-content--fixed">
  <div class="container">
    <promo/>
    <Intro title="My last posts:"/>
    <PostsList
    :posts="posts"
    />
    <contacts
    />
  </div>
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'

export default {
  components: {
    promo,
    contacts
  },
  // asyncData () {
  //   return new Promise ((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: [
  //           { 
  //             id: 1,
  //             title: '1 post',
  //             description: 'Lorem ipsum dolor sit amet.',
  //             img: 'https://i.pinimg.com/originals/34/4c/35/344c353218d0e6447f7358f52f1d75e7.jpg'
  //           }
  //         ]
  //       })
  //   },1500)
  //   })
  // },
  computed: {
    posts () {
      return this.$store.getters.getPostsLoaded
    }
  }

}
</script>