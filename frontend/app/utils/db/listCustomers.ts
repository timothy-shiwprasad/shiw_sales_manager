import { PrismaClient, Products } from "@prisma/client";

export default async function ListCustomers() {
  const prisma = new PrismaClient();
  await prisma.$connect();
  const customers = await prisma.entity.findMany({
    where: {
      category: {
        some: {
          type: "Customer",
        },
      },
    },
    select: {
      id: true,
      name: true,
    },
  });
  await prisma.$disconnect();
  return customers;
}
