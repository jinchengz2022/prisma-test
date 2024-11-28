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
  // 更新部门 1 的名称为销售部且创建一个新成员
  //   await prisma.department.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "财政部",
  //       employees: {
  //         create: [
  //           {
  //             name: "jack",
  //             phone: "1242343",
  //           },
  //         ],
  //       },
  //     },
  //   });

  // 更新成员 3 关联的部门id
  //   await prisma.department.update({
  //     where: {
  //       id: 2,
  //     },
  //     data: {
  //       name: "技术部",
  //       employees: {
  //         connect: [{ id: 3 }],
  //       },
  //     },
  //   });

  // 更新成员 7 关联的部门 id 不存在则创建
  await prisma.department.update({
    where: {
      id: 2,
    },
    data: {
      name: "技术部",
      employees: {
        connectOrCreate: {
          where: {
            id: 7,
          },
          create: {
            name: "makabaka",
            phone: "7921793",
          },
        },
      },
    },
  });
}
main();
