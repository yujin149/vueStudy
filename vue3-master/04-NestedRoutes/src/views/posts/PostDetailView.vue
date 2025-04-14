<template>
  <div>
      <h2>제목</h2>
      <p>내용</p>
      <p class="text-muted">2025-01-01</p>
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
          <button class="btn btn-outline-danger">삭제</button>
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
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const id = route.params.id;

const router = useRouter();
const goListPage = () => {
  router.push({
    name:'PostList',
  });
}
const goEditPage = () => {
  router.push({
    name:'PostEdit',
    params: {id},
  });
}
</script>

<style lang="scss" scoped>

</style>