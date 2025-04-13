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
      <br />
      {{ obj }}
    </div>
  </div>
</template>

<!--
컴포넌트를 여러개 사용할 때 (현재 PostItem 여러개 생성), 각각의 인스턴스가 생성 -> setup함수 각각 호출 
이럴때, 일반 스크립트 블록과 사용할 수 있음.
-->

<script>
console.log('Normal Script');
</script>



<script setup>
import { computed } from 'vue';

console.log('Script Setup');
const props = defineProps({
  type: {
    type: String,
    default: 'news',
    validator: value => {
      return ['new', 'notice'].includes(value);
    },
  },
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    //required: true,
  },
  isLike: {
    type: Boolean,
    default: false,
  },
  obj: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits(['toggleLike']);

const isLikeClass = computed(() =>
  props.isLike ? 'btn-danger' : 'btn-outline-danger'
);

const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지'));

const toggleLike = () => {
  emit('toggleLike');
};
</script>


<style>
.card {
  text-align: left;
}
.card-title {
  font-weight: 600;
}
</style>
