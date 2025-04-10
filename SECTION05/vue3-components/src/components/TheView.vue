<template>
  <main>
    <div class="container py-4"> 
      <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
      <LabelInput label="이름" data-id="id입니다."></LabelInput>
      <hr />

      <FancyButton>
        Click!!
        <span style="color:red">@@@</span>

      </FancyButton> 
      <!-- <FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton> -->
      <FancyButton >
        <template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
      </FancyButton>


      <hr />
      <AppCard>
        <!-- v-slot은 #으로 단축 표현할 수 있음. -->
        <!-- <template #header>제목입니다</template> -->

        <!--동적으로 처리-->
        <!-- <template #[slotArgs]>제목입니다</template> -->
        
        <!--default 슬롯은 암시적으로 처리할 수 있음. -->
        <!-- <template v-slot:default>내용입니다</template> -->
         <!-- 암시적으로 Default 슬롯입니다!
        <template v-slot:footer>푸터입니다</template> -->


        <!-- <template #default>디폴트입니다. {{ message }} {{ childMessage }}</template> -->
        
        <!-- <template #default="obj"> {{ obj }} 디폴트입니다. {{ message }}</template> -->
        
        <template #default="{childMessage, helloMessage}">
          디폴트입니다. 
          <br />
          {{ childMessage }}
          <br />
          {{ helloMessage }}
          
        </template>
        <template #header="{headerMessage}">
          {{ headerMessage }}
          
        </template>
        <template #footer="{footerMessage}">
          {{ footerMessage }}
          
        </template>
      </AppCard>
      <hr />
      <AppCard>
        게시글입니다.
      </AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';
export default {
  components: {
    MyButton,
    LabelInput,
    FancyButton,
    AppCard,
  },
  setup() {
    const sayHello =  () => {
      alert('안녕하세요!');
    }
    const slotArgs = ref('header');
    const message = ref('안녕하세요!!!');
    return {sayHello, slotArgs, message};
  },
};
</script>

<style lang="scss" scoped>
</style>