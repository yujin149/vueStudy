<template>
  <div>
    <ul>
      <!-- v-for를 쓰려면, key라는 고유한 값을 지정해야 함. -->
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
      </li>
    </ul>

    <hr />
    <!-- 배열의 인덱스를 가져오려면, -->
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        인덱스 : {{ index }}, {{ item.message }}
      </li>
    </ul>

    <hr />
    <!-- id가 짝수인 것만 출력하기 / templeate 사용-->
    <!-- v-for와 v-if는 같이 쓸 수 없다.(li 내에 v-for="" v-if=""는 오류 발생) -->
    <ul>
      <template v-for="(item, index) in items" :key="item.id">
        <li v-if="item.id % 2 === 0">
          ID : {{ item.id }},인덱스 : {{ index }}, {{ item.message }}
        </li>
      </template>
    </ul>

    <hr />
    <!-- computed 활용하기 -->
    <ul>
      <li v-for="(item, index) in evenItems" :key="item.id">
        ID : {{ item.id }}, 인덱스 : {{ index }}, {{ item.message }}
      </li>
    </ul>

    <hr />
    <!-- v-for 객체 - 객체의 속성을 반복해서 뿌려줄 수 있음. -->
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ key }} : {{ value }}, 인덱스 : {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
export default {
  setup() {
    const items = reactive([
      { id: 1, message: 'Java' },
      { id: 2, message: 'HTML' },
      { id: 3, message: 'CSS' },
      { id: 4, message: 'JavaScript' },
    ]);

    const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

    const myObject = reactive({
      title: '제목입니다.',
      author: '홍길동',
      publishedAt: '2025-04-07',
    });

    return { items, evenItems, myObject };
  },
};
</script>

<style lang="scss" scoped></style>
