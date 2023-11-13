import getProductDetail from "../utils/db/getProductDetails";

export async function action({ request }) {
  const formData = await request.formData();
  var details = await getProductDetail(
    formData.get("product"),
    formData.get("customerId")
  );

  return details;
}
