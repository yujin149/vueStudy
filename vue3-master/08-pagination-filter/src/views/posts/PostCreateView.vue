<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" v-model="form.title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea class="form-control" id="content" rows="3" v-model="form.content"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
        <button class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createPost } from '@/api/posts'

const router = useRouter()
const form = ref({
  title: null,
  content: null,
})

const save = () => {
  try {
    const date = new Date(Date.now())
    const year = date.getFullYear()
    //padStart는 string.padStart(길이, '채울문자')
    //1~9일때 앞에 0을 붙여줌.
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`

    createPost({
      ...form.value,
      // createdAt: Date.now(),
      createdAt: formattedDate,
    })
    router.push({ name: 'PostList' })
  } catch (error) {
    console.error(error)
  }
}

const goListPage = () => {
  router.push({
    name: 'PostList',
  })
}
</script>

<style lang="scss" scoped>
</style>