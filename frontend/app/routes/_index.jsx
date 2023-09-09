import { Form, useLoaderData } from "@remix-run/react";
import ListProducts from "../utils/db/listProducts";
export const meta = () => {
  return [
    { title: "Bill Generator" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return null;
};

export default function Index() {
  return <h1>Hello</h1>;
}
