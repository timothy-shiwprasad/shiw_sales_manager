import { Form, useLoaderData } from "@remix-run/react";
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
  return <h1 className="text">hello i love you too much nnn</h1>;
}
