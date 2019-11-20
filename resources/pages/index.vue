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
  computed: {
    posts () {
      return this.$store.getters.getPostsLoaded
    }
  }

}
</script>