<template>
  <div>
    <h2>Home View</h2>
    <!-- 현재 페이지에 대한, 현재 페이지 컴포넌트에 대한 정보 출력 -->
    <p> {{ $route }} </p>
    <hr />
    <!-- path에 대한 정보 표시 -->
    <p> {{ $route.path }} </p>
    <hr />
    <!-- name에 대한 정보 표시 -->
    <p> {{ $route.name }} </p>
    <hr />
    <!-- setup으로 페이지 이동 -->
    <button class="btn btn-primary" @click="goAboutPage"> About으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"


const router = useRouter();

const goAboutPage = () => {
  router.push('/about');
};
</script>

<style lang="scss" scoped>

</style>