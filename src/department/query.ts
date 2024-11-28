import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "stdout",
      level: "query",
    },
  ],
});

async function main() {
  // 查询
  const res1 = await prisma.department.findUnique({
    where: {
      id: 1,
    },
  });
  console.log("查询部门 1", res1);

  const res2 = await prisma.department.findUnique({
    where: {
      id: 1,
    },
    include: {
      employees: {
        where: {
          name: "lina",
        },
      },
    },
  });
  console.log("查询部门 1 下的关联成员 lina", res2);

  const res3 = await prisma.department
    .findUnique({
      where: {
        id: 1,
      },
    })
    .employees();
  console.log("查询部门 1 下的关联成员", res3);
}
main();
