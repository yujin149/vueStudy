<template>
  <main>
    <div class="container py-4"> 
      <!-- 이벤트는 non-prop속성 안에 포함 -->
      <!-- <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton> -->

      <!-- 이벤트명을 변경했기 때문에, 클릭 동작이 이루어지지 않음. 하지만, hello라는 이벤트는 달려있음. -->
      <!-- <MyButton @hello="sayHello"></MyButton> -->
      
      <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>


      <LabelInput label="이름" data-id="id입니다."></LabelInput>

    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
export default {
  components: {
    MyButton,
    LabelInput,
  },
  setup() {
    const sayHello =  () => {
      alert('안녕하세요!');
    }
    return {sayHello};
  },
};
</script>

<style lang="scss" scoped>
</style>