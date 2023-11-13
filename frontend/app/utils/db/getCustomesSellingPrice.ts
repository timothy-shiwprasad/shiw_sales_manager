import { PrismaClient, Products } from "@prisma/client";

export default async function getCustomerPrices(id: string, isVat: boolean) {
  /*
    This function takes a customer ID and returns the products
    and Sellings prices for that specific customer.

    Parameter: 
    id : string
    id of customer

    Returns
    sellings prices : list 
    list of all products and selling prices
    */
  const prisma = new PrismaClient();
  await prisma.$connect();
  var sellingPrice = null;
  try {
    sellingPrice = await prisma.sellingPrice.findMany({
      where: {
        customerId: id,
        product: {
          isVat: isVat,
        },
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            caseSize: true,
            size: true,
            sizeType: true,
          },
        },
      },
    });
    return sellingPrice;
  } catch (error) {
    return String(error);
  } finally {
    console.log("done");
    await prisma.$disconnect();
    return sellingPrice;
  }
}
