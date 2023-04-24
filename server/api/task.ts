import prisma from '../../prisma/client'

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    let task = null

    if (body.title) {
        task = prisma.task.create({
            data: {
                title: body.title,
                taskGroup: body.taskGroup
            }
        }).then((res)=> {
            task = res
        })
    }



    return {
        task: task
    }
})