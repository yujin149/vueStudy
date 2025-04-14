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
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import { getPosts } from '@/api/posts.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = ref([])

const fetchPosts = () => {
  posts.value = getPosts()
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