<!-- 이벤트 처리 -->

<!-- 
 이벤트 처리는 v-on 디렉티브로 사용할 수 있다. 자주 사용하기 때문에 '@' 단축 표현으로 많이 사용된다.
-->

<template>
  <div>
    <!--                                    이벤트 객체를 넘김.  -->
    <button @click="printEventInfo('Hello Vue3', $event)">inline event handler</button>

    <hr />
    <!-- <input type="text" v-keyup="onKeyupHandler"> -->
    <input type="text" @keyup="onKeyupHandler" />
  </div>
</template>

<script>
export default {
  setup() {
    const printEventInfo = (message, event) => {
      console.log('message : ', message);
      console.log('event.target : ', event.target);
      console.log('event.target.tagName : ', event.target.tagName);
    };
    const onKeyupHandler = event => {
      console.log('event.key : ', event.key);
    };
    return { printEventInfo, onKeyupHandler };
  },
};
</script>

<style lang="scss" scoped></style>
