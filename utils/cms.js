export default async function(query, previewToken) {
  let craftUrl = 'https://dev.someprettything.com/api';

  if (previewToken && previewToken !== '') {
    craftUrl += '?token=' + previewToken;
  }

  const res = await fetch(craftUrl, {
    method: 'post',
    body: query,
    headers: {
      'Content-Type': 'application/graphql',
    },
  });

  return await res.json();
}
