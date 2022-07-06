<template>
  <form @submit.prevent="submit">
    <div class="form-field">
      <d-input v-model:value="login" placeholder="Login" />
    </div>
    <div class="form-field">
      <d-input
        v-model:value="password"
        placeholder="Password"
        type="password"
      />
    </div>
    <div class="form-field">
      <d-button type="submit" full :loading="isLoading" :disabled="isLoading"
        >Send</d-button
      >
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
let login = ref("");
let password = ref("");

const store = useStore();

let isLoading = computed(() => store.state.auth.isLoading);

function submit(data) {
  store.dispatch("auth/login", {
    login: login.value,
    password: password.value,
  });

  console.log("Component, isloading", isLoading.value);
}
</script>

<style lang="scss" scoped>
.form-field {
  margin-bottom: 10px;
}
</style>
