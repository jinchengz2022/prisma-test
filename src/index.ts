import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "stdout",
      level: "query",
    },
  ],
});

async function test1() {
  // await prisma.user.create({
  //     data: {
  //         name: 'lina',
  //         email: 'jinchengz2020@163.com'
  //     }
  // })

  await prisma.user.create({
    data: {
      name: "jack",
      email: "jincheng@163.com",
      posts: {
        create: [
          {
            title: "aaaa",
            content: "aaaa",
          },
          {
            title: "bbb",
            content: "bbb",
          },
        ],
      },
    },
  });
  // await prisma.user.findMany();
}

test1();
