<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <!-- <p>{{ teacher.lectures.length > 0 ? '있음 😊' : '없음 🥲' }}</p> -->
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <p>{{ existLecture() }}</p>
    <button v-on:click="counter++">Counter : {{ counter }}</button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup() {
    const teacher = reactive({
      name: '유진',
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
    });

    /**
     * computed
     *
     * 메서드와 비교했을 때, 성능면에서 더 좋다.
     * => 캐시를 보관하고 있다가 다음 요청했을 때는 그 캐시된 데이터에서 돌려줌.
     *    캐시가 다시 계산되는 시점은, 반응형 데이터가 변경되는 시점.
     *
     */
    const hasLecture = computed(() => {
      console.log('computed');
      return teacher.lectures.length > 0 ? '있음 😊' : '없음 🥲';
    });

    /**
     * method
     *
     * 실행될 때마다 계산하여 반환
     */
    const existLecture = () => {
      console.log('method');
      return teacher.lectures.length > 0 ? '있음 😊' : '없음 🥲';
    };

    const counter = ref(0);

    /**
     * computed는 기본적으로 getter(읽기 전용)
     * 새 값을 할당하려고 하면 런타임 경고 표시, 새로운 계산된 속성이 필요한 경우 getter/setter 사용 가능.
     */
    const firstName = ref('홍');
    const lastName = ref('길동');

    /*
    const fullName = computed(() => firstName.value + ' ' + lastName.value);
    console.log('Console 출력 : ', fullName.value);
    fullName.value = '송 유진'; //readonly 경고창 표시
    */

    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value; // 4. 반응형 데이터의 값이 바뀌었으므로 갱신.
      },
      set(value) {
        //2. value 받음
        //console.log('value : ', value);
        //console.log(value.split(' '));
        //const [first, last] = value.split(' ');
        //console.log('first : ' + first);
        //console.log('last : ' + last);

        [firstName.value, lastName.value] = value.split(' '); //3. 구조분해 할당으로 value값 들어감.
      },
    });
    console.log('Console 출력 : ', fullName.value);
    fullName.value = '송 유진'; //1. value값 변경 ( 쓰기 )

    return {
      teacher,
      hasLecture,
      existLecture,
      counter,
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
