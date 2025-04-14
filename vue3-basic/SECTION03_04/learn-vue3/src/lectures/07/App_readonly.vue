<template>
  <div></div>
</template>

<script>
import { reactive, readonly } from 'vue';
export default {
  setup() {
    const original = reactive({
      count: 0,
    });
    const copy = readonly(original);
    original.count++;
    copy.count++; //target은 readonly이기때문에  할 수 없다고 나온다.
    console.log(original.count);
    console.log(copy.count);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
