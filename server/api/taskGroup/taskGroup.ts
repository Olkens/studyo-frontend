import { TaskGroup } from './../../../types/index';
import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {

    const taskGroup = await prisma.taskGroup.findMany({
        where: {
            enabled: true
        },
        include: { tasks: true }
    })

    // const tasks: unknown[] = []
    // for (let i = 0; i < taskGroup.length; i++) {
    //     const data = await prisma.task.findMany({
    //         where: {
    //             taskGroupId: taskGroup[i].id
    //         }
    //     })
    //     // console.log(data)
    //     tasks.push(data)
    // }
    // console.log(tasks)
    console.log(taskGroup)
    return taskGroup
})