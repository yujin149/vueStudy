<template>
  <div>
      <h2>{{form.title}}</h2>
      <p>{{form.content}}</p>
      <p class="text-muted">{{form.createdAt}}</p>
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
import { getPostById } from "@/api/posts";
import { ref } from "vue";
// import { reactive } from "vue";
import { useRouter } from "vue-router";
// import { useRoute } from "vue-router";

const props = defineProps({
  id:Number,

})

// const route = useRoute();
// const id = route.params.id;

/**
 * ref
 * 장점) 한꺼번에 객체 할당을 할 수 있음. / 일관성 
 * 단점) form.value.title 이런식으로 접근해야함.
 * 
 * reactive
 * 장점) form.title 이런식으로 접근가능.
 * 단점) 객체 할당 불가능.
 */

const form = ref({});
// const form = reactive({});

const fetchPost = () => {
  const data = getPostById(props.id);
  form.value = {...data}; //전개구문을 해서 객체 복사 대입.
  /*
  // reactive로 한다면,
  form.title = data.title;
  form.content = data.content;
  form.createdAt = data.createdAt;
  */
}
fetchPost();
const router = useRouter();
const goListPage = () => {
  router.push({
    name:'PostList',
  });
}
const goEditPage = () => {
  router.push({
    name:'PostEdit',
    params: {id : props.id},
  });
}
</script>

<style lang="scss" scoped>

</style>