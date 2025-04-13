<template>
    <div class="card">
        <div class="card-body">Lifecycle Child</div>
        <input id="input" type="text" />
    </div>
</template>

<script>
import { onBeforeUnmount, onUnmounted } from 'vue'
import { onBeforeMount, onMounted } from 'vue';
export default {
    setup () {
       

       // console.log('[Child] setup');

        
        onBeforeMount(() => {
            console.log('[Child] onBeforeMount');
        });
        onMounted(() => {
            console.log('[Child] onMounted');
        });
        
        onBeforeUnmount(()=>{
            console.log('[Child] onBeforeUnmount');

            // 마운트를 해제하기 직전에 호출하는 Hook이므로 DOM을 갖고 올 수 있다.
            console.log('[Child] onBeforeUnmount ',document.querySelector('#input')); 
        });
        
        onUnmounted(()=>{
            console.log('[Child] onUnmounted');

            //마운트를 해제한 Hook이므로 DOM을 가지고 왔을때 null을 표시
            console.log('[Child] onUnmounted', document.querySelector('#input'));
        });


        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>