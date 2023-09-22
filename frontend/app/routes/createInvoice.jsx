import AddButton from "~/componets/AddRowButton";
import InvoiceTable from "~/componets/InvoiceTable";
import DataList from "../componets/DataList";
import TotalBox from "../componets/TotalBox";
import DetailsBox from "../componets/DetailsBox";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = ({ request }) => {
  const url = new URL(request.url);
  // TODO: rename these variables in the url
  const bill = url.searchParams.get("bill");
  const type = url.searchParams.get("type");
  const date = url.searchParams.get("date");
  const customer = url.searchParams.get("customer");
  // use customer name to get customer details
  return json({ isvat: type, bill: bill, date: date, customer: customer });
};

export default function CreateInvoice() {
  const { isvat, date, customer } = useLoaderData();
  const [rowCount, setRowCount] = useState(2);
  const [totals, setTotals] = useState({
    subtotal: 0,
    vat: 0,
    finalTotal: 0,
  });
  console.log(isvat);
  return (
    <div className="main-body">
      <DataList />
      <InvoiceTable isVat={isvat} />
      <DetailsBox date={date} billType={isvat} customerName={customer} />
      <TotalBox isVat={isvat} totals={totals} />
      <AddButton />
    </div>
  );
}
