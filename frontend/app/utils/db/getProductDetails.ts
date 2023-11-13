import { PrismaClient, Products } from "@prisma/client";

export default async function getProductDetail(
  item: string,
  customerId: string
) {
  /*
    This function takes the product name and returns all the information the 
    invoice needs on the producy

    Parameter: 
    name : string
    name of product

    idVat: boolean 
    wether it is vat or zero rated

    Returns
    products : list 
    list of all products a
    */
  console.log("customer", customerId);
  const prisma = new PrismaClient();
  await prisma.$connect();
  try {
    const productDetails = await prisma.products.findUnique({
      where: {
        name: item,
      },
      select: {
        id: true,
        name: true,
        sizeType: true,
        size: true,
        caseSize: true,
        sellingprices: {
          where: {
            customerId: customerId,
          },
        },
      },
    });
    await prisma.$disconnect();
    console.log(productDetails);
    return productDetails;
    //return productDetails;
  } catch (error) {
    console.log(error);
  }
}

var x = getProductDetail(
  "16oz Marvex Bleach",
  "514c8551-0e3f-488a-a391-e44bfe35f713"
);
