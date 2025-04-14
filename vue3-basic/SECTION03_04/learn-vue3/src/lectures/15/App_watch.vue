<!-- 
  Watch
  반응형 상태가 변경될 때마다 특정 작업을 수행
-->

<template>
  <div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('');
    //    (감지할 반응형 데이터, 콜백함수(변경된 새로운 값, 이전 값) => {});
    watch(message, (newValue, oldValue) => {
      //DOM
      //API
      ///state 등을 변경
      console.log('newValue : ', newValue);
      console.log('oldValue : ', oldValue);
    });

    return { message };
  },
};
</script>

<style lang="scss" scoped>
</style>