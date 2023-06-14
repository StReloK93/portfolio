<template>
    <div class="h-screen flex justify-center items-center">
        <form @submit.prevent="login" class="w-[400px] bg-gray-200 p-4 text-gray-700">
            <h3 class="text-center text-2xl">
                Login form
            </h3>
            <div class="mb-3">
                <label for="loginInp" class="w-full inline-block">Login</label>
                <input id="loginInp" v-model="formData.login" type="text" class="bg-transparent border-b border-white outline-none px-2 py-1.5">
            </div>
            <div class="mb-3">
                <label for="passwordInp" class="w-full inline-block">Password</label>
                <input id="passwordInp" v-model="formData.password" type="password" class="bg-transparent border-b border-white outline-none px-2 py-1.5">
            </div>
            <button class="bg-pink-600 text-white w-full py-1.5">
                Submit
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '@/store/useAuthStore'
const store = useAuthStore()


const formData = reactive({
    login: null,
    password: null,
})

function login(){
    store.login(formData)
}
</script>