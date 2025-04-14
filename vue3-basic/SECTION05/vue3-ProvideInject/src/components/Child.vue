<template>
  <div class="card">
    <div class="card-header">Child Component</div>
    <div class="card-body">
      <p>appMessage : {{ appMessage }}</p>
      <DeepChildVue></DeepChildVue>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
import DeepChildVue from './DeepChild.vue';
export default {
  components: {
    DeepChildVue,
  },
  setup() {

    const appMessage = inject('app-message');

    return {appMessage};
  },
};
</script>

<style lang="scss" scoped>
</style>