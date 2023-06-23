<template>
    <Header class="noprint"></Header>
    <span class="absolute top-0 right-0">
        {{ game.fps }}
    </span>
    <canvas id="gameCanvas" class="outline-none w-full h-screen noprint"></canvas>
    <router-view v-slot="{ Component }:any">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import Header from '@/Components/Header.vue'
import { onMounted, reactive } from 'vue'
import { initScene } from '@/Engine/index'
const game = reactive({
    fps: null
})
onMounted(() => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
    const { engine, scene } = initScene(canvas)
    
})
</script>