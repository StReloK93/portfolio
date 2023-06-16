<template>
    <section class="absolute inset-0 bg-black/30 flex justify-center items-center py-10 print:p-0">
        <main class="bg-white w-[210mm] min-w-[210mm] h-full rounded print:rounded-none overflow-hidden print:overflow-visible shadow-lg flex flex-col relative print:static">
            <header class="bg-gray-100 text-right noprint">
                <button @click="$router.push({name: 'home'})" class="w-10 h-10 bg-gray-300 inline-block hover:bg-red-300 active:bg-red-200">
                    <i class="fa-light fa-xmark text-gray-900"></i>
                </button>
            </header>
            <footer class="flex-grow overflow-y-auto">
                <ResumeVariantOne />
            </footer>
        </main>
    </section>
</template>

<script setup lang="ts">
import ResumeVariantOne from '@/Components/ResumeVariantOne.vue'
</script>