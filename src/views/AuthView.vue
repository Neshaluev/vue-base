<template>
    <div class="wrapper-auth">
        <div class="auth-form">
            <h2>Authentication page</h2>
            <d-tab v-model:activeKey="activeKey">
                <d-tab-panel key="1" tab="Sign In">
                    <LoginForm />
                </d-tab-panel>
                <d-tab-panel key="2" tab="Sign Up">
                    <RegisterForm />
                </d-tab-panel>
            </d-tab>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '@/components/form/LoginForm.vue'
import RegisterForm from '@/components/form/RegisterForm.vue'
import { useDarkModeToggle } from '@/hooks/useTheme'

const activeKey = ref('1')
const checked = ref(false)

const { switchTheme } = useDarkModeToggle()

function toggleTheme() {
    console.log('click')
    switchTheme()
}

console.log('checked', checked.value)
</script>

<style lang="scss" scoped></style>
