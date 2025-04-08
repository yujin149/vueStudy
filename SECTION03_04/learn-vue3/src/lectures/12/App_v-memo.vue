<template>
  <!-- 
    v-memo
    : 3.2+ 버전 이상에서만 지원.

    []이 안에 반응형 데이터가 변경이 일어났을 때만 업데이트.
    -->
  <!-- subscribers와 views가 변경되면, 변경되도록 설정 -->
  <div v-memo="[subscribers, views]">
    <p>subscribers : {{ subscribers }}</p>
    <p>views : {{ views }}</p>
    <p>likes : {{ likes }}</p>
  </div>
  <!-- v-on은 @으로 단축표현 가능. -->
  <button v-on:click="subscribers++">Subs++</button>
  <button @click="views++">Views++</button>
  <button @click="likes++">Likes++</button>

  <div>
    <p>subscribers : {{ subscribers }}</p>
    <p>views : {{ views }}</p>
    <p>likes : {{ likes }}</p>
  </div>

  <!-- 디렉티브 구성 -->
  <!--디렉티브:전달인자.수식어="값"  -->
  <p v-on:submit.prevent="onSubmit"></p>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const subscribers = ref(4000);
    const views = ref(400);
    const likes = ref(20);
    return { subscribers, views, likes };
  },
};
</script>

<style lang="scss" scoped></style>
