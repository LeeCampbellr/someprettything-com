import { GraphQLClient } from 'graphql-request';

export default async function(query, variables = {}, token) {

  let endpoint = 'https://dev.someprettything.com/api';

  if (typeof token !== 'undefined') {
    endpoint += `?token=${token}`;
  }
  
  const client = new GraphQLClient(endpoint);

  return await client.request(query, variables);

}
