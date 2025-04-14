<template>
  <div>
    <!-- 
        reactive는 message.value    

        ref에서는 message 로 작성. 
        템플릿 표현식에서 사용할 때는 리턴된 반응형 객체는 자동으로 내부적으로 Unwarpping이 된다.
        그렇기 때문에, vlaue안에 있는 값을 message로 다시 대입한다.
    -->
    <p>{{ message }}</p>
    <button v-on:click="addMessage">add click</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    /*
     reative함수는 객체나 배열과 같이 레퍼런스 타입의 반응형 상태, 반응형 객체를 선언하는 함수이기 때문에 반응형으로 동작하지 않는다.

     위의 message와 아래의 message의 값을 서로 공유하지 X
     아래의 코드는 값 자체를 바꿔버리기 때문에 반응형으로 동작하지 않는다.
     */

    /*let message = reactive('Hello Vue!');
    const addMessage = () => {
      message = message + '!';
    };
    console.log('message : ', message);
    console.log('message typeof : ', typeof message); // string
    */

    /*
    // 이미 약속된 속성을 선언하고, 그 안에 선언.
    let message = reactive({
      value: 'Hello Vue!', // 사용할 때는 reactive.value으로 사용.
    });
    const addMessage = () => {
      message.value = message.value + '!';
    };
    console.log('message : ', message.value);
    console.log('message typeof : ', typeof message.value); // string
    */

    /*
    reactive 함수는 객체타입에만 동작. 그래서 기본타입(number, string, boolean)을 반응형으로 만들 때 ref 메소드를 사용.

     ref 메소드는 변이가능한 객체(반응하는 객체)를 반환.
     이 객체 안에는 value라는 단 하나의 속성만 포함. value 속성은 매개변수로 던졌던 프리미티브 타입 값을 가지고 있음.

     이 반응형 객체는 value값에 참조(reference)역할만 함.
    */

    let message = ref('Hello Vue!');

    const addMessage = () => {
      message.value = message.value + '!';
    };
    console.log(message);
    console.log('message : ', message.value);
    console.log('message typeof : ', typeof message.value); // string

    return {
      message,
      addMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
