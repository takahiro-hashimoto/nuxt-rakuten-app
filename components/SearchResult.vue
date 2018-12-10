<template>
<div>
  <!-- 検索結果が0件だった場合 -->
  <template v-if="lists.length === 0 && !isLoading">
    <i class="el-icon-warning">&nbsp;No results found for your keyword.</i>
  </template>
  <!-- 検索結果一覧 -->
  <template v-else>
    <el-col :span="6" v-for="item in lists" :key="item.id" class="col-style">
      <el-card :body-style="{ padding: '15px' }" class="box-card">
        <p class="l-bottom-small"><img :src="item.Item.smallImageUrls[0]" width="64" height="64"></p>
        <p class="card-title l-bottom-small"><a :href="item.Item.itemUrl" target="_blank">{{ item.Item.itemName }}</a></p>
        <p class="l-bottom-small">価格：￥{{item.Item.itemPrice}}</p>
        <p class="card-description">商品説明：{{item.Item.itemCaption}}</p>
      </el-card>
    </el-col>
  </template>
  </div>
</template>

<script lang="babel">
import {mapState} from 'vuex'

export default {
  data () {
    return {
      scrollY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // store の state からデータを取得
  computed: mapState(['lists', 'isLoading']),
  methods: {
    // 現在の上部からのスクロール量取得
    handleScroll: function () {
      this.scrollY = window.scrollY
    },
    // トップへスクロール
    scrollTop: function () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
.content-style {
  line-height: 30px;
  font-size: 14px;
}

.tab-style {
  margin-right: 5px;
}

.card-title {
  overflow: hidden;
	height: 4.5em;
	line-height: 1.5;
}

.card-description {
  overflow: hidden;
	height: 9em;
	line-height: 1.5;
}

.box-card {
  height: 360px;
  font-size: 15px;
}

.col-style {
  padding: 10px;
}

.page-component-up {
  background-color: #3a8ee6;
  position: fixed;
  right: 80px;
  bottom: 80px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}

.page-component-up i {
  color: #fff;
  display: block;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}

a:link,
a:visited {
  color: #3a8ee6;
}

a:hover {
  color: #2571bf;
}
</style>
