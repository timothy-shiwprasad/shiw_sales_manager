import AddButton from "~/componets/AddRowButton";
import InvoiceTable from "~/componets/InvoiceTable";
import DataList from "../componets/DataList";
import TotalBox from "../componets/TotalBox";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

const loader = () => {
  return json({ isvat: true });
};

export default function CreateInvoice() {
  const isvat = useLoaderData();
  const [rowCount, setRowCount] = useState(2);
  const [totals, setTotals] = useState({
    subtotal: 0,
    vat: 0,
    finalTotal: 0,
  });

  return (
    <div className="main-body">
      <DataList />
      <InvoiceTable isVat={isvat} />
      <TotalBox isVat={false} totals={totals} />
      <AddButton />
    </div>
  );
}
