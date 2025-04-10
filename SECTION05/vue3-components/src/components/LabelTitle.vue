<template>
  <label>
    {{ label }}
    <input
    v-model="value"
    type="text"
    />
  </label>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['title', 'label'], //value (vue2)
    emits: ['update:title'], //@input (vue2)
  setup(props, {emit}) {
    const value = computed({
        get() {
            return props.title;
        },
        set(value){
            emit('update:title', value);
        }
    })
    return {value};
  },
};
</script>

<style lang="scss" scoped>
</style>