export default function DetailsBox({ date, customerName, billType }) {
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
        <span id="right">{customerName}</span>
      </div>
    </div>
  );
}
