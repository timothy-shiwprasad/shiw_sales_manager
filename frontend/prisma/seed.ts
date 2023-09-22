import { PrismaClient } from "@prisma/client";

const ProductsseedData = [
  {
    name: "Gallon Marvex Bleach",
    description: "2nd largest bleach",
    sizeType: "g",
    size: 1,
    caseSize: 6,
    barcode: 98672,
    isVat: false,
  },
  {
    name: "64oz Marvex Bleach",
    description: "3nd largest bleach",
    sizeType: "oz",
    size: 64,
    caseSize: 8,
    barcode: 98673,
    isVat: false,
  },
  {
    name: "32oz Marvex Bleach",
    description: "3rd largest bleach",
    sizeType: "oz",
    size: 32,
    caseSize: 15,
    barcode: 98674,
    isVat: false,
  },
  {
    name: "16oz Marvex Bleach",
    description: "4th largest bleach",
    sizeType: "oz",
    size: 16,
    caseSize: 24,
    barcode: 98675,
    isVat: false,
  },
  {
    name: "10oz Marvex Bleach",
    description: "smallest  bleach",
    sizeType: "oz",
    size: 10,
    caseSize: 48,
    barcode: 98676,
    isVat: false,
  },
];

async function seed() {
  const prisma = new PrismaClient();

  try {
    for (const products of ProductsseedData) {
      await prisma.products.create({
        data: products,
      });
    }

    console.log("Seed data has been inserted successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
