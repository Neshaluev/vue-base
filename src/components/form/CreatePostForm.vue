<template>
  <form @submit.prevent="submit">
    <div class="form-field">
      <d-input v-model:value="login" placeholder="Title" />
    </div>
    <div class="form-field">
      <d-input v-model:value="password" placeholder="Description" />
    </div>
    <div class="form-field">
      <d-input type="date" />
    </div>
    <div class="form-field-img">
      <d-button size="small">Load Image</d-button>
      <div class="form-field-img__container">
        <img src="https://picsum.photos/70/70" alt="" />
      </div>
    </div>
    <div class="form-field">
      <d-button type="submit" full>Create Post</d-button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
let login = ref("");
let password = ref("");

function submit(data) {
  console.log("form data login", data);
  console.log("login", login.value);
  console.log("login", password.value);
}
</script>

<style lang="scss" scoped></style>
