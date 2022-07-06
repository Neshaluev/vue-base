import { defineComponent } from "vue";

export default defineComponent({
  name: "DTabPanel",
  props: ["active"],
  setup(props, { attrs, slots, emit }) {
    const children = slots.default?.();

    return () => {
      const { active } = props;

      const classes = {
        ["tab-panel-item"]: true && !active,
        ["tab-panel-item-active"]: active,
      };

      const node = (
        <div class={classes}>
          <h4>{children}</h4>
        </div>
      );

      return node;
    };
  },
});
