<template>
    <PostsList
    :admin="true"
    :posts="posts"
    />
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      posts: [
        {
          id: 1,
          title: '1 post',
          description: 'Lorem ipsum dolor sit amet.',
          img: 'https://i.pinimg.com/originals/34/4c/35/344c353218d0e6447f7358f52f1d75e7.jpg'
        },
        {
          id: 2,
          title: '2 post',
          description: 'Lorem ipsum dolor sit amet.',
          img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
        },
        {
          id: 3,
          title: '3 post',
          description: 'Lorem ipsum dolor sit amet.',
          img: 'https://dsvf96nw4ftce.cloudfront.net/images/detailed/2/thundercap-calming-cap-action4.jpg'
        },
      ]
    }
  }
}
</script>