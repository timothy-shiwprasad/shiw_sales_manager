import updateRows from "./UpdateRows";
import calculateRowtotal from "./calculateRowtotal";
import calculateSubtotal from "./calculateSubTotal";
export default function AddRow(index) {
  const invoice_body = document.getElementById("invoice-body");

  const table_row = invoice_body.insertRow(-1);
  table_row.setAttribute("data-row", index);
  table_row.className = "row";
  const row_info = [
    {
      id: "quantity",
      input_className: "item-input",
      input_type: "number",
    },
    {
      id: "case_size",
      input_className: "item-input",
      input_type: "number",
    },
    {
      id: "description",
      input_className: "item-input",
      input_type: "text",
      list: "products",
      "data-key": index,
    },
    {
      id: "price",
      input_className: "item-input",
      input_type: "number",
    },
    {
      id: "item-total",
      input_className: "item-total",
      input_type: "number",
    },
  ];

  for (let i = 0; i < row_info.length; i++) {
    if (i == 0) {
      let column = document.createElement("td");
      column.id = row_info[i]["id"];
      let column_input = document.createElement("input");

      column_input.className = row_info[i]["input_className"];
      column_input.type = row_info[i]["input_type"];
      column_input.setAttribute("data-key", index);

      column_input.onkeydown = calculateRowtotal;

      column.appendChild(column_input);

      table_row.appendChild(column);
    } else if (i == 2) {
      let column = document.createElement("td");
      let column_input = document.createElement("input");
      column.id = row_info[i]["id"];

      column_input.className = row_info[i]["input_className"];
      column_input.type = "text";
      column_input.setAttribute("list", row_info[i]["list"]);
      column_input.setAttribute("data-key", index);
      column.onchange = updateRows;

      column.appendChild(column_input);
      table_row.appendChild(column);
    } else if (i == 4) {
      let column = document.createElement("td");
      column.id = row_info[i]["id"];
      column.onchange =calculateSubtotal;
      let column_input = document.createElement("input");
      column_input.disabled = true;
      column_input.className = row_info[i]["input_className"];
      column_input.type = row_info[i]["input_type"];

      column.appendChild(column_input);

      table_row.appendChild(column);
    } else {
      let column = document.createElement("td");
      column.id = row_info[i]["id"];
      let column_input = document.createElement("input");

      column_input.className = row_info[i]["input_className"];
      column_input.type = row_info[i]["input_type"];

      column.appendChild(column_input);

      table_row.appendChild(column);
    }
  }
}
