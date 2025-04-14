<template>
  <div>
    <!-- 
    
    양방향 바인딩
    입력 요소의 상태와 자바스크립트 상태를 동기화해야하는 상황일때, 양방향 바인딩을 사용한다.
  -->
    <h2>input value</h2>
    <!-- 단방향 바인딩  v-bind ( :으로 단축표현) -->
    <!-- <input type="text" :value="inputValue" @input="event => (inputValue = event.target.value)"/> -->

    <!-- 양방향 바인딩 / 위의 단방향 바인딩을 단순화할 수 있다. -->
    <!-- <input type="text" v-model="inputValue" /> -->

    <!-- 
      .lazy 
      동기화가 안되다가 포커스가 떨어졌을 때, 그때 동기화 됨.
    -->
    <!-- <input type="text" v-model.lazy="inputValue" /> -->

    <!-- 
      .number 
      Number 타입으로 받고 싶을때 ( 기본적으로 string타입으로 받음. )
      자동으로 형변환되어 동기화
    -->
    <!-- <input type="text" v-model.number="inputValue" /> -->

    <!-- 
      .trim
      앞뒤 공백 제거
    -->
    <input type="text" v-model.trim="inputValue" />

    <div>{{ inputValue }}</div>
    <div>{{ typeof inputValue }}</div>

    <hr />

    <h2>textarea value</h2>
    <!-- <textarea
      :value="textareaValue"
      @input="event => (textareaValue = event.target.value)"
    ></textarea> -->
    <textarea v-model="textareaValue"></textarea>
    <div>{{ textareaValue }}</div>

    <hr />

    <h2>checkbox value</h2>
    <!-- <input
      type="checkbox"
      id="checkbox"
      :checked="checkboxValue"
      @change="event => (checkboxValue = event.target.checked)"
    /> -->
    <!-- <input type="checkbox" id="checkbox" v-model="checkboxValue" /> -->
    <input
      type="checkbox"
      id="checkbox"
      v-model="checkboxValue"
      true-value="Yes"
      false-value="No"
    />
    <label for="checkbox">{{ checkboxValue }} </label>

    <hr />

    <h2>checkbox values</h2>
    <label>
      <input type="checkbox" value="html" v-model="checkboxValues" />
      HTML
    </label>
    <label>
      <input type="checkbox" value="css" v-model="checkboxValues" />
      CSS
    </label>
    <label>
      <input type="checkbox" value="javascript" v-model="checkboxValues" />
      JavaScript
    </label>

    <div>{{ checkboxValues }}</div>
    <hr />

    <h2>radio value</h2>
    <!--<label>
      <input type="radio" name="type" value="남" :checked="radioValue === '남'"
        @change="event => {radioValue = event.target.value;}"/>
      남
    </label>
    <label>
      <input type="radio" name="type" value="여" :checked="radioValue === '여'"
        @change="event => {radioValue = event.target.value;}"/>
      여
    </label>-->
    <label>
      <input type="radio" name="type" value="남" v-model="radioValue" />
      남
    </label>
    <label>
      <input type="radio" name="type" value="여" v-model="radioValue" />
      여
    </label>
    <div>{{ radioValue }}</div>

    <hr />

    <h2>select value</h2>
    <!-- <select
      :value="selectValue" @change="event => { selectValue = event.target.value;}">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
    </select> -->

    <select v-model="selectValue">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
    </select>
    <div>{{ selectValue }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');

    const textareaValue = ref('');

    const checkboxValue = ref(true);

    const checkboxValues = ref([]); // 배열

    const radioValue = ref('여');

    const selectValue = ref('html');

    return {
      inputValue,
      textareaValue,
      checkboxValue,
      radioValue,
      selectValue,
      checkboxValues,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>