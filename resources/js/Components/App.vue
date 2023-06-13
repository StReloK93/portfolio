<template>
    <section>
        <Header></Header>
        <canvas id="gameCanvas" class="outline-none w-full h-screen"></canvas>
        <!-- <router-view></router-view> -->
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initScene } from '../Engine/index'
import Header from './Header.vue'
onMounted(() => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
    initScene(canvas)
})
</script>