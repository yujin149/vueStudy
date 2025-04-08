<template>
  <div>
    <!-- submit이 발생해서 새로고침이 되므로 prevent로 동작을 막기. -->
    <!--
    <form @submit.prevent="save(title, contents)">
      <input v-model.lazy="title" type="text" placeholder="title" /><br />
      <textarea v-model.lazy="contents" placeholder="contents"></textarea>
      <hr />
      <button type="submit">저장</button>
    </form>
    -->

    <!-- 이렇게도 가능능 -->
    <form @submit.prevent>
      <input v-model.lazy="title" type="text" placeholder="title" /><br />
      <textarea v-model.lazy="contents" placeholder="contents"></textarea>
      <hr />
      <button type="submit" @click="save(title, contents)">저장</button>
    </form>
  </div>
</template>


<!--

watchEffect
콜백함수 안에 반응형 데이터의 변화가 감지되면 자동으로 반응해서 어떠한 작업을 수행하는 api

watch와 watchEffect는 둘다 어떠한 반응형 데이터의 변경을 감지해서 다른 비즈니스 로직이라던지 api 호출 같은 작업을 수행할 수 있게 해주는 반응형 api

watchEffect는 최초 한번 즉시 실행을 함. - 콜백함수 안에 사용한 반응형 api 감시 (immediate보다 덜 명시적으로 감시)
watch는 변경 감지될때 실행. (immediate 옵션을 넣어주면 즉시실행 가능 - 명시적으로 감시)
-->

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const title = ref('');
    const contents = ref('');

    // 어떤 api를 호출해서 저장하는 로직이라고 가정.
    const save = (title, contents) => {
      console.log(`저장되었습니다. title : ${title}, contents : ${contents}`);
    };

    //글을 작성했을 때 자동으로 저장하게 하려면,
    watchEffect(() => {
      console.log('watchEffect');
      save(title.value, contents.value);
      console.log(title.value);
      console.log(contents.value);
    });

    return { title, contents, save };
  },
};
</script>

<style lang="scss" scoped>
</style>