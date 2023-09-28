import { PrismaClient, Products } from "@prisma/client";

export default async function ListCustomers() {
  const prisma = new PrismaClient();
  await prisma.$connect();
  const customers = await prisma.entity.findMany({
    include: {
      category: {
        where: {
          type: "Customer",
        },
      },
    },
  });
  await prisma.$disconnect();
  console.log(customers);
}

ListCustomers();
