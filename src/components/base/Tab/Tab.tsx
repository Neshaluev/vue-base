// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from "@/hooks/useState";
import { computed, defineComponent, ref, watchEffect } from "vue";

import { useProvideTabs } from "./TabContext";

import TabNav from "./TabNav/TabNav";
import TabPanelList from "./TabPanel/TabPanelList";

export default defineComponent({
  name: "DTab",
  props: ["activeKey", "onChange"],
  setup(props, { attrs, slots, emit }) {
    const handleChange = (key: string) => {
      emit("update:activeKey", key);
      emit("change", key);
    };

    const tabsRef = ref(null);

    const tabs = slots.default?.() as Array<any>;

    useProvideTabs({
      tabs: computed(() => tabs),
    });

    // active key
    const [activeTab, setActiveTab] = useState(() => props.activeKey);

    const onInternalTabClick = ([key, event]: any) => {
      const isActiveChanged = key !== activeTab.value;
      setActiveTab(key);

      if (isActiveChanged) {
        handleChange(key);
      }
    };

    return () => {
      const sharedProps = {
        activeKey: activeTab.value,
      };

      const tabNabProps = {
        ...sharedProps,
        onTabClick: onInternalTabClick,
      };

      const tabNavBar = <TabNav {...tabNabProps} v-slots={slots} />;

      const node = (
        <div ref={tabsRef} class="tab">
          {tabNavBar}
          <TabPanelList {...sharedProps} />
        </div>
      );
      return node;
    };
  },
});
