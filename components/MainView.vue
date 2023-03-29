<template>
    <div>
    <div class="text-3xl border-b-2 border-[#BBBBBB] pb-2">
    {{ title }}
    </div>
        <div class="rounded-md p-4 border-2 border-black mt-4">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup lang="ts">
const title = ref('To jest Twoj dashboard')
</script>

<style scoped></style>