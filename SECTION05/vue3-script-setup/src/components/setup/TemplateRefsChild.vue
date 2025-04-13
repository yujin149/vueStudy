<template>
    <div>
        <!-- 부모 컴포넌트에서 속성, 메서드가 정의되어 있음에도 출력 되지 않음 -> setup 속성 사용했기 때문. -->
        {{ $parent }}
        <ul>
            <li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const message = ref('Hello');
    const sayHello = () => {
        alert(message.value);
    };
    defineExpose({
        //setup 속성 사용했을때, 출력하게 하려면, defineExpose 메서드로 객체로 정의.
        //키 : 값으로 표현.
        message,
        sayHello,
    })
</script>

<style scoped>

</style>