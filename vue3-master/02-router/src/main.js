import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');

/*
app.use(router)를 호출함으로써 모든 자식 컴포넌트에 router, route같은 객체를 사용할 수 있다.
- router : 우리가 페이지 이동을 할 수 있게 해주는 객체
- route : 현재 페이지 컴포넌트에 대한 정보 (읽기 전용)

*/

import 'bootstrap/dist/js/bootstrap';

