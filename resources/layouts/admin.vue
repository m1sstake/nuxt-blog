<template>
  <div>
    <Header/>

    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Admin page">
      <nuxt-link to="/admin" class="link linkWhite"> Admin </nuxt-link>
      <nuxt-link to="/admin/new-post" class="link linkWhite"> New Post </nuxt-link>
      <nuxt-link to="/admin/comments" class="link linkWhite"> Comments </nuxt-link>
      <span @click="logoutUser" class="link linkWhite"> Logout </span>

      </Intro>
    <nuxt />
   
  </div>
  </div>
</template>
<script>
import Header from '~/components/system/Header.vue'
export default {
  components: {
    Header
  },
  // middleware: ['auth'],
  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>