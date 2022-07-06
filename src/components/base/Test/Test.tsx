import { defineComponent } from "vue";

export default defineComponent({
  name: "DTest",
  setup(props, { attrs, slots, emit }) {
    return () => {
      const node = <div>Test</div>;

      return node;
    };
  },
});
