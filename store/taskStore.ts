import { defineStore } from "pinia"
import { Task } from "../types/index"

export const useTaskStore = defineStore('counter', () => {
    const task = ref<{
        task: Task
    }>()

    const addNewTask = async (task: Task) => {
        await $fetch('/api/task', {
            method: 'POST',
            body: task
        });
    }

    const getAllTasks = async () => {
        const { data } = await useFetch('/api/task')

        return data
    }

    return { task, addNewTask, getAllTasks }
})