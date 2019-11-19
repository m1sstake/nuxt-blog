import Vue from 'vue'

// Contorols
import AppButton from '@/components/UI/Controls/Button.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'
import AppInput from '@/components/UI/Controls/Input.vue'

// UI
import Message from '@/components/UI/Message.vue'
import Intro from '@/components/UI/Intro.vue'
import PostsList from '@/components/Blog/PostsList.vue'



Vue.component('AppButton', AppButton)
Vue.component('AppTextArea', AppTextArea)
Vue.component('AppInput', AppInput)

Vue.component('Message', Message)
Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)

 