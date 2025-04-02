<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam iusto fugiat
      reprehenderit ex, voluptas facilis cumque corrupti, expedita possimus dolor explicabo
      doloremque perferendis, inventore alias sit quibusdam sapiente tenetur qui.
    </div>
    <button v-on:click="fontSize--">-</button>
    <button v-on:click="fontSize++">+</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
// import { reactive } from 'vue';

export default {
  setup() {
    /*
    const styleObject = reactive({
      color: 'red',
      fontSize: '13px',
    });
    */

    const fontSize = ref(13);
    const styleObject = computed(() => {
      return {
        color: 'red',
        fontSize: fontSize.value + 'px',
      };
    });

    return { styleObject, fontSize };
  },
};
</script>

<style lang="scss" scoped></style>
