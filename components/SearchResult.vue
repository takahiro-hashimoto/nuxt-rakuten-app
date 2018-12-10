<template>
<div>
  <!-- 検索結果が0件だった場合 -->
  <template v-if="lists.length === 0 && !isLoading">
    <i class="text-error">検索にヒットする商品がありませんでした</i>
  </template>
  <!-- 検索結果一覧 -->
  <template v-else>
    <el-col :span="6" v-for="item in lists" :key="item.id" class="col-style">
      <el-card :body-style="{ padding: '15px' }" class="card">
        <p class="l-bottom-small"><img :src="item.Item.smallImageUrls[0]" width="64" height="64"></p>
        <p class="card-title l-bottom-small"><a :href="item.Item.itemUrl" target="_blank">{{ item.Item.itemName }}</a></p>
        <p class="l-bottom-small">価格：￥{{item.Item.itemPrice}}</p>
        <p class="card-description">商品説明：{{item.Item.itemCaption}}</p>
      </el-card>
    </el-col>
  </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  // store の state からデータを取得
  computed: mapState(['lists', 'isLoading']),
}
</script>

<style>

.card {
  height: 360px;
  font-size: 15px;
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

.text-error {
  color: #bf0000;
}

a:link,
a:visited {
  color: #3a8ee6;
}

a:hover {
  color: #2571bf;
}
</style>
