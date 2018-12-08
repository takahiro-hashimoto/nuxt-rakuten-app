export default {
  setItems(state, lists) {
    state.lists = lists;
    console.log(state)
  },
  hideLoading(state) {
    state.isLoading = false;
  },
  showLoading(state) {
    state.isLoading = true;
  }
};
