import { defineComponent } from "vue";

export default defineComponent({
  name: "DTabNavItem",
  props: ["tab", "onClick", "active"],
  setup(props) {
    return () => {
      const { tab, onClick, active } = props;

      const { props: tabProps } = tab;

      const classes = {
        ["tab-item"]: true,
        ["tab-item-active"]: active,
      };

      const node = (
        <div
          onClick={(e: any) => {
            e.stopPropagation();
            onClick(e);
          }}
          class={classes}
        >
          {tabProps.tab || "default text"}
        </div>
      );
      return node;
    };
  },
});
