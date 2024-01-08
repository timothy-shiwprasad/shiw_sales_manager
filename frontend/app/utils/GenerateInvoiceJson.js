import { json } from "@remix-run/node";
import axios from "axios";
import EasyInvoice from "./CreateInvoice";

export default async function GenerateInvoiceJson(e) {
  let product_rows = document.getElementsByClassName("row");
  let items = [];

  for (let i = 0; i < product_rows.length; i++) {
    let row = product_rows[i].childNodes;
    if (e.target.dataset.key == 1) {
      let item = getvaluejson(row, true);
      items.push(item);
    } else {
      let item = getvaluejson(row, false);
      items.push(item);
    }
  }
  console.log("i hope this is called first");
  EasyInvoice(items);
}

function getvaluejson(row, vat) {
  const quantity = ReturnQuantity(row[0]);
  const case_size = ReturnCaseSize(row[1]);
  const description = ReturnDescription(row[2]);
  const price = ReturnPrice(row[3]);

  if (vat) {
    return {
      quantity: case_size * quantity,
      price: price,
      "tax-rate": 14,
      description: description + " -- " + case_size + " per case",
    };
  } else {
    return {
      quantity: case_size * quantity,
      price: price,
      description: description + " -- " + case_size + " per case",
      "tax-rate": 0,
    };
  }
}

function ReturnQuantity(column) {
  let column_children = column.childNodes;
  return column_children[0].value;
}

function ReturnCaseSize(column) {
  let column_children = column.childNodes;
  return parseInt(column_children[0].value);
}

function ReturnDescription(column) {
  let column_children = column.childNodes;
  return column_children[0].value;
}

function ReturnPrice(column) {
  let column_children = column.childNodes;
  return parseInt(column_children[0].value);
}
