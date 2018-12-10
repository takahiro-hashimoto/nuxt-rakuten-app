<template>
  <div>
    <el-container>
      <el-main v-loading.fullscreen.lock="isLoading">
        <!-- 検索フォーム -->
        <search-form />
        <!-- 検索結果一覧 -->
        <search-result />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="babel">
import {mapState} from 'vuex'
import SearchResult from '~/components/SearchResult.vue'
import SearchForm from '~/components/SearchForm.vue'

export default {
  layout: 'search',
  components: {
    SearchForm,
    SearchResult
  },
  // store の state からデータを取得
  computed: mapState(['isLoading']),

  // ページがレンダリングされる前に、getItemsを呼び、データをストアに入れる
  fetch ({ store }) {
    store.dispatch('getItems', {
      keyword: '一眼レフカメラ'
    })
  }
}
</script>
