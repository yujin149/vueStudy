<template>

    <div class="p-3 bg-dark">  
        <button class="btn btn-primary" type="button" >My Button {{ message }}</button>
    </div>
</template>

<script>
export default {

    //상속을 피하려면, inheritAttrs : false 적용.
    inheritAttrs : false,

}
</script>

<script setup>
import { ref } from 'vue'
const message = ref('message');
</script>

<style lang="scss" scoped>

</style>