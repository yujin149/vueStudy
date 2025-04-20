<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-3" />
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input type="text" class="form-control" v-model="params.title_like" />
        </div>
        <div class="col-3">
          <select v-model="params._limit" class="form-select">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>
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
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !(params._page > 1) }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="--params._page">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pageCount"
          :key="page"
          class="page-item"
          :class="{ active: params._page === page }"
        >
          <a class="page-link" href="#" @click.prevent="params._page = page">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !(params._page < pageCount) }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="++params._page">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <hr class="my-5" />
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
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = ref([])

const params = ref({
  _sort: 'createdAt', //등록일기준
  _order: 'desc', //내림차순
  _page: 1, //현재페이지 조회
  _limit: 3, //몇개씩 조회할건지
  title_like: '9', //특정 컬럼뒤에 like를 넣고 문자를 넣게 되면 검색할 수 있음.
})

//pagination
const totalCount = ref(0)
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit))

const fetchPosts = async () => {
  try {
    //개발자도구에서 headers x-total-count에 게시글 갯수 표시 되어있음.
    const { data, headers } = await getPosts(params.value)
    posts.value = data
    totalCount.value = headers['x-total-count']
  } catch (error) {
    console.error(error)
  }
}

//fetchPosts()
watchEffect(fetchPosts) //반응형 상태가 변경되면 해당 콜백 함수를 다시 실행.
const goPage = (id) => {
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  })
}
</script>

<style lang="scss" scoped>
</style>