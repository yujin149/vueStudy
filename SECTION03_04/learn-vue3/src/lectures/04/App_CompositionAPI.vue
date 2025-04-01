<template>
  <div>
    <h2>반응형 메세지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMessage">Add Message</button>

    <h2>일반 메세지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMessage">Add Message</button>
  </div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue';
export default {
  setup() {
    console.log('setup()');
    const reactiveMessage = ref('Hello Reactive Message');
    const addReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + '!';
    };
    //isRef는 반응형 데이터인지 확인해줌.
    console.log('isRef(reactiveMessage) : ', isRef(reactiveMessage));

    let normalMessage = 'Hello Normal Message';
    const addNormalMessage = () => {
      normalMessage = normalMessage + '!';
    };
    console.log('isRef(normalMessage) : ', isRef(normalMessage));
    /*
    라이프 사이클 :: Vue 인스턴스나 컴포넌트가 생성될 때, 미리 사전에 정의된 몇 단계의 과정을 거치게 되는데, 이를 라이프 사이클이라고 함.

    라이프 사이클 훅 :: 라이프사이클 단계에서 실행되는 함수
*/
    onMounted(() => {
      console.log('onMounted'); //DOM 마운트 후에
    });
    onBeforeMount(() => {
      console.log('onBeforeMount'); //DOM 마운트 되기 전에
    });

    return { reactiveMessage, addReactiveMessage, normalMessage, addNormalMessage };
  },
};
</script>

<style lang="scss" scoped></style>
