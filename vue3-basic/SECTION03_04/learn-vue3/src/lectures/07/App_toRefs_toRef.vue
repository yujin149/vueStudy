<template>
  <div>
    <p>author : {{ author }}</p>
    <p>title : {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue';
//import { toRefs } from 'vue';
export default {
  setup() {
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: '당신은 지금 바로 이 책을 읽습니다.',
      price: '무료',
    });

    //구조분해 할당

    /*
    const { author, title } = book;
    console.log(typeof author.value); //string
   */

    /*
      반응형을 잃지 않고 구조분해 할당 할 수 있도록 toRef, toRefs를 사용한다.
      
      toRefs는 구조분해 할당을 할 때 반응형을 그대로 유지할 수 있다.
      toRefs를 사용하게 되면 무게에 있는 이 속성과 구조분해에서 재 할당한 이러한 반응형 상태는 동기화가 된다.
    */

    // const { author, title } = toRefs(book);

    //객체에서 하나만 가져오고 싶다면, toRef를 사용한다.
    const author = toRef(book, 'author');
    const title = toRef(book, 'title');
    console.log(typeof author.value);

    return {
      author,
      title,
      book,
    };
  },
};
</script>

<style lang="scss" scoped></style>
