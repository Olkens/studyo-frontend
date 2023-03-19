<template>
    <div>
        <textarea
        v-model = "title"
        @keydown.tab="createTask"
        @keyup.enter="createTask"
        class="focus:bg-white focus:shadow resize-none rounded w-full bg-transparent mt-2 p-2 overflow-hidden"
        :class="{
            'h-7': !focused,
            'h-20': focused,
        }"
        style="outline: none !important"
        @focus="focused = true"
        @blur="focused = false"
        :placeholder="!focused ? '+ Add a Task' : 'Enter a title for this task'"
        ></textarea>
    </div>
</template>

<script setup lang="ts">
import type { Task } from '~~/types'
import { nanoid } from 'nanoid';

const emit = defineEmits<{
    (e: "add", payload: Task): void;
}>()

const focused = ref(false)
const title = ref("")

function createTask(e: Event) {
    if (title.value.trim()) {
        e.preventDefault();
        emit("add", {
            title: title.value.trim(),
            createdAt: new Date(),
            id: nanoid()
        } as Task)
    }
    title.value = '';
}
</script>

<style scoped></style>