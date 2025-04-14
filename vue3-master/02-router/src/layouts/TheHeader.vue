<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">VueBoard</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <!--
                RouterLink
                Vue Router에서 페이지를 이동할 때 제공하는 컴포넌트.
                이를 통해 Vue Router는 페이지를 리로딩 하지 않고 URL에 매핑된 페이지를 렌더링할 수 있다.
                (리로딩이 일어나지 않는 싱글페이지 생성 가능.)
              
                활성화된 링크에 active 클래스 넣기
                active-class="active"
              -->
              <RouterLink to="/" class="nav-link" active-class="active">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link" active-class="active">About</RouterLink>
            </li>
            <!--
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            -->
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>