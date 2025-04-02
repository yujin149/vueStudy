<template>
  <div>
    <!-- v-bind:class 디렉티브는 일반 class속성과 공존할 수 있다. -->
    <!--                        클래스명             클래스명(-가 있을때는 ''으로 감싼다)-->
    <div class="text" :class="{ active: isActive, 'text-danger': hasError }">텍스트입니다.</div>

    <div class="text" :class="classObject">텍스트입니다.</div>

    <!--배열로 사용 가능.-->
    <div class="text" :class="[errorClass]">텍스트입니다.</div>

    <!--자바스크립트 표현식 넣기 /  객체도 추가 가능.-->
    <div class="text" :class="[isActive ? 'active' : 'class', errorClass, classObject]">
      텍스트입니다.
    </div>

    <button v-on:click="toggle">toggle</button>
    <button v-on:click="hasError = !hasError">toggleError</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
//import { reactive } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(false);

    // 클래스 여러 개일때
    /*const classObject = reactive({
      active: true,
      'text-danger': false,
    });*/

    //active 상태의 조건이 여러 개가 필요할 때,
    const classObject = computed(() => {
      return {
        active: true && true,
        'text-danger': true && true,
        'text-size': true,
      };
    });

    const activeClass = ref('active');
    const errorClass = ref('error');

    const toggle = () => {
      isActive.value = !isActive.value;
    };

    return { isActive, toggle, hasError, classObject, activeClass, errorClass };
  },
};
</script>

<style scoped>
.active {
  font-weight: 700;
}
.text-danger {
  color: red;
}
.error {
  color: blue;
}
.text-size {
  font-size: 20px;
}
</style>
