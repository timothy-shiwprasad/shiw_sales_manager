import { Form, useLoaderData } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";

export const meta = () => {
  return [
    { title: "Bill Generator" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const prisma = new PrismaClient();
  await prisma.$connect();
  const allproducts = await prisma.products.findMany();
  await prisma.$disconnect();
  console.log("allproducts", allproducts);
  console.log("hello");
  return allproducts;
};

export default function Index() {
  const allproducts = useLoaderData();
  console.log("all", allproducts);
  return <h1>Hello</h1>;
}
