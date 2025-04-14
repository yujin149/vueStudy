
//라우트 정보를 담고 있는 라우터 객체 생성
import { createRouter , createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';

//라우트 정보 설정
const routes = [
  {
    path : '/',
    name : 'Home',
    component : HomeView,
  },
  {
    path : '/about',
    name : 'About',
    component : AboutView,
  },
  {
    path : '/posts',
    name : 'PostList',
    component : PostListView,
  },
  {
    path : '/posts/create',
    name : 'PostCreate',
    component : PostCreateView,
  },
  //:는 동적 라우팅이라고 해서, 여러 개의 URL을 하나의 페이지 컴포넌트에 맵핑하고 싶을 때 사용.
  //이러한 세미콜론은 파라미터라고 해서, 라우트 객체에 params로 받을 수 있다.
  {
    path : '/posts/:id',
    name : 'PostDetail',
    component : PostDetailView,
  },
  {
    path : '/posts/:id/edit',
    name : 'PostEdit',
    component : PostEditView,
  },
];


const router = createRouter({
  history:createWebHistory('/'),
  routes, 
});

export default router;

