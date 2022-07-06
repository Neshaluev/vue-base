import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DInput",
  props: ["suffix"],
  setup(props, { slots, attrs, emit }) {
    const inputRef = ref();

    // console.log("attrs input", { ...attrs });

    const triggerChange = (e: Event) => {
      emit("update:value", (e.target as HTMLInputElement).value);
      emit("change", e);
      emit("input", e);
    };

    const handleChange = (e: any) => {
      // const { value } = e.target as any;
      // console.log("onChange", e.target.value);
      triggerChange(e);
    };

    const renderInput = () => {
      const inputProps = {
        ...attrs,
        onChange: handleChange,
        ref: inputRef,
        class: "input",
      };

      const node = (
        <span class="wrapper-input">
          <input {...inputProps} />
        </span>
      );

      return node;
    };

    return () => {
      // const { suffix = slots.suffix?.() } = props;
      // console.log("Slot", slots.suffix?.());

      // console.log("props INPUT", props.suffix);
      return renderInput();
    };
  },
});
