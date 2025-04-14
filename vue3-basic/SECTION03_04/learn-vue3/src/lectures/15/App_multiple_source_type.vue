<template>
  <div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    const obj = reactive({
      count: 0,
    });

    /*
    //첫번째 매개변수를 getter함수로 넣어줌.
    function(){
      return x.value + y.value;
    }
    */
    /*
    getter함수에 의해 감지가 되었을 때, 두개의 값을 합을 받기
    (sum, oldValue) => {
        console.log('sum : ', sum);
        console.log('oldValue : ', oldValue);
      }
   */
    /* 
   watch(() => {
      return (
        x.value + y.value,
        (sum, oldValue) => {
          console.log('sum : ', sum);
          console.log('oldValue : ', oldValue);
        }
      );
    });
    */

    /* Array로 넘겨서 따로따로 감지해보기 */
    /*watch([x, y], ([newX, newY]) => {
      console.log(newX, newY);
    });*/

    /** 객체로 받기 */
    console.log(typeof obj.count);
    /*watch(
      () => obj.count, // 특정 오브젝트 속성을 감지하고 싶으면, getter함수로 받기.
      (newValue, oldValue) => {
        console.log('newValue : ', newValue);
      }
    );*/
    /*
    watch(obj, (newValue, oldValue) => {
      // 오브젝트 타입을 감지할 때는 newValue랑 oldValue랑 같은 객체를 가리키기 때문에 같은 값
      console.log('newValue : ', newValue);
      console.log('oldValue : ', oldValue);
    });
    */

    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0,
      },
    });

    /*
    watch(person, newValue => {
      console.log('newValue: ', newValue);
    });
    */

    //getter 함수로 object로 넘기게 된다면, object값이 바뀔때만 감지
    // count가 변경될때는 안바뀌지만, obj 자체가 바뀌면 감지한다.
    watch(
      () => person.obj,
      newValue => {
        console.log('newValue: ', newValue);
      }
    );

    return { x, y, obj, person };
  },
};
</script>

<style lang="scss" scoped>
</style>