<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.description"> Description: </AppInput>
        <AppInput v-model="post.img"> Img Link: </AppInput>
        <div class="editer">
          <label for="">Markdown</label>
          <input type="radio" v-model="markdown" :value="true">
          <label for="">HTML</label>
          <input type="radio" v-model="markdown" :value="false">

          <Label>Content:</Label>
        <AppTextArea :value="markdown ? contentMarkdown : contentHtml" @input="update($event)" class="post__content"></AppTextArea>
        <div class="markdown" v-html="compiledMarkdown"></div>
        </div>
        <div class="controls">
          <div class="btn btnDanger" @click="cancel"> Cancel </div>
          <AppButton> Save </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import marked from 'marked'
import htmlConverter from 'html-to-md'


export default {
  props: {
    postEdit: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      markdown: true,
      contentHtml: '',
      contentMarkdown: '',
      post: this.postEdit ? { ...this.postEdit } :  {
        title: '',
        description: '',
        img: '',
        content: '# Test',
      }
    }
  },
  watch: {
    markdown: function (val) {
      if (!val && this.contentMarkdown) {
        console.log(val)
        this.contentHtml = marked(this.contentMarkdown, { headerIds : false}) 
      }
      else if (val && this.contentHtml) {
        this.contentMarkdown =  htmlConverter(this.contentHtml)
        console.log(htmlConverter(this.contentHtml))
      }
    }
  },
  computed: {
    compiledMarkdown () {
      return this.markdown ? marked(this.contentMarkdown, { headerIds : false}) : this.contentHtml
    },
  },
  methods: {
    update(e) {
      this.markdown ? this.contentMarkdown = e : this.contentHtml = e 
    }, 
    onSubmit() {
      this.$emit('submit', this.post)
    },
    cancel () {
      this.$router.push('/admin/')
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.post__content, .markdown {
  display: inline-block;
  width: 49%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;

}
.post__content {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  padding: 20px;
}
.editer {
  margin: 0;
  height: 100%;
  color: #333;
}
</style>