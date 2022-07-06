import { createStore } from "vuex";

import modules from "./modules";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default createStore({
  modules: {
    ...modules,
  },
  state: {},
  actions,
  getters,
  mutations,
});
