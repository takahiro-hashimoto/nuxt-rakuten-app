<template>
  <el-form :inline="true" :model="searchForm" ref="searchForm" :rules="rules" @submit.native.prevent>
    <el-form-item prop="keyword">
      <el-input placeholder="search by keyword" prefix-icon="el-icon-search" v-model="searchForm.keyword"  @keyup.enter.native="search('searchForm')" />
    </el-form-item>
    <el-form-item>
      <el-button @click="search('searchForm')">search</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="babel">
export default {
  data () {
    return {
      // 検索フォーム
      searchForm: {
        keyword: ''
      },
      // バリデーションルール
      rules: {
        keyword: [
          // 未入力はエラー
          { required: true, message: 'キーワードを入力してください', trigger: 'blur' },
          // 空白のみの入力はエラー
          { whitespace: true, message: 'キーワードを入力してください', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // search ボタン押下で呼ばれるメソッド
    search (form) {
      this.$refs[form].validate((valid) => {
        if (!valid) {
          return false
        }
        this.sendRequest()
      })
    },
    // store の action から getItems を呼ぶ
    sendRequest () {
      this.$store.dispatch('getItems', {
        keyword: this.searchForm.keyword
      })
    }
  }
}
</script>

<style>
.el-form {
  margin-top: 1em;
  margin-left: 1em;
}
</style>
