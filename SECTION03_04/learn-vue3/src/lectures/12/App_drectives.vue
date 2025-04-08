<template>
  <div>
    <!-- 디렉티브(Directives) -->

    <!--
      v-text
      : DOM 엘리먼트의 텍스트 컨텐츠 속성을 업데이트하는 디렉티브
      : html로 인식을 안하고, 문자열(string)으로 인식한다.
    -->
    <p>{{ msg }}</p>
    <!--위와 동일한 방법-->
    <p v-text="msg"></p>

    <p v-html="htmlStr"></p>
    <p v-text="htmlStr"></p>
    <!--문자열로 인식-->

    <!-- 
    v-pre
    : 엘리먼트 내에서 모든 Vue 템플릿 구문은 그대로 유지되고 렌더링.
    -->
    <p v-pre>{{ msg 안녕하세요 }}</p>

    <!-- 
    v-once
    : 한 번만 렌더링.
      이후에 재 렌더링 할 때는 v-once 디렉티브가 있는 컴포넌트나 엘리먼트 그리고 모든 하위 엘리먼트를 정적인 컨텐츠로 처리.
      업데이트 성능을 취적화할 수 있다.
    -->
    <p>{{ msg }} !!!</p>
    <p v-once>{{ msg }} !!!</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('안녕하세요.');
    const htmlStr = ref('<strong>안녕!</strong>');
    return { msg, htmlStr };
  },
};
</script>

<style lang="scss" scoped></style>
