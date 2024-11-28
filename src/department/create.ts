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
  // 创建
  await prisma.department.create({
    data: {
      name: "技术部",
      employees: {
        create: [
          {
            name: "lina1",
            phone: "213213",
          },
          {
            name: "lucy2",
            phone: "222",
          },
        ],
      },
    },
  });
}
main();
