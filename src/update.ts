import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test1() {
    await prisma.post.update({
        where: {
            id: 9
        },
        data: {
            content: 'test'
        }
    })
}

test1();
