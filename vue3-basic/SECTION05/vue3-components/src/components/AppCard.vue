<template>
  <div class="card">
    <div class="card-header" v-if="$slots.header"><slot name="header" header-message="헤더 메세지"></slot></div>
    <!-- {{ $slots }} -->
    <div class="card-body" v-if="$slots.default">
      <!--<slot>#Body</slot>  이름을 주지 않게 되면 default라는 이름이 자동으로 붙는다.-->
      <slot :child-message="childMessage" hello-message="안녕하세요"></slot> 
    </div>
    <div v-if="hasFooter" class="card-footer text-muted"><slot name="footer" footer-message="푸터 메세지"></slot></div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup(props, { slots }) {
    const childMessage = ref('자식컴포넌트 메세지');
    //context.slots
    const hasFooter = computed(() => !!slots.footer);
    return {childMessage, hasFooter};
  },
};
</script>

<style lang="scss" scoped>
</style>