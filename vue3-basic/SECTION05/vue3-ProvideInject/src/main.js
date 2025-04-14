import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";


//App-level Provide
//App 컴포넌트는 모든 자식 컴포넌트의 부모 컴포넌트이므로, App 레벨에서 데이터를 제공하면 모든 컴포넌트에서 사용 가능.
const app = createApp(App);

app.provide('app-message', 'app message 입니다.');
// 글로벌 프로퍼티는 모든 컴포넌트에서 접근하고 싶은 라이브러리와 같은 객체를 추가할 때 사용.
app.config.globalProperties.msg = 'hello';
app.provide('msg', 'hello msg')


app.mount("#app");


import "bootstrap/dist/js/bootstrap.bundle.min.js";