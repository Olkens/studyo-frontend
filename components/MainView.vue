<template>
    <div class="flex flex-col gap-5">
        <div>
            <div class="text-3xl border-b-2 border-[#BBBBBB] pb-2">
                {{ title }}
            </div>
            <div class="rounded-md p-4 border-2 border-[#BBBBBB] mt-4">
                <NuxtPage />
            </div>
        </div>
        <div class="flex gap-5">
            <div class="basis-3/4 rounded-md p-4 border-2 border-[#BBBBBB]">
            TODO: KALENDARZ
            </div>
            <div class="basis-1/4 rounded-md p-4 border-2 border-[#BBBBBB]">
            TODO: Reminders
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const title = ref('To jest Twoj dashboard')
</script>

<style scoped></style>