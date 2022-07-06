<template>
  <form @submit.prevent="submit">
    <div class="form-field">
      <d-input placeholder="Name" />
    </div>
    <div class="form-field">
      <d-input placeholder="Login" />
    </div>
    <div class="form-field">
      <d-input placeholder="Password" type="password" />
    </div>
    <div class="form-field">
      <d-input placeholder="Confirm password" type="password" />
    </div>
    <div class="form-field">
      <d-button type="submit" full>Send</d-button>
    </div>
  </form>
</template>

<script setup>
function submit(data) {
  console.log("form data register", data);
}
</script>

<style lang="scss" scoped>
.form-field {
  margin-bottom: 10px;
}
</style>
