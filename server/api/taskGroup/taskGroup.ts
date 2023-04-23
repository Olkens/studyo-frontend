import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {

    return await prisma.taskGroup.findMany()

})