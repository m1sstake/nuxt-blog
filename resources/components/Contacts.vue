<template>
  <section class="contact">
    <div class="container">
      <h2 class="title"> Contact me! </h2>
      
      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">

        <AppInput v-model="user.name">Name:</AppInput>

        <AppInput type="email" v-model="user.email">Email:</AppInput>

        <AppTextArea v-model="user.text">Text:</AppTextArea>


        <div class="controls">
          <AppButton btnClass="btnWhite"> Submit </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      message: null,
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.message = 'Submitted!'
      this.user.name = ''
      this.user.email = ''
      this.user.text = ''
    }
  
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4f68f4;
  color: #fff;
  .title {
    color: #fff;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>