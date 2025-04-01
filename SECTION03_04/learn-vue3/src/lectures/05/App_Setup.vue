<template>
  <div>
    <p>{{ counter }}</p>
    <p>{{ message }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    const message = ref('hello Vue3');
    const increment = () => {
      counter.value++;
    };
    return { counter, message, increment };
  },
};
</script>

<style lang="scss" scoped></style>
