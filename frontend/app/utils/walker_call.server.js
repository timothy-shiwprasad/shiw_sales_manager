import axios from "axios";

export const urls = {
  token: process.env.TOKEN,
  url: "http://localhost:8000/",
  snt: "urn:uuid:1674597e-c09a-428f-8987-d0decff16b2e",
};

export async function HttpRequest(name, ctx, nd = null) {
  let apiUrl = process.env.API_SERVER;
  let res = await axios.post(
    apiUrl,
    {
      name: name,
      ctx: ctx,
      _req_ctx: {},
      profiling: false,
      is_async: false,
      nd : nd
    },
    {
      headers: {
        Authorization: `token ${urls.token}`,
        "Content-Type": "application/json",
      },
    }
  );

  //console.log(res);
  let data = res.data;

  return data;
}
