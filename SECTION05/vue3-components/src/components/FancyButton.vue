<template>
    <button class="fancy-btn">
        <!-- 외부에서 컨텐츠를 전달했을 때 삽입할 위치에 slot 컴포넌트를 선언. -->
        <!-- <slot></slot> 여기에  TheView.vue의 <FancyButton></FancyButton>의 Click!! 문자열이 삽입 /html태그도 삽입 가능-->

        <slot :fancy-message ="fancyMessage">Default Click!!</slot> <!--기본 컨텐츠를 제공할 수 있음. / html 요소나 다른 컴포넌트도 올 수 있다.-->
    </button>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const fancyMessage = ref('Fancy Message')

        return {fancyMessage}
    }
}
</script>

<style scoped>
    .fancy-btn {
        color:#fff;
        background: linear-gradient(315deg, #42d392 25%, #647eff);
        border:none;
        padding: 5px 12px;
        margin:5px;
        border-radius: 8px;
        cursor: pointer;
    }
</style>