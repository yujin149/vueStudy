<template>
    <div class="container py-4">
        <!-- 컴포지션 API로 input 엘리먼트에 접근하기 위해서 ref속성을 이용해 이름을 지어줌. -->
        <input ref="inputRef" type="text" value="hello world!"/>

        <hr />
        <button @click = "visible = !visible">Toggle Child</button>

        <LifecylceChildVue v-if="visible"></LifecylceChildVue>


        <p id="message">{{ message }}</p>
    </div>
</template>

<!-- 
[실행순서]
1. 부모 컴포넌트 setup함수
2. 부모 컴포넌트 onBeforeMount 함수
3. 부모 컴포넌트 onBeforeMount 함수
4. 자식 컴포넌트 setup함수
5. 자식 컴포넌트 onBeforeMount 함수
6. 자식 컴포넌트 onBeforeMount 함수
7. 자식 컴포넌트 완료
8. 부모 컴포넌트 완료

-->
<script>
import { ref } from 'vue';
// import { onBeforeMount, onMounted} from 'vue';
// import { onBeforeUpdate, onUpdated,} from 'vue';
import LifecylceChildVue from './LifecylceChild.vue';
export default {
    components : {
        LifecylceChildVue,
    },
    setup () {
        // console.log('setup'); //실행순서1 **

        const inputRef = ref(null); //이 반응형 데이터와 위의 inputRef와 연결

        /*
        //Mounting(장착 - 마운트 장착)
        //컴포넌트 삽입하는 마운팅 단계

        //onBeforeMount 컴포넌트가 마운트 되기 직전에 호출되는 훅
        onBeforeMount(() => { 
            console.log('onBeforeMount');
            console.log('onBeforeMount', inputRef.value); //여기서는 아직 마운트가 되기 전이므로 null이 된다.
        });

        
        // onMounted 컴포넌트가 마운트 된 후에 호출되는 훅
        // DOM에 추가가 되었기 때문에 DOM에 접근할 수 있다.
        onMounted(() => { 
            console.log('onMounted', inputRef.value); // input DOM객체를 가져옴.
            console.log('onMounted', inputRef.value.value); // input의 value값 .
        });

        */


        const message = ref('');

        /* 

        //Updating : 컴포넌트에서 사용되는 반응형 데이터가 변경되거나 어떠한 이유로 재렌더링이 발생될 때 호출
        //onBeforeUpdate : 반응형 상태 변경으로 인해 컴포넌트가 DOM 트리를 업데이트하기 직전에 호출.
        onBeforeUpdate(()=> {
            console.log('onBeforeUpdate');
            console.log('onBeforeUpdate :', message.value);
            console.log( // DOM트리가 업데이트하기 이전이므로, 변경 전 내용이 나옴.
                'DOM Content : ',
                document.querySelector('#message').textContent,
            )
        });

        //onUpdated : DOM 트리를 업데이트 한 후 호출.
        onUpdated(()=> {
            console.log('onUpdated');
            console.log('onUpdated :',message.value);
            console.log(
                'DOM Content : ',
                document.querySelector('#message').textContent,
            )
        });

        */


        const visible = ref(false);

        return {inputRef, message, visible, }
    },

    /*

    //vue2에서 반응형 데이터를 선언할 때, data옵션으로 선언
    data: () => ({
        dataMessage : 'data message',
    }),

    //vue2에서 이러한 코드를 사용했으며, vue3에서는 setup함수 내에서 사용하면 된다.
    beforeCreate(){ //컴포넌트가 초기화될 때 실행되는 훅
        console.log('beforeCreate'); //실행순서2  **
        console.log(this.dataMessage); // 아직 data옵션이 처리하기 전이기 때문에 접근을 할수 없다. (undefinde)
        
    },
    created(){
        console.log('created'); //실행순서3  **
        console.log(this.dataMessage); //data옵션을 처리한 이후이기 때문에 접근 가능.
    },

    */
}
</script>

<style lang="scss" scoped>

</style>