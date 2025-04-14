
//라우트 정보를 담고 있는 라우터 객체 생성
import { createRouter , createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';



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
];


const router = createRouter({
  history:createWebHistory('/'),
  routes, //routes : routes 키,값이 같으므로 단축표현
});

//라우터 객체를 외부에서 사용할 수 있도록 export
export default router;

