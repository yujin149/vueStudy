<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary">
        {{ typeName }}
      </span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>

      <a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
        >좋아요</a
      >
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    type: {
      type: String,
      default: 'news',
      validator: value => {
        return ['NEWS', 'NOTICE'].includes(value);
      },
    },
     title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    isLike: {
      type: Boolean,
      default: false,
    },
  },
  emits : ['toggleLike'],
  setup(props, { emit }) {
    const isLikeClass = computed(() => props.isLike ? 'btn-danger' : 'btn-outline-danger');
    const typeName = computed(() => props.type === 'NEWS' ? '뉴스' : '공지');

    const toggleLike = () => emit('toggleLike');

    return { isLikeClass, typeName, toggleLike };
  }
};
</script>

<style lang="scss" scoped>
</style>