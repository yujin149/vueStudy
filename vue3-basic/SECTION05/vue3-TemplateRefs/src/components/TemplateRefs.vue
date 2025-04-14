<template>
    <div class="container py-4">
        <h5>문자열 키 할당</h5>
        <input ref="input" type="text">
        <p>{{ input }}</p>

        <!-- 오류 // 마운트가 완료될 때까지 null -->
        <!-- <p>{{ input.value }}</p> -->


        <!-- 
            input은 { value: null } 인 객체이므로, 조건은 항상 true임.
            따라서, 마운트 되기 전 true이기때문에 오류는 안나고, null값 
            -> 마운트 후에는 Hello World로 값을 주었기 때문에, 렌더링됨.
        -->
        <p v-if="input">{{ input.value }}</p>

        <!-- 컴포넌트 인스턴스의 내장 객체인 ref라는 객체를 통해서도 접근할 수 있다. -->
        <p v-if="input">내장객체 ref : {{ $refs.input.value }}</p>
        
        <p v-if="input">객체 비교: {{ $refs.input === input }}</p>

        <hr />
        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
        </ul>

        <hr />
        
        <!-- v-for 3.2.25버전 이상 동작 -->
        <h5>직접 참조</h5>
        <p>v-for에서 ref가 사용될 때, 마운트를 한 후 DOM요소는 item ref 배열 안에 채워진다.</p>
        <ul>
            <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li>
        </ul>

        <hr />
        <h5>함수 바인딩</h5>
        <ul>
            <li v-for="fruit in fruits" :key="fruit" :ref="(el) => itemRefs.push(el.textContent)">{{ fruit }}</li>
        </ul>


        <hr />
        <!-- ref라는 특수 속성으로 자식 컴포넌트에 접근할 수 있다. -->
        <TemplateRefsChild ref="child"></TemplateRefsChild>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';

export default {
    components : {
        TemplateRefsChild,
    },
    setup () {
        const input =ref (null);    
        //마운트가 되기 전이므로, null
        console.log('setup : ', input.value);
        
        //DOM 요소에 대한 참조는 렌더링이 된 이후, 마운트가 된 이후 접근
        onMounted(() => {
            input.value.value = 'Hello World!';
            console.log('onMounted : ', input.value);
        
            // itemRefs.value.forEach(item => console.log('item : ', item.textContent));

            itemRefs.value.forEach(item => console.log('item : ', item));


            console.log('child.message : ', child.value.message);
            child.value.sayHello();
        });



        const fruits = ref(['사과', '딸기', '포도']);
        const itemRefs =ref([]);

        const child = ref(null);
        return {input, fruits, itemRefs, child};
    }
}
</script>

<style>
h5 {font-size:1.1rem; font-weight: 600;}
p{font-size:0.875rem;}
</style>