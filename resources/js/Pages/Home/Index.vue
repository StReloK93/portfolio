<template>
    <Header class="noprint"></Header>
    <canvas id="gameCanvas" class="outline-none w-full h-screen noprint"></canvas>
    <router-view v-slot="{ Component }:any">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import Header from '@/Components/Header.vue'
import { onMounted } from 'vue'
import { initScene } from '@/Engine/index'

onMounted(() => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
    initScene(canvas)
})
</script>