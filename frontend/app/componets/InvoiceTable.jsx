import updateRows from "../utils/UpdateRows";
import calculateRowtotal from "../utils/calculateRowtotal";
export default function InvoiceTable({ isVat }) {
  return (
    <table className="table-fixed invoice-table ">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Case size</th>
          <th>Description</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody id="invoice-body">
        <tr className="row" data-row={1}>
          <td id="quantity">
            <input
              className="item-input"
              type="number"
              onKeyDown={calculateRowtotal}
              data-key={1}
            />
          </td>
          <td id="case_size">
            <input className="item-input" type="number" />
          </td>
          <td id="description">
            <input
              className="item-input"
              type="text"
              list="products"
              data-key={1}
              onChange={updateRows}
            />
          </td>
          <td id="price">
            <input className="item-input" type="number" />
          </td>
          <td id="item-total">
            <input className="item-total" type="number" disabled />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
