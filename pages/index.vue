<template>
  <section class="container">
    <div>
      <h1 class="heading-title l-bottom-large">Rakuten App</h1>
      <div class="button-link">
        <nuxt-link to="/search"><i class="el-icon-search"></i> Search</nuxt-link>
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

.heading-title {
  font-weight: bold;
  font-size: 100px;
  color: #fff;
  letter-spacing: 5px;
}

.button-link a {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #fff;
  text-decoration: none;
  padding: 10px 30px;
  color: #fff;
}

.button-link a:link,
.button-link a:visited {
  color: #fff;
}
</style>
