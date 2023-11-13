import { PrismaClient, Products } from "@prisma/client";

export default async function getCustomerProducts(id: string, isVat: boolean) {
  /*
    This function takes ther customerID and the products retrieved is vat or not 
    and returns the products name. 
    

    Parameter: 
    id : string
    id of customer

    idVat: boolean 
    wether it is vat or zero rated

    Returns
    products : list 
    list of all products a
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
  } catch (error) {
    return String(error);
  } finally {
    await prisma.$disconnect();
    return sellingPrice;
  }
}
