<template>
    <div>
        <NavBar />
        <router-view />
    </div>
    <teleport to="body">
        <AppAlert />
    </teleport>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AppAlert from '@/components/AppAlert.vue'
</script>

<style lang="scss"></style>
