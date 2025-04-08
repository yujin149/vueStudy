<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<!-- immediate 즉시실행 -->
<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('Hello Vue3');
    const reverseMessage = ref('');

    /*
    watch(
      message,
      newValue => {
        console.log('즉시실행함!');
        reverseMessage.value = newValue.split('').reverse().join('');
      },
      //최초에 즉시 실행을 원한다면, 세번째 매개변수로 객체를 넣어준다.
      { immediate: true }
    );
    */

    const reverseFunction = newValue => {
      console.log('즉시실행함!');
      reverseMessage.value = newValue.split('').reverse().join('');
    };

    watch(message, reverseFunction);
    //최초에 실행할 때는 watch에 의해 실행되는게 아니므로 newValue가 null, 따라서 아래처럼 넣음.
    reverseFunction(message.value);

    //또는 애초에 reverseFunction 함수에서 newValue가 아닌 message.value로 넣어 계산을 하고, 실행 reverseFunction();

    return { message, reverseMessage };
  },
};
</script>

<style lang="scss" scoped>
</style>

<!-- computed / watch 용도 -->
<!-- 

coumputed : 반응형 데이터의 종속관계를 자동으로 세팅하고자 할때 유용.
watch : 데이터가 변경되는 시점에서 DOM이나 api 호출 등 비즈니스 로직을 수행할 때 유용.

-->