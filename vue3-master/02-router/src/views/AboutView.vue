<template>
  <div>
    <h2>About View</h2>
    <!-- 현재 페이지에 대한, 현재 페이지 컴포넌트에 대한 정보 출력 -->
    <p> {{ $route }} </p>
    <hr />
    <!-- path에 대한 정보 표시 -->
    <p> {{ $route.path }} </p>
    <hr />
    <!-- name에 대한 정보 표시 -->
    <p> {{ $route.name }} </p>
    <hr />
    <!-- 라우터 객체를 사용해서 페이지 이동 -->
    <button class="btn btn-primary" @click="$router.push('/')"> Home으로 이동</button>
  </div>
</template>

<script setup>
/* 라우트 객체를 setup 함수 안에서 사용하고 싶다면, useRoute함수 호출 */
import { useRoute } from "vue-router";

const route = useRoute();
console.log('route.path : ', route.path );

</script>

<style lang="scss" scoped>

</style>