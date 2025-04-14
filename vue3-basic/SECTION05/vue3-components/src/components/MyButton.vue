<template>
    <!-- 루트 엘리먼트(최상위)에 부모에서 정의한 @click="sayHello"이 적용됨. -->
    <div class="p-3 bg-dark">  
        <!-- click으로 이벤트명을 변경했을때, 여기(루트 엘리먼트)로 바인딩 되기때문에 
        
        button을 클릭하면, div에 대한 click이벤트, button에 대한 click이벤트가 실행 (2번 실행됨). 
        따라서, 이벤트 발생 시, emit옵션으로 이벤트 선언을 해서 없애야함.
        -->

        <!-- {{ $attrs }}  버튼에는 상속받고 싶을 때, attrs 객체를 사용하여 바인딩 할 수 있다.-->
        <!-- v-bind만 해서 객체를 넘기게 되면 다중 속성 바인딩이 됨. 따라서, 부모 컴포넌트에서 넘긴 class, id, 이벤트가 바인딩 -->
        <!-- $attrs를 사용할때, -이 들어가있는 건, $attrs['foo-bar'] 이런식으로 대괄호를 해야함.-->
        <!-- <button class="btn btn-primary" type="button" v-bind="$attrs">My Button</button> -->



        <button class="btn btn-primary" type="button" @click="sayHello">My Button</button>

    </div>
</template>

<script>
export default {
    // inheritAttrs : false, //상속을 비활성화 할때, 
    emits : ['click'], //이벤트 발생시킬 때는 emit옵션에 꼭 선언 해야함!!
    
    /*setup (props, context) {
        console.log('context.attrs : ', context.attrs);
        console.log('class : ', context.attrs.class);
        console.log('id : ', context.attrs.id);
        console.log('onClick : ', context.attrs.onClick);
        // context.attrs.onClick();
        

        return {}
    }*/

    //emit을 정의하지 않음.
    //non-prop 속성 특정상, 정의되지 않은 props나 이벤트는 root element에 상속된다.
    setup (props, {emit}){ 
        const sayHello = () => {
            emit('click');
        }

        return {sayHello};
    }
}
</script>

<style lang="scss" scoped>

</style>