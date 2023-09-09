export default function updateRows(e) {
  const details = find_matching_product(e.target.value);

  //console.log(e.target.dataset.key);
  // get row

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
      input.value = details["case_size"];
    } else if (td[i].id == "price") {
      let input_list = td[i].childNodes;
      let input = input_list[0];
      input.value = details["price"];
    }
  }
  //console.log(td);
  // get value
  // update rows
}

function find_matching_product(product) {
  const products = [
    {
      name: "Chocolate",
      price: "100",
      case_size: 24,
    },
    {
      name: "Coconut",
      price: "200",
      case_size: 24,
    },
    {
      name: "Strawberry",
      price: "300",
      case_size: 24,
    },
    {
      name: "Vanilla",
      price: "400",
      case_size: 24,
    },
  ];

  for (let i = 0; i < products.length; i++) {
    if (products[i]["name"] == product) {
      return products[i];
    }
  }
}
