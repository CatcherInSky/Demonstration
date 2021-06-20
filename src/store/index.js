import {createStore} from 'vuex';

export default createStore({
  state: {
    anchor_list: [],
  },
  mutations: {
    update_anchor_list(state, list) {
      state.anchor_list = list;
    }
  }
});
