<template>
    <Teleport to="body">
        <div @click="close" ref="modal-backdrop" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
            <div class="flex items-start justify-center min-h-screen pt-24 text-center">
                <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2" role="dialog" ref="modal"
                    aria-modal="true" aria-labelledby="modal-headline">
                    {{ ID }} {{ title }}
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import type { ID } from '~~/types'


const props = defineProps<{
    title: String,
    ID: ID
}>()

const emit = defineEmits<{
    (e: "close", payload: boolean): void
}>()

const close = () => {
    emit('close', false)
}


</script>

<style scoped></style>