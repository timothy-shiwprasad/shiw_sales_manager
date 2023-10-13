import { PrismaClient, Products } from "@prisma/client";

export default async function getCustomerDetails(name: string) {
  const prisma = new PrismaClient();
  await prisma.$connect();
  try {
    const customer = await prisma.entity.findFirst({
      where: {
        name: name,
      },
    });
    return customer;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}
