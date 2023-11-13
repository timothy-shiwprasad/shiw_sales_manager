export default function DetailsBox({ date, customer, billType }) {
  console.log(customer);
  return (
    <div className="detail-box grid grid-cols-1 divide-1">
      <div>
        <span id="left">Date :</span>
        <span id="right">{date}</span>
      </div>
      <div>
        <span id="left">Type :</span>
        <span id="right">{billType}</span>
      </div>
      <div>
        <span id="left">Customer :</span>
        <span id="right">{customer.name}</span>
      </div>
      <div id="customer-id">
        <span id="customer-id left">Customer ID:</span>
        <span id="right">{customer.id}</span>
      </div>
    </div>
  );
}
