<template>
  <label>
    {{ label }}
    <!-- v-model="username" -->
    <!-- :value="modelValue"
    @input="event => $emit('update:modelValue',event.target.value)" -->
    
    <input
    v-model="value"
    type="text"
    />
  </label>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['modelValue', 'label'], //value (vue2)
    emits: ['update:modelValue'], //@input (vue2)
  setup(props, {emit}) {
    const value = computed({
        get() {
            return props.modelValue;
        },
        set(value){
            emit('update:modelValue', value);
        }
    })
    return {value};
  },
};
</script>

<style lang="scss" scoped>
</style>