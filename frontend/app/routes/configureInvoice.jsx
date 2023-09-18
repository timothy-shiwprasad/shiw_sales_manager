// cash/credit
// vat / zero rated
// Date
// customer

import { Form } from "@remix-run/react";
import CustomerDataList from "../componets/CustomerDataList";
import { redirect } from "react-router";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const action = formData.get("_action");

  if (action == "create") {
    const bill = formData.get("bill") || null;
    const tax = formData.get("tax") || null;
    const date = formData.get("date") || null;
    const customer = formData.get("customer") || null;
    const check = validateInvoiceDetails(date, bill, tax, customer);
    console.log(typeof check);
    if (typeof check == "string") {
      // need to add componet to display error messsage
      console.log(check);
    } else {
      return redirect(
        "/createInvoice?bill=" +
          bill +
          "&&type=" +
          tax +
          "&&date=" +
          date +
          "&&customer=" +
          customer
      );
    }
    return {};
  }
};

export default function Page() {
  return (
    <div className="cfi-body">
      <CustomerDataList />
      <div className="container px-4 cfi-main">
        <Form method="post">
          <div className="columns-2">
            <div className="c-cr">
              <input type="radio" id="cash" name="bill" value="cash" />
              <label htmlFor="cash">Cash</label>
              <br />
              <input type="radio" id="credit" name="bill" value="credit" />
              <label htmlFor="html">Credit</label>
              <br />
            </div>

            <div className="c-cr">
              <input type="radio" id="vat" name="tax" value="vat" />
              <label htmlFor="html">Vat</label>
              <br />
              <input
                type="radio"
                id="zero-rated"
                name="tax"
                value="zero-rated"
              />
              <label htmlFor="html">Zero Rated</label>
              <br />
            </div>
          </div>

          <div className="columns-2">
            <div className="cfi-date">
              <label htmlFor="birthday">Invoice Date:</label>
              <input type="date" id="date" name="date" />
            </div>
            <div className="cfi-customers">
              <input
                className=""
                type="text"
                list="customers"
                name="customer"
              />
            </div>
          </div>
          <button className="" type="submit" name="_action" value="create">
            Generate
          </button>
        </Form>
      </div>
    </div>
  );
}

function validateInvoiceDetails(date, bill, type, customer) {
  // TODO THIS FUNCTION IS NOT RETURNING APPORIATE RESPONSE
  if (date == null) {
    return "No Date Specified";
  } else if (bill == null) {
    return "Bill type not Specified";
  } else if (type == null) {
    return "Tax Bill not specified";
  } else if (customer == null) {
    return "No Customer Specified";
  } else return true;
}
