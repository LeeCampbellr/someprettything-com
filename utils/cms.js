import { GraphQLClient } from 'graphql-request';

export default async function(query, variables = {}, token) {

  let endpoint = 'https://dev.someprettything.com/api';
  const headers = {
    authorization: `Bearer BcAiqvlKmVRt1W3ZG_Jj-Y8qdEh7l8PV`,
	}

  if (typeof token !== 'undefined') {
    endpoint += `?token=${token}`;
  }
  
  const client = new GraphQLClient(endpoint, {
		headers,
	});

  return await client.request(query, variables);

}
