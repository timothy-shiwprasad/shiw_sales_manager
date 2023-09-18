import { PrismaClient } from "@prisma/client";

const ProductsseedData = [
  {
    name: "Gallon Marvex Bleach",
    description: "2nd largest bleach",
    size_type: "g",
    size: 1,
    case_size: 6,
    barcode: 98672,
    is_vat: false,
  },
  {
    name: "64oz Marvex Bleach",
    description: "3nd largest bleach",
    size_type: "oz",
    size: 64,
    case_size: 8,
    barcode: 98673,
    is_vat: false,
  },
  {
    name: "32oz Marvex Bleach",
    description: "3rd largest bleach",
    size_type: "oz",
    size: 32,
    case_size: 15,
    barcode: 98674,
    is_vat: false,
  },
  {
    name: "16oz Marvex Bleach",
    description: "4th largest bleach",
    size_type: "oz",
    size: 16,
    case_size: 24,
    barcode: 98675,
    is_vat: false,
  },
  {
    name: "10oz Marvex Bleach",
    description: "smallest  bleach",
    size_type: "oz",
    size: 10,
    case_size: 48,
    barcode: 98676,
    is_vat: false,
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
