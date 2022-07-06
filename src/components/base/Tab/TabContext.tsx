import { provide, inject, defineComponent, toRefs, ref } from "vue";

export const useProvideTabs = (props: any) => {
  provide("tabsContextKey", props);
};

export const useInjectTabs = () => {
  return inject("tabsContextKey", { tabs: ref([]) });
};

const TabsContextProvider = defineComponent({
  name: "TabsContextProvider",
  props: ["tabs"],
  setup(props, { slots }) {
    useProvideTabs(toRefs(props));
    return () => slots.default?.();
  },
});

export default TabsContextProvider;
