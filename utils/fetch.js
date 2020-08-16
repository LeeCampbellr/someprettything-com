import fetch from "node-fetch";

export default async function (query, previewToken) {
  let craftUrl = "https://dev.someprettything.com/api";

  if (previewToken && previewToken !== "") {
    craftUrl += "?token=" + previewToken;
  }

  const res = await fetch(craftUrl, {
    method: "post",
    body: query,
    headers: {
      "Content-Type": "application/graphql",
      Authorization: "Bearer BcAiqvlKmVRt1W3ZG_Jj-Y8qdEh7l8PV",
    },
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}
