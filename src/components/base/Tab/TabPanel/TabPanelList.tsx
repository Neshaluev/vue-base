// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { cloneElement } from "@/utils/cloneElement";
import { defineComponent } from "vue";
import { useInjectTabs } from "../TabContext";

export default defineComponent({
  name: "DTabPanelList",
  props: ["activeKey"],
  setup(props) {
    const { tabs } = useInjectTabs();
    return () => {
      const { activeKey } = props;

      return (
        <div class="tab-list">
          {tabs.value.map((tab) => {
            const node = cloneElement(tab, {
              key: tab.key,
              active: tab.key === activeKey,
            });

            return node;
          })}
        </div>
      );
    };
  },
});
