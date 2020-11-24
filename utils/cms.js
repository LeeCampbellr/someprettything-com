import { GraphQLClient } from 'graphql-request';

export default async function(query, entryUid, token) {

  let endpoint = 'https://dev.someprettything.com/api';

  if (typeof token !== 'undefined') {
    endpoint += `?token=${token}`;
  }
  
  const client = new GraphQLClient(endpoint);

  const data = await client.request(query, { entryUid });

  return data;
}
