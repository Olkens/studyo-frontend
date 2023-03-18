<template>
    <div>
        <draggable v-model="columns" group="columns" item-key="id" class="flex gap-4 overflow-x-auto items-start" :animation="250" handle=".drag-handle">
            <template #item="{element: column}: {element: Column}">
                <div class="bg-gray-200 column p-5 rounded min-w-[250px]">
                    <header>
                    <DragHandle />
                        <h2 class="font-bold mb-6">{{ column.title }}</h2>
                    </header>
                    <BoardTasks v-for="task in column.tasks" :task="task" />
                    <footer>
                        <button class="text-gray-500">+ Add task</button>
                    </footer>
                </div>
            </template>
        </draggable>

    </div>
</template>

<script setup lang="ts">
import type { Column } from '~~/types'
import { nanoid } from 'nanoid'
import draggable from "vuedraggable"

const columns = ref<Column[]>([
    {
        id: nanoid(),
        title: 'Create vue app',
        tasks: [
            {
                id: nanoid(),
                title: "create dashboard",
                createdAt: new Date(),
            },
            {
                id: nanoid(),
                title: 'carete tasksboard',
                createdAt: new Date()
            },
            {
                id: nanoid(),
                title: 'create main page',
                createdAt: new Date()
            }
        ],
    },
    {
        id: nanoid(),
        title: 'UX/UI',
        tasks: []
    }
])
</script>

<style lang="scss" scoped></style>