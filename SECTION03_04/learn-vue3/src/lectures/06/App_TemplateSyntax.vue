<template>
  <div>
    <h2>보간법</h2>
    <!-- 데이터 바인딩이 되어있을때, 계속 갱신 -->
    <p>{{ message }}</p>

    <!-- 하지만, v-once는 일회성만 보간 / 갱신X -->
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">Click!</button>
    <hr />
    <h2>HTML</h2>
    <p>{{ rawHtml }}</p>
    <!-- 
        HTML을 동적으로 렌더링하면 XSS 취약점으로 쉽게 이어질 수 있음.  
        따라서, 신뢰할 수 있는 콘텐츠에서만 사용하고 사용자가 제공한 콘텐츠에서는 절대 사용하면 안됨.
     -->
    <p v-html="rawHtml"></p>

    <hr />
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려보세요.</div>
    <!-- v-bind는 많이 사용하기 때문에, :으로 단축 표현이 가능. -->
    <div :title="dynamicTitle">마우스를 올려보세요.</div>

    <input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
    <!-- 여러 개의 속성에 한꺼 번에 바인딩할 수 있음. -->
    <input v-bind="attrs" />
    <hr />
    <h2>JavaScript</h2>
    {{ message.split('').reverse().join('') }}<br />
    {{ isInputDisabled ? '예' : '아니오' }}
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const message = ref('안녕하세요!');
    const rawHtml = ref('<strong>안녕하세요.</strong>'); //rawHtml html태그를 가지고 있는 문자열

    const dynamicTitle = ref('안녕하세요!!!');
    const isInputDisabled = ref(true);
    const attrs = ref({
      type: 'password',
      value: '12345678',
      disabled: false,
    });

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    };
  },
};
</script>

<style lang="scss" scoped></style>
