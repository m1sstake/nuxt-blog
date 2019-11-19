<template>
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="comment-form">
        
        <AppInput type="text" v-model="comment.name">Name:</AppInput>

        <AppTextArea v-model="comment.text">Text:</AppTextArea>

        <div class="controls">
          <AppButton>Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'
import AppInput from '@/components/UI/Controls/Input.vue'

export default {
  components: {
    AppButton,
    AppTextArea,
    AppInput
  },
  data () {
    return {
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.comment)
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .comment-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>