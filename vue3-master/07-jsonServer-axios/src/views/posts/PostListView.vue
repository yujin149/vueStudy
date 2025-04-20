<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        >
        </PostItem>
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="2"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import AppCard from '@/components/AppCard.vue'

import { getPosts } from '@/api/posts.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = ref([])

const fetchPosts = async () => {
  // posts.value = getPosts()
  //const response = getPosts()
  //console.log('response', response) //현재 promise 객체를 반환
  /*
  promise는 자바스크립트에서 비동기를 처리할 때 사용하는 객체.
  값을 받을 때는 then으로 받고 콜백함수를 넣어, 결과값을 리턴으로 받음.
  오류를 받을 땐 catch로 받음.
  */
  /*
  getPosts()
    .then((response) => {
      return console.log('response', response)
    })
    .catch((error) => {
      console.log('error : ', error)
    })
*/
  // async, await으로 변경 -> 문법적으로 읽기 쉽도록 처리.
  //const { data } = await getPosts()
  //posts.value = data

  //구조분해 할당을 통해서 받을 때 이런식으로도 받을 수 있음.
  // ({ data: posts.value } = await getPosts())

  //console.dir(response) //객체 로그를 출력할때는 console.dir을 사용하면 편함.

  try {
    const { data } = await getPosts()
    posts.value = data
  } catch (error) {
    console.error(error)
  }
}

fetchPosts()
const goPage = (id) => {
  // router.push(`/posts/${id}`);

  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  })
}

/*
  //이름을 가지고 있는 라우트
  //http://localhost:5173/posts/1?searchTect=hello#world!
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
    query: {
      searchTect: 'hello',
    },
    hash: '#world!',
  });
  */

/*
    router.push
    
    // 리터럴 문자열 경로
    router.push('/users/eduardo')

    // 경로가 있는 개체
    router.push({ path: '/users/eduardo' })

    // 이름을 가지는 라우트
    router.push({ name: 'user', params: { username: 'eduardo' } })

    // 쿼리와 함께 사용, 결과적으로 /register?plan=private가 됩니다.
    router.push({ path: '/register', query: { plan: 'private' } })

    // 해시와 함께 사용, 결과적으로 /about#team가 됩니다.
    router.push({ path: '/about', hash: '#team' })

*/
</script>

<style lang="scss" scoped>
</style>