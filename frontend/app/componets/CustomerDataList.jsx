export default function CustomersDataList({ customers }) {
  console.log(customers);
  return (
    <datalist id="customers">
      {customers?.map((customer, index) => (
        <option value={customer.name} id={customer.id} />
      ))}
    </datalist>
  );
}

//add the get products here.
