export default {
  setItems(state, data) {
    state.lists = data.Items;
  },
  hideLoading(state) {
    state.isLoading = false;
  },
  showLoading(state) {
    state.isLoading = true;
  }
};
