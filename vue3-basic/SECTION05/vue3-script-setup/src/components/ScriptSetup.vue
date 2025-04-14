<template>
    <div class="container py-4">
        {{msg}}
        <hr />
        {{ message }}<br />
        <input v-model="message" type="text">

        <hr />
        <button @click="sayHello">Click</button>
        <hr />
        
        <PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>
        <PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>
        <PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>

        <hr />
        <TemplateRefsChild ref="child"></TemplateRefsChild>
        <template v-if="child"> {{ child.message }}</template>

        <hr />

        <MyButtonVue class="parent-class"></MyButtonVue>
    </div>
</template>



<script setup>
import { ref } from "vue";
import axios from 'axios';
import MyButtonVue from "./setup/MyButton.vue";
import PostItem from "./setup/PostItem.vue";
import TemplateRefsChild from "./setup/TemplateRefsChild.vue";

//원래는 components로 등록을 해줘야하는데, 바로 사용할 수 있음.

    
    const msg = "Hello Word";
    const message = ref('');
    const sayHello = () => {
        alert('Hello World!');
    }

    const child = ref(null);

    // *참고 expose 메세지는 setup함수에서 context 객체에 메서드로 들어가 있음.
    defineExpose({
        msg,
    })

    const response = await axios ('https://dummy.restapiexample.com/api/v1/employees',);
    console.log('response : ', response);

/*
 function callApi() {
    axios('https://dummy.restapiexample.com/api/v1/employees').then(response => {
        console.log('response : ', response);
    });
}
*/


//async, await을 사용하여 읽기 쉽게 (Syntactic)
// async function callApi() {
//     const response = await axios('https://dummy.restapiexample.com/api/v1/employees')
// }


callApi();

</script>

<style lang="scss" scoped>

</style>