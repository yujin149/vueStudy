<template>
  <div class="row g-2">
    <div class="col col-2">
      <select v-model="type" class="form-select" aria-label="Default select example">
        <option value="news">뉴스</option>
        <option value="notice">공지</option>
      </select>
    </div>
    <div class="col col-8">
      <!-- <button class="btn btn-primary" @click="$emit('createPost', 1,2,3, '김길동')">button</button> -->

      <input type="text" class="form-control" v-model="title" />
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">추가</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  //emits : ['createPost'],
  emits: {
    createPost: newPost => {
      if (!newPost.type) {
        return false;
      } else if (!newPost.title) {
        return false;
      }
      return true;
    },
  },
  setup(props, { emit }) {
    //context.emit
    const type = ref('news');
    const title = ref('');
    const createPost = () => {
        const newPost = {
            type : type.value,
            title : title.value,
        }
      emit('createPost', newPost);
      type.value = 'news';
      title.value = '';
    };

    return { createPost, title, type };
  },
};
</script>

<style lang="scss" scoped>
</style>