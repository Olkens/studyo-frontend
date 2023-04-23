import { defineStore } from "pinia"

export const useTaskGroupStore = defineStore('taskGroup', async () => {
    await useFetch('/api/taskGroup/taskGroup')
})