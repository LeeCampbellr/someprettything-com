import { GraphQLClient } from 'graphql-request';

export default async function(query, token, entryUid) {

  let endpoint = 'https://dev.someprettything.com/api';

  if (typeof token !== 'undefined') {
    endpoint += `?token=${token}`;
  }
  
  const client = new GraphQLClient(endpoint);

  const data = typeof entryUid !== 'undefined'
    ? await client.request(query, { uid: entryUid })
    : await client.request(query);

  return data;

}
