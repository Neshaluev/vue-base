<template>
  <BaseLayout>
    <h2 class="">Update Post</h2>

    <div class="post">
      <UpdatePostForm />
      <div class="post-delete">
        <d-button color="error" @click="openModal">Delete Post</d-button>
      </div>
    </div>
  </BaseLayout>
  <teleport to="body">
    <AppModal @close="closeModal" v-show="visibleModal">
      <template #header>Delete Post</template>
      <template #body>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quo
          aperiam nulla voluptatibus repellat saepe incidunt eos distinctio nam,
          ea ipsa totam praesentium cum vel eum nesciunt! Impedit omnis adipisci
          at expedita sint soluta voluptate molestias? Maxime enim asperiores
          fugit illo unde, dolorem necessitatibus, illum nostrum saepe excepturi
          mollitia distinctio.
        </p>
      </template>
      <template #footer
        ><d-button color="error">Delete Post</d-button></template
      >
    </AppModal>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseLayout from "@/components/BaseLayout.vue";
import UpdatePostForm from "@/components/form/UpdatePostForm.vue";
import AppModal from "@/components/AppModal.vue";

const visibleModal = ref<boolean>(false);

function closeModal() {
  visibleModal.value = false;
}
function openModal() {
  visibleModal.value = true;
}
</script>

<style lang="scss" scoped></style>
