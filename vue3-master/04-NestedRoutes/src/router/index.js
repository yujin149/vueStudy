
//라우트 정보를 담고 있는 라우터 객체 생성
import { createRouter , createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

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
  {
    path : '/nested',
    name : 'NestedView',
    component : NestedView,
    children : [
      {
        path : '', 
        name : 'NestedHome',
        component : NestedHomeView,
      },
      {
        path : 'one', // /nested/one  여기서 /one으로 한다면 절대경로가 되어 /one가 된다.
        name : 'NestedOne',
        component : NestedOneView,
      },
      {
        path : 'two', // /nested/two
        name : 'NestedTwo',
        component : NestedTwoView,
      },
    ]
  },



  //404 Not Found Route 이건, 라우트 배열의 가장 마지막에 정의해야함. (끝까지 못찾은 경우 이 라우트가 작동.)
  //일반파라미터는 /로 구분된 URL 사이의 문자만 일치시킨다.
  { 
    path: '/:pathMatch(.*)*', //pathMatch 동적 라우트 변수 선언  / (.*)는 아무 문자열이나 매칭되도록 함. / *는 0개 이상 반복
    name: 'NotFound',
    component: NotFoundView, //NotFoundView 컴포넌트를 보여줌.
  },
/*
  //URL 경로를 정규식으로 매칭하고, 특정 부분을 동적으로 변수로 추출할 때 사용하는 방식
  // { path: '/user-:afterUser(.*)', component: UserGeneric },

  // 경로가 /user-로 시작해야함.
  // : afterUser : 동적파라미터 이름 (params.afterUser로 접근 가능)
  // (.*) : 정규식. 아무 문자든 0개 이상을 의미하므로 /user-다음에 어떤 문자열이든 매칭.

  */
];


const router = createRouter({
  history:createWebHistory('/'),
  routes, 
});

export default router;

