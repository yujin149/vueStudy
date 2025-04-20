<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" v-model="form.title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea class="form-control" id="content" rows="3" v-model="form.content"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPostById, updatePost } from '@/api/posts'

const route = useRoute()
const id = route.params.id

const router = useRouter()

const form = ref({
  title: null,
  content: null,
})
const fetchPost = async () => {
  try {
    const { data } = await getPostById(id) //조회
    setForm(data)
  } catch (error) {
    console.error(error)
  }
}
const setForm = ({ title, content }) => {
  form.value.title = title
  form.value.content = content
}
fetchPost()

const edit = async () => {
  try {
    const date = new Date(Date.now())
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`

    await updatePost(id, {
      ...form.value,
      //날짜 추가
      createdAt: formattedDate,
    })

    router.push({ name: 'PostDetail', params: { id } })
  } catch (error) {
    console.error(error)
  }
}

const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: { id },
  })
}
</script>

<style lang="scss" scoped>
</style>