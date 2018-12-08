<template>
  <section class="container">
    <div>
      <h1>Rakuten</h1>
      <p>
        Qiita is a technical knowledge sharing and collaboration platform for programmers.
      </p>
      <div class="links">
        <nuxt-link to="/search" class="button--white"><i class="el-icon-search"></i> Search</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: #bf0000;
}
h1 {
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #fff;
  letter-spacing: 5px;
}
h4 {
  font-weight: 300;
  font-size: 18px;
  word-spacing: 2px;
  padding-top: 24px;
  padding-bottom: 30px;
}
.container .links {
  padding-top: 15px;
}
</style>
