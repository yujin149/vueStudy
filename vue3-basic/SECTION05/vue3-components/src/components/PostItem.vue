<template>
  <div class="card">
    <div class="card-body">
      <!-- {{ $props }} -->
      <!--type : news, notice -->
      <span class="badge bg-secondary ">
        <!--{{ type === 'news' ? '뉴스' : '공지사항' }}-->
        {{ typeName }}
      </span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>

      <!-- <a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
      <a v-else href="#" class="btn btn-outlilne-danger">좋아요</a> -->
      <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">좋아요</a>
      <br>
      {{ obj }}

    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props :{
    type : {
      type : String,
      default : 'news',
      validator : (value) => { // 유효성검사
        return ['new', 'notice'].includes(value);
      }
    },
    title : {
      type : String,
      required : true, //필수입력 요쇼
    },
    contents: {
      type: String,
      //required: true, //필수입력 요쇼
    },
    isLike : {
      type:Boolean,
      default: false,
    },
    obj : {
      type:Object,
      default: () => {},
    }
  },

  emits: ['toggleLike'], //props와 마찬가지로 선언을 해줘야함.
  setup(props, context) {
    // console.log('props.title : ', props.title);
    const isLikeClass = computed(() => props.isLike ? 'btn-danger' : 'btn-outline-danger');

    const typeName = computed(() => props.type === "news" ? "뉴스" : "공지");


    const toggleLike = () => {
      // props.isLike = !props.isLike;
      
      //props.obj.title = "김길동"; //ESLint에는 오류 but 변경됨. 이러한 부분을 조심해야함.
      //context.emit('changeTitle') //title을 변경하려면, emit으로 작성 후 부모에서 적용.
      context.emit('toggleLike')

    };
    
    return { isLikeClass, typeName, toggleLike };
  }
};
</script>


<style>

.card{text-align: left;}
.card-title{font-weight: 600;}
</style>
