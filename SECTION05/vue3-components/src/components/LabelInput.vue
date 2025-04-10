<template>
  <!--
    class와 style은 부모와 병합됨. 
    다른 속성은 덮어씌우기가 됨. (부모속성으로 적용)
    동일한 style일 경우 부모속성으로 적용.
  -->
  <!-- <label class="child-class" style="border:1px solid black; color:blue" id="child-id"> -->

    <!-- vue3에서는 다중 루트 노드를 가지고 있을 수 있음. -->
     <!-- 다중 루트 노드를 사용할 때는 명시적으로 어디에 상속받을 건지, v-bind로 지정해야 함. -->
  <label class="form-label" id="child-id">
    {{ label }}
  </label>
  <input class="form-control" v-model="value" v-bind="$attrs" type="text" />
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['modelValue', 'label'], 
    emits: ['update:modelValue'], 
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