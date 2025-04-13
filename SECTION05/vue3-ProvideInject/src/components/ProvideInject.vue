<!--
부모 컴포넌트 -> 자식 컴포넌트 전달 시 props를 사용.
컴포넌트 사이의 깊이가 깊을 때, props를 사용하기 번거로움

props를 단순히 하위 컴포넌트에 전달하는 용도로만 쓰이는 과정을 prop Drilling
=>이거를 해결할 수 있는 것이 Provide / Inject	
 
Provide / Inject 는 부모 컴포넌트 계층구조의 깊이에 상관없이 자식 컴포넌트에 데이터를 전달할 수 있다.

provide(주입할 키, 주입할 값);

const 주입할 값 = inject(주입할 키);

-->

<template>
  <div class="container py-4">
    <div class="card">
        <div class="card-header">ProvideInject Component</div>
        <div class="card-body">
            <button @click="count++">CLICK</button> <!--반응형에도 동작이 된다.-->
            <p>appMessage : {{ appMessage }}</p>
            <Child></Child>
        </div>
    </div>
  </div>
</template>

<script>
import { inject, provide, readonly, ref } from 'vue';
import Child from './Child.vue';
export default {
  components: {
    Child,
  },
  setup() {
    const staticMessage = 'static message';
    const message = ref('message');
    const updateMessage = (appendMessage) => {
        message.value = message.value + appendMessage;
    }
    const count = ref(10);


    // 첫번째 파라미터 : 문자열 / Symbol -> 주입 키는 하위 컴포넌트에서 주입된 값을 조회하는데 사용.
    // 두번째 파라미터 : refs와 같은 반응성 데이터를 포함하여 모든 유형 가능.
    //         주입할 키,         주입할 값
    // provide('static-message', staticMessage);
    // provide('message', message);



    // 자식 컴포넌트에서 데이터를 변경해야하는 경우, Provide 내부에서 변경하는 것이 좋다. (향후 유지관리 용이)
    // 제공하는 데이터의 변경을 아예 막고싶다면, provide 함수를 사용해서 데이터를 전달할 때 readonly 함수를 사용해서 값의 변경을 막을 수 있다. 
    provide('message', {message: readonly(message), updateMessage});

    provide('count', count);



    // vue3 composition api의 setup 함수에서는 컴포넌트 인스턴스가 생성되기 전이기 때문에 this로 접근할 수 없다.
    console.log('this : ', this); //this가 Undefinde로 확인.
    //이럴때, provide와 inject를 활용할 수 있음.
    const msg = inject('msg');
    console.log('msg : ', msg );


    const appMessage = inject('app-message');
    

    return {
      staticMessage,
      message,
      count,
      appMessage,
      msg,
    };
  },
  //mounted 라이프 사이클 훅은 컴포넌트 인스턴스가 생성된 훅이기 때문에 this로 접근 가능.
  mounted() {
    console.log('this.msg : ', this.msg);
  }
};
</script>

<style lang="scss" scoped>
</style>