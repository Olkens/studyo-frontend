<template>
    <div :title="task.createdAt.toLocaleDateString()" class="task bg-white p-2 pr-4 mb-2 rounded shadow-sm max-w-[250px] flex"
    @focused="focused = true"
    @blur="focused = false"
    tabindex="0"
    >
        <DragHandle /> <span>{{ task.title }}</span>
    </div>
</template>

<script setup lang="ts">
import type { Task } from '~~/types'

const focused = ref(false);


defineProps<{
    task: Task;
}>()

</script>

<style>
.sortable-drag .task {
    transform: rotate(3deg)
}

.sortable-ghost .task {
    position: relative;

}

.sortable-ghost .task::after {
    content: '';
    @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded
}
</style>