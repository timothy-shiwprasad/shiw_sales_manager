import EasyInvoice from "../utils/CreateInvoice";
import GenerateInvoiceJson from "../utils/GenerateInvoiceJson";

export default function TotalBox({ isVat, totals }) {
  if (isVat == "vat") {
    return (
      <div id="vat-totals" className="total-box grid grid-cols-1 divide-1">
        <div className="sub-total">
          <span id="left">Sub Total :</span>
          <span id="right">${totals.subtotal}</span>
        </div>
        <div className="vat">
          <span id="left">VAT : </span>
          <span id="right">${totals.vat}</span>
        </div>
        <div className="final-total">
          <span id="left"> Final Total : </span>
          <span id="right">${totals.finalTotal}</span>
        </div>
        <button
          className="Generate_Invoice"
          data-type={1}
          onClick={GenerateInvoiceJson}
        >
          Generate Invoice
        </button>
      </div>
    );
  }

  return (
    <div id="zero-rated" className="total-box border-solid border-2">
      <div className="final-total">
        <span id="left"> Final Total : </span>
        <span id="right">${totals.finalTotal}</span>
      </div>
      <button
        className="Generate_Invoice"
        data-type={0}
        onClick={GenerateInvoiceJson}
      >
        Generate Invoice
      </button>
    </div>
  );
}
