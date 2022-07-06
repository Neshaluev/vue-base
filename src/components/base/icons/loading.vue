<template>
  <svg
    version="1.1"
    id="L4"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="20px"
    y="20px"
    xml:space="preserve"
  >
    <circle fill="blue" stroke="blue" cx="6" cy="10" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.1"
      />
    </circle>
    <circle fill="blue" stroke="blue" cx="26" cy="10" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.2"
      />
    </circle>
    <circle fill="blue" stroke="blue" cx="46" cy="10" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.3"
      />
    </circle>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingSvg",
});
</script>
<style lang="scss" scoped></style>
