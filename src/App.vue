<script setup>
    import Sidebar from './components/Sidebar.vue'
</script>

<template>
    <div class="flex justify-between">
        <div class="w-80 bg-pink-400 h-6/6">
            <Sidebar />
        </div>
        <div class="px-10 py-10 w-full bg-slate-200">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
</style>