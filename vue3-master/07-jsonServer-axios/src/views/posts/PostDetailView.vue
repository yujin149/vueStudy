<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>

    <!-- /posts/1 으로 접속했을때, (1부분은 임의로 넣음) -->
    <!-- <p>params : {{$route.params}}</p> -->

    <!-- /posts/1?searchText=vue3바이블 -->
    <!-- <p>query : {{$route.query.searchText}}</p> -->

    <!-- /posts/1#hashvalue -->
    <!-- <p>hash : {{$route.hash}}</p> -->
  </div>
</template>

<script setup>
import { getPostById, deletePost } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: Number,
})

/**
 * ref
 * 장점) 한꺼번에 객체 할당을 할 수 있음. / 일관성
 * 단점) form.value.title 이런식으로 접근해야함.
 *
 * reactive
 * 장점) form.title 이런식으로 접근가능.
 * 단점) 객체 할당 불가능.
 */

const post = ref({})

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id)
    setPost(data)
  } catch (error) {
    console.error(error)
  }
}
const setPost = ({ title, content, createdAt }) => {
  post.value.title = title
  post.value.content = content
  post.value.createdAt = createdAt
}
fetchPost()

//삭제
const remove = async () => {
  try {
    //안티패턴이라고 해서, 코드가 깊어지는 것을 막기 위해 ===false로 눈에 보이게 하여 return을 줌.
    // if (confirm('삭제하시겠습니까?')) {
    //   await deletePost(props.id)
    //   router.push({ name: 'PostList' })
    // }

    if (confirm('삭제하시겠습니까?') === false) {
      return
    }
    await deletePost(props.id)
    router.push({ name: 'PostList' })
  } catch (error) {
    console.error(error)
  }
}

const router = useRouter()
const goListPage = () => {
  router.push({
    name: 'PostList',
  })
}
const goEditPage = () => {
  router.push({
    name: 'PostEdit',
    params: { id: props.id },
  })
}
</script>

<style lang="scss" scoped>
</style>