<template>
  <div>
    <!--
    이벤트 수식어
    event.preventDefault() 또는 event.stopPropagation() 호출.
    event.preventDefault() : 기본 기능 막기
    event.stopPropagation() : 이벤트 전파 막기

    .stop = e.stopPropagation()
    .prevent = e.preventDefault()
    .capture = 캡처 모드를 사용할 때 이벤트 리스너를 사용 가능
    .self = 자기 자신만 호출
    .once = 한 번만 실행
    .passive = 일반적으로 모바일 장치의 성능을 개선 하기 위해 터치 이벤트 리스너와 함께 사용된다.

    -->

    <!-- 
      이벤트 전파에 의해 clickSpan의 alert이 뜨고, div의 페이지 이동이 된다. 
      이를, e.stopPropagation();통해 막아준다.
      (또는 @click.stop)
    -->

    <div id="modifiers">
      <!-- 
        이벤트 전파는 캡쳐링으로 시작해서 버블링으로 마무리되는 이벤트 플로우. 
        만약, div 태그 먼저 실행하고 싶으면 캡쳐모드로 동작하게 한다.

        원래는 span - p - div 순서
        현재는 div - span - p 순서
      -->
      <div  @click.capture = "clickDiv">
        DIV 영역

        <!-- 
        .self는 오로지 자기 자신만 노출한다.
        target(클릭한 요소)가 자신일때, 이벤트 실행.
        따라서, span영역을 클릭해도 p태그의 이벤트는 동작하지 않는다. (타깃이 본인이 아니므로)

        -->
        <p @click.self = "clickP">
          P 영역
          <!-- <span @click.stop = "clickSpan">SPAN 영역</span> -->

          <span @click = "clickSpan">SPAN 영역</span>
          <!-- 이벤트 버블링에 의해서 prevent를 해도, div의 기능으로 페이지 이동 따라서, .stop도 넣어준다. -->
          <a href="https://naver.com" @click.prevent.stop = "clickA">a 영역</a> 
          </p>
        </div>
        <!-- 한번만 실행됨. -->
        <button @click.once="clickDiv">Once</button>

        <!-- 
        .passive는 실무에서 @scroll.passive처럼 사용.
        -->
        <div @scroll.passive="onScroll">...</div>
      </div>

       <!-- clickA의 기능이 발생하고 기본 기능인 문서 연결 진행. -->
       <!-- 이러한 기본 기능을 막으려면, prevent로 막아준다. -->
       <a href="https://naver.com" @click.prevent = "clickA">a 영역</a>
  </div>



</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
      // location.href = 'https://naver.com'
    }
    const clickP = () => {
      console.log('clickP');
    }
    /* const clickSpan = e => {
      e.stopPropagation();
      console.log('clickSpan');
      alert('좋아요');
    }*/

    const clickSpan = () => {
      console.log('clickSpan');
      // alert('좋아요');
    }

    /*const clickA = e => {
      e.preventDefault();
      alert('어떤 기능');
    }*/
   const clickA = () => {
      alert('어떤 기능');
    }

    return {clickDiv, clickP, clickSpan, clickA};
  },
};
</script>

<style scoped>
#modifiers div, #modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background: #ccc;
}
#modifiers p {
  background: #999;
}
#modifiers span {
  background: #666;
  display: block;
}
</style>
