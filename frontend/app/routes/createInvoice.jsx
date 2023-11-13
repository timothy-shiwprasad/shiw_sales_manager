import AddButton from "~/componets/AddRowButton";
import InvoiceTable from "~/componets/InvoiceTable";
import DataList from "../componets/DataList";
import TotalBox from "../componets/TotalBox";
import DetailsBox from "../componets/DetailsBox";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import getCustomerDetails from "../utils/db/getCustomerDetails";
import getCustometPrices from "../utils/db/getCustomesSellingPrice";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  // TODO: rename these variables in the url
  const bill = url.searchParams.get("bill");
  const type = url.searchParams.get("type");
  const date = url.searchParams.get("date");
  const customer = url.searchParams.get("customer");
  // use customer name to get customer details
  let customerDetails = await getCustomerDetails(customer);
  const isvat = isVat(type);
  let customerProducts = await getCustometPrices(customer.id, isvat);
  // use customer id to get all products customer buys
  return json({
    isvat: type,
    bill: bill,
    date: date,
    customer: customerDetails,
    customerProducts: customerProducts,
  });
};

export default function CreateInvoice() {
  const { isvat, date, customer, customerProducts } = useLoaderData();
  const [rowCount, setRowCount] = useState(2);
  const [totals, setTotals] = useState({
    subtotal: 0,
    vat: 0,
    finalTotal: 0,
  });
  return (
    <div className="main-body">
      <DataList products={customerProducts} />
      <InvoiceTable isVat={isvat} />
      <DetailsBox date={date} billType={isvat} customer={customer} />
      <TotalBox isVat={isvat} totals={totals} />
      <AddButton />
    </div>
  );
}

function isVat(type) {
  if (type == "zero-rated") {
    return false;
  } else {
    return true;
  }
}
