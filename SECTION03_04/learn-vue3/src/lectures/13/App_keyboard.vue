<template>
  <div>
    <!--
      키 수식어
      .enter / .tab / .delete("Delete"와 "Backspace" 키 모두 수신) /
      .esc / .space /.up / .down / .left / .right
    -->

    <!-- 
    시스템 키 수식어
    해당 수식어 키가 눌러진 경우에만 실행.
    .ctrl / .alt / .shift / .meta (Mac에서 command key, Window에서는 윈도우키)
    -->

    <!-- enter를 누르면, 동작 -->
    <input type="text" @keyup.ctrl.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const todos = reactive([]);

    /*
    const addTodo = (event) => {
      // Enter를 눌렀을때만, todos에 추가
      console.log('event.key', event.key);
      if(event.key === 'Enter'){
        todos.push(event.target.value);
      }
    };
  */
    const addTodo = event => {
      todos.push(event.target.value);
      // 엔터를 한 다음, 값을 비우고, 포커스를 줌.
      event.target.value = '';
      event.target.focus();
    };

    return { todos, addTodo };
  },
};
</script>

<style lang="scss" scoped>
</style>