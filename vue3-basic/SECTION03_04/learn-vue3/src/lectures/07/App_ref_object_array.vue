<template>
  <div></div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    // ref => Object
    const count = ref(0);
    const state = reactive({
      count, // count : count  키와 값이 같으므로 단축표현.
    });
    count.value++;
    //console.log(count.value);
    //console.log('state.count : ', state.count.value); //undefined
    /*
     ref로 선언한 데이터를 반응형 객체의 속성으로 주입하게 되면, 자동으로 .value가 unwrapping이 된다.
    */
    //console.log('state.count : ', state.count);

    // ref => Array
    const message = ref('Hello');
    const arr = reactive([message]);
    console.log('arr[0] : ', arr[0].value); //Hello 문자를 가져오려면 .value
    return {
      count,
      state,
    };
  },
};
</script>

<style lang="scss" scoped></style>
