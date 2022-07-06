<template>
  <div class="navbar">
    <nav>
      <ul class="navbar-menu">
        <li v-for="r in routes" :key="r.name" class="navbar-menu-item">
          <router-link :to="r.path" :key="r.name">{{ r.name }}</router-link> |
        </li>
      </ul>
    </nav>
    <div class="navbar-switch">
      <d-switch v-model:toggle="toggle" @click="toggleTheme" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDarkModeToggle } from "@/hooks/useTheme";
import { routes } from "@/router";

const toggle = ref(true);

const { switchTheme } = useDarkModeToggle();

function toggleTheme() {
  console.log("click");
  switchTheme();
}
</script>

<style lang="scss" scoped></style>
