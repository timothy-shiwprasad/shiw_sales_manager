import { PrismaClient, Products } from "@prisma/client";

export default async function ListProducts() {
  const prisma = new PrismaClient();
  await prisma.$connect();
  const allproducts = await prisma.products.findMany();
  await prisma.$disconnect();
  return TranformBigInt(allproducts);
}

function TranformBigInt(products: any) {
  for (let i = 0; i < products.length; i++) {
    let value = products[i]["barcode"];
    typeof value === "bigint" ? value.toString() : value;
    products[i]["barcode"] = value;
  }
  return products;
}
