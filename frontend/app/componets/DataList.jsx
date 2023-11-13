export default function DataList({ products }) {
  return (
    <datalist id="products">
      {products?.map((product, index) => (
        <option value={product.product.name} key={product.id} />
      ))}
    </datalist>
  );
}

//add the get products here.
