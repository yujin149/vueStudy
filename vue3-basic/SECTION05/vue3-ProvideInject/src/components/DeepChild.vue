<template>
  <div class="card">
    <div class="card-header">Deep Child Component</div>
    <div class="card-body">
      <p>staticMessage : {{ staticMessage }}</p>
      <p>message : {{ message }}</p>
      <p>count : {{ count }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    // 값이 안 넘올 때를 대비해서 두번째 파라미터로 디폴트 값을 설정할 수 있다.
    const staticMessage = inject('static-message', 'Defalut message');
    const {message , updateMessage} = inject('message');
    //message.value = message.value + '!'; //readonly로 인해, 여기서 메세지를 추가할 수 없다.
    updateMessage('!');

    const count = inject('count');
    
    
    return {
      staticMessage,
      message,
      count,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>