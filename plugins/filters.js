import Vue from "vue";

// 本文のトリミング
Vue.filter('description', function (value) {
  if (value) {
    return value.slice(0, 100) + '...'
  }
})
