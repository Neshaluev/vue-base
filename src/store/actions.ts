export default {
  clearItems({ commit }: any, { modules = [] }) {
    commit("clearItems", { modules });
  },
};
