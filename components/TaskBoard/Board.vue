<template>
    <div class="flex items-start overflow-x-auto gap-4">
        <draggable v-model="taskGroup" group="columns" item-key="id" class="flex gap-4 items-start" :animation="250"
            handle=".drag-handle">
            <template #item="{ element: column }: { element: Column }">
                <div class="bg-gray-200 column p-5 rounded min-w-[250px]">
                    <header class="flex gap-2 mb-4 font-bold">
                        <DragHandle />
                        <input class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
                            @keyup.enter=" ($event.target as HTMLInputElement).blur() " type="text" v-model=" column.title " />
                    </header>
                    <draggable v-model=" column.tasks " :group=" { name: 'tasks', pull: alt ? 'clone' : true } " item-key="id"
                        :animation=" 250 " handle=".drag-handle">
                        <template #item=" { element: task }: { element: Task } ">
                            <div class="flex gap-2">
                                <TaskBoardTask :task=" task "
                                    @delete=" column.tasks = column.tasks.filter((t) => t.id !== $event) " />
                            </div>
                        </template>
                    </draggable>

                    <footer>
                        <TaskBoardNewTask @add=" createNewTask($event) " :taskGroupId="column.id" />
                    </footer>
                </div>
            </template>
        </draggable>
        <button @click=" createColumn " class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50">
            + Add Another Column
        </button>
        <button @click="fetchTasks">wdgwrg</button>

    </div>
</template>

<script setup lang="ts">
import type { Column, Task, TaskGroup } from "~~/types";
import { nanoid } from "nanoid";
import draggable from "vuedraggable";
import { useTaskStore } from "../../store/taskStore";
import { useTaskGroupStore } from "../../store/taskGroupStore";

const taskStore = useTaskStore();

const {data: taskGroups} = await useFetch(() => "/api/taskGroup/taskGroup" )

// const { data: taskGroups } = computed( () => {
//     return useFetch(() => "/api/taskGroup/taskGroup" )
// })

const fetchTasks = async () => {
    console.log('Elo')
    const {data: hehe} = await useFetch(() => "/api/taskGroup/taskGroup" )
}

let taskGroup = ref(taskGroups)

async function createNewTask(task: Task) {
    taskStore.addNewTask(task);
    await refreshNuxtData()
    console.log("eloo");
}

// const columns = ref<Column[]>([
//     {
//         id: nanoid(),
//         title: 'Create vue app',
//         tasks: [
//             {
//                 id: nanoid(),
//                 title: "create dashboard",
//                 createdAt: new Date(),
//             },
//             {
//                 id: nanoid(),
//                 title: 'carete tasksboard',
//                 createdAt: new Date()
//             },
//             {
//                 id: nanoid(),
//                 title: 'create main page',
//                 createdAt: new Date()
//             }
//         ],
//     },
//     {
//         id: nanoid(),
//         title: 'UX/UI',
//         tasks: []
//     }
// ])

const alt = useKeyModifier("Alt");

function createColumn() {
    const column: Column = {
        id: nanoid(),
        title: "",
        tasks: [],
    };
    //   columns.value.push(column);
    nextTick(() => {
        (document.querySelector(
            ".column:last-of-type .title-input"
        ) as HTMLInputElement).focus();
    });
}
</script>

<style lang="scss" scoped></style>
