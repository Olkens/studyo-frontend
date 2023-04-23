import { TaskGroup } from './../../types/index';
import prisma from '~/prisma/client'
import { Task } from '~/types'

export default defineEventHandler(async (event) => {


    const tasks = await prisma.task.findMany({
        where: { taskGroupId: 1 }
        }
    )
    return tasks
})