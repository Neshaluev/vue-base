import { defineComponent, watch } from "vue";
import { useInjectTabs } from "../TabContext";

import TabNavItem from "./TabNavItem";

export default defineComponent({
  name: "DTabNav",
  props: ["onTabClick", "activeKey"],
  setup(props) {
    return () => {
      const { onTabClick, activeKey } = props;

      const { tabs } = useInjectTabs();

      // console.log("tabs nvbar", tabs);

      const tabNodes = tabs.value.map((tab, i) => {
        const { key } = tab;
        return (
          <TabNavItem
            key={i}
            tab={tab}
            active={key === activeKey}
            onClick={(e: any) => {
              onTabClick(key, e);
            }}
          />
        );
      });

      const node = <div class="tab-navbar">{tabNodes}</div>;

      return node;
    };
  },
});
