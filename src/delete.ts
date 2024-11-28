import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test1() {
    await prisma.post.delete({
        where: {
            id: 1
        }
    })
}

test1();
