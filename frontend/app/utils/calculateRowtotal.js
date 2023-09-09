import GenerateDefaultFunction from "./GenerateInvoiceJson";
import calculateSubtotal from "./calculateSubTotal";
export default function calculateRowtotal(e) {
  if (e.code != "Enter") {
    return;
  }

  let case_size,
    price,
    quantity = null;
  let total_column = null;

  let rows = document.getElementsByTagName("tr");
  let row = null;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].getAttribute("data-row") == e.target.dataset.key) {
      row = rows[i];
      console.log("found");
      break;
    }
  }

  let td = row.childNodes;
  for (let i = 0; i < td.length; i++) {
    if (td[i].id == "case_size") {
      let input_list = td[i].childNodes;
      let input = input_list[0];
      case_size = input.value;
    } else if (td[i].id == "price") {
      let input_list = td[i].childNodes;
      let input = input_list[0];
      price = input.value;
    } else if (td[i].id == "quantity") {
      let input_list = td[i].childNodes;
      let input = input_list[0];
      quantity = input.value;
    } else if (td[i].id == "item-total") {
      let input_list = td[i].childNodes;
      total_column = input_list[0];
    }
  }
  if (quantity) {
    total_column.value = Number(quantity) * Number(case_size) * Number(price);
  
  }

  calculateSubtotal();
}
