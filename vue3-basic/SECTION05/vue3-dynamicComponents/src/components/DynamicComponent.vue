<template>
    <div class="container py-4">
        <button class="btn btn-primary me-2" @click="changeCurrentComp(DynamicApple)">사과</button>
        <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">바나나</button>
        <hr />
        <component :is="currentComp"></component>

        <p>{{obj1}}</p>
        <p>{{obj2}}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { shallowRef } from "vue";
import DynamicApple from "./DynamicApple.vue";
import DynamicBanana from "./DynamicBanana.vue";

//const currentComp = ref(DynamicApple);
// is 속성으로 컴포넌트를 넘길 때는 shallowRef로 정의하는게 좋음.
const currentComp = shallowRef(DynamicApple);

const obj1 = ref({name:'홍길동'});
const obj2 = shallowRef({name:'김길동'});
 // shallowRef는 속성에 대해서는 반응하지 않고 값 자체가 바뀌었을 때만 반응.
 //obj2.value 이 바뀌었을때, 반응적. 
 //obj2.value.name 이 바뀌었을때, 반응적이지 않다. 


const changeCurrentComp = (comp) => {currentComp.value = comp};


</script>

<style lang="scss" scoped>

</style>