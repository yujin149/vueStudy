<template>
  <div>
<!-- 

to로 했을때 (push), 라우트 히스토리에 쌓임.
클릭을 about - Nested - NestedOne - NestedTwo로 했을 때, 뒤로가기를 하면, 이 반대로 이동.

Replace는 히스토리에 쌓이는 게 아니라 대체됨.
아래처럼 true로 지정을 하고 위처럼 클릭을 진행했다면,
about - Nested
      - NestedOne
      - NestedTwo 로 대체가 됨.
따라서, 뒤로가기 누르면 about페이지로 이동

 -->

    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- <RouterLink  class="nav-link" active-class="active" to="/nested/one">Nested One</RouterLink> -->
        <RouterLink  class="nav-link" active-class="active" :to="{name: 'NestedOne', replace:true}">Nested One</RouterLink>
      </li>
      <li class="nav-item">
        <!-- <RouterLink  class="nav-link" active-class="active" to="/nested/two">Nested Two</RouterLink> -->
        <RouterLink  class="nav-link" active-class="active" :to="{name: 'NestedTwo', replace:true}">Nested Two</RouterLink>
      </li>
    </ul>
    <hr class="my-4" />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>