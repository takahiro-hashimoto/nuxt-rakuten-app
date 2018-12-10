import axios from "axios";

const BASE_URL = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1032774112986862191&keyword=";

export default {
  async getItems({ commit }, payload) {
    // isLoading を true に設定
    commit("showLoading");
    // リクエスト送信
    const response = await axios
      .get(BASE_URL + payload.keyword , {
        headers: { "Content-Type": "application/json" },
        timeout: 15000
      })
      .catch(error => {
        // isLoading を false に設定
        commit("hideLoading");
        // エラー画面に遷移
        this.$router.push("/error");
      });
    // lists にレスポンスを設定
    commit("setItems", response.data);
    // isLoading を false に設定
    commit("hideLoading");
  }
};
