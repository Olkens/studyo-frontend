<template>
    <div>
        <draggable v-model="columns" group="columns" item-key="id" class="flex gap-4 overflow-x-auto items-start"
            :animation="250" handle=".drag-handle">

            <template #item="{ element: column }: { element: Column }">
                <div class="bg-gray-200 column p-5 rounded min-w-[250px]">

                    <header class="flex gap-2">
                        <DragHandle />
                        <h2 class="font-bold mb-6">{{ column.title }}</h2>
                    </header>

                    <draggable v-model="column.tasks" :group="{name: 'tasks', pull: alt ? 'clone' : true}" item-key="id" :animation="250" handle=".drag-handle">

                        <template #item="{ element: task }: { element: Task }">
                            <div class="flex gap-2">
                                <BoardTasks :task="task" />
                            </div>

                        </template>

                    </draggable>

                    <footer>
                        <NewTask @add="column.tasks.push($event)"/>
                    </footer>

                </div>
            </template>

        </draggable>

    </div>
</template>

<script setup lang="ts">
import type { Column, Task } from '~~/types'
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

const alt = useKeyModifier('Alt')
</script>

<style lang="scss" scoped></style>