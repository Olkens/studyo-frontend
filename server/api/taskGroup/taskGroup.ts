import { TaskGroup } from './../../../types/index';
import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {

    const taskGroup = await prisma.taskGroup.findMany({
        where: {
            enabled: true
        },
        include: { tasks: true }
    })
    return taskGroup
})