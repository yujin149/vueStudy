<template>
    <div>
        <h5>부모 컴포넌트 출력하기</h5>
        {{ $parent }}
        <br />
        <br />
        <ul>
            <li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup () {
        const message = ref('Hello');
        const sayHello = () => {
            alert(message.value);
        }

        return {message , sayHello}
    }
}
</script>

<style scoped>

</style>