<template>
    <main>
        <div class="container py-4">
            <div class="container text-center">
                <div class="row g-3">
                    <div class="col col-4" >
                        <AppList
                            :title = "data.title"
                            :contents = "data.contents"
                            :type = "data.type"
                            :is-like="data.isLike"
                            @toggle-like= "data.isLike = !data.isLike"
                         />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import AppList from './AppList.vue';
import data from '../assets/board.json';
export default {
    components : {
        AppList,
    },
    data(){
        //json 데이터 기본값 넣기
        const dataList = data.map(item => ({
            ...item,
            isLike : false,
        }));
        return {dataList}
    },
    setup () {
        return {}
    }
}
</script>

<style scoped>

</style>