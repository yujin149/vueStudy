<template>
  <div>
    <!--
    v-if는 v-for와 함께 쓰는 것을 권장하지 않는다.
    -->
    <h2 v-if="visible">Helllo vue3!</h2>
    <h2 v-else>False visible</h2>
    <button v-on:click="visible = !visible">toggle</button>
    <hr />
    <button v-on:click="type = 'A'">A</button>
    <button v-on:click="type = 'B'">B</button>
    <button v-on:click="type = 'C'">C</button>
    <button v-on:click="type = 'D'">D</button>
    <h2 v-if="type === 'A'">A입니다.</h2>
    <h2 v-else-if="type === 'B'">B입니다.</h2>
    <h2 v-else-if="type === 'C'">C입니다.</h2>
    <h2 v-else>A,B,C가 아닙니다.</h2>

    <hr />
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
  </div>
  <hr />
  <!--
  false일때,
   v-if 처럼 UI적으로는 사라진것 처럼 보이지만, 실제로는 렌더링되어 있음. (display속성으로 none이 되어 있음.)

   따라서, 무언가를 자주 전환해야한다면, v-show가 유용.
   런타임 시, 조건이 변경되지 않는다면, v-if가 유용하다.
  -->
  <button v-on:click="okay = !okay">show-toggle</button>
  <h1 v-show="okay">title 입니다.</h1>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const visible = ref(true);
    const type = ref('A');
    const okay = ref(true);
    return { visible, type, okay };
  },
};
</script>

<style lang="scss" scoped></style>
