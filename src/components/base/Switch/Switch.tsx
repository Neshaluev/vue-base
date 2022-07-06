import { defineComponent } from "vue";

export default defineComponent({
  name: "DSwitch",
  props: ["toggle"],
  setup(props, { slots, attrs, emit }) {
    return () => {
      const { toggle } = props;

      const classes = ["switch toggle", toggle ? "toggle-on" : undefined].join(
        " "
      );

      const triggerChange = () => {
        emit("update:toggle", !toggle);
      };

      const handleChange = () => {
        triggerChange();
      };
      const switchProps = {
        onClick: handleChange,
      };
      const node = (
        <div class={classes} {...switchProps}>
          <div class="toggle-text-off">Light</div>
          <div class="glow-comp"></div>
          <div class="toggle-button"></div>
          <div class="toggle-text-on"> Dark</div>
        </div>
      );

      return node;
    };
  },
});
