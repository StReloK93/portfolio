<template>
    <section class="absolute inset-0 bg-black/30 flex justify-center items-center py-10">
        <main class="bg-white w-[210mm] h-full rounded overflow-hidden shadow-lg flex flex-col">
            <header class="bg-gray-100 text-right">
                <button @click="$router.push({name: 'home'})" class="w-10 h-10 bg-gray-300 inline-block hover:bg-red-300 active:bg-red-200">
                    <i class="fa-light fa-xmark text-gray-900"></i>
                </button>
            </header>
            <footer class="p-4 flex-grow overflow-y-auto">
                <ResumeVariantOne />
            </footer>
        </main>
    </section>
</template>

<script setup lang="ts">
import ResumeVariantOne from '@/Components/ResumeVariantOne.vue'
</script>