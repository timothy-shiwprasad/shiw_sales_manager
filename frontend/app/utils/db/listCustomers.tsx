import { PrismaClient, Products } from "@prisma/client";

export default async function ListCustomers() {
  const prisma = new PrismaClient();
  await prisma.$connect();
  await prisma.$disconnect();
}
