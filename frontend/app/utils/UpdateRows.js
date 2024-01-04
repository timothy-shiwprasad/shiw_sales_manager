import axios from "axios";
export default async function updateRows(e) {
  const details = await find_matching_product(e.target.value);
  let rows = document.getElementsByTagName("tr");
  let row = null;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].getAttribute("data-row") == e.target.dataset.key) {
      row = rows[i];
      break;
    }
  }

  let td = row.childNodes;
  for (let i = 0; i < td.length; i++) {
    if (td[i].id == "case_size") {
      let input_list = td[i].childNodes;
      let input = input_list[0];
      input.value = details["caseSize"];
    } else if (td[i].id == "price") {
      let input_list = td[i].childNodes;
      let input = input_list[0];
      input.value = details["sellingprices"][0]["cost"];
    }
  }
  //console.log(td);
  // get value
  // update rows
}

async function find_matching_product(product) {
  /*
  This functions takes in a item name and returns
  the details needed for the invoice.

  product : string 
  name of the item to be searched.

  return
  productDetail : json 

  */

  //makes request to backend for details info.
  var customerId = get_customer_id();

  const formData = new FormData();
  formData.append("product", product);
  formData.append("customerId", customerId);
  const response = await axios
    .post("/api/get_item_details", formData)
    .then((res) => res.data);
  if (response) {
    console.log(response);
    return response;
  } else {
    return null;
  }
}

function get_customer_id() {
  let span = document.getElementById("customer-id");
  var children = span.childNodes;
  return children[1].innerText;
  //return spans[1].value;
}
