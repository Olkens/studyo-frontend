import { PrismaClient } from '@prisma/client'
import { now } from 'moment'

const prisma = new PrismaClient()

async function main() {
    await prisma.task.create({
        data: {
            title: 'elo cyc',
            dueDate: new Date()
        }
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })