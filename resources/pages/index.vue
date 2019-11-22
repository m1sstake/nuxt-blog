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
  head () {
    let title = 'My SSR Blog!',
        description = 'My SSR Blog! With Nuxt.js',
        type = 'site'

    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', name: 'description', content: description },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:type', name: 'og:type', content: type },

      ]
    }
  },
  computed: {
    posts () {
      return this.$store.getters.getPostsLoaded
    }
  }

}
</script>