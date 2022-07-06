<template>
    <div class="modal">
        <div class="modal-container">
            <div class="modal-header">
                <slot name="header" />
            </div>
            <div class="modal-body">
                <slot name="body" />
            </div>
            <div class="modal-footer">
                <slot name="footer" />
                <d-button @click="close">Close</d-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { defineEmits } from "vue";
const emit = defineEmits(['close'])

function close() {
    emit('close')
}
</script>

<style></style>
