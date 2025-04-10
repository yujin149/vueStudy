<template>
  <main>
    <div class="container py-4"> 
      <PostCreate @create-post="createPost"></PostCreate>

      <hr class="my-4" />

      <div class="container text-center">
        <div class="row g-3">
       
         
          <div class="col col-4" v-for="post in posts" :key="post.id">
           
            <PostItem
              :title="post.title"
              :contents="post.contents"
              :type="post.type"
              :is-like="post.isLike"
              @toggle-like="post.isLike = !post.isLike"
            >
            </PostItem>
           
          </div>

          <hr class="my-4" />
           <LabelInput
           v-model="username" label="이름"
           class="parent-class"
           style="color:red"
           id="parent-id"
           ></LabelInput>
         
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive, ref } from 'vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import PostItem from '../PostItem.vue';
export default {
  components: {
    PostCreate,
    LabelInput,
    PostItem,
  },
  setup() {
    const post = reactive({
      title: '제목2',
      contents: '내용2',
    });

    const posts = reactive([
      { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
      { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
      {
        id: 3,
        title: '제목3',
        contents: '내용3',
        isLike: true,
        type: 'notice',
      },
      {
        id: 4,
        title: '제목4',
        contents: '내용4',
        isLike: false,
        type: 'notice',
      },
      { id: 5, title: '제목5', contents: '내용5', isLike: false, type: 'news' },
      { id: 6, title: '제목6', contents: '내용6', isLike: false, type: 'news' },
    ]);

    const createPost = newPost => {
      console.log('newPost : ', newPost);
      posts.push(newPost);
    };

    const username = ref('');
    const firstname = ref('');
    const lastname = ref('');
    
    
    
    return { post, posts, createPost, username, firstname,lastname };
  },
};
</script>

<style lang="scss" scoped>
</style>