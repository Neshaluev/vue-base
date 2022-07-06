export default {
  clearItems(state: any, { modules = [] }) {
    modules.forEach((module) => {
      state[module].items = [];
    });
  },
};
