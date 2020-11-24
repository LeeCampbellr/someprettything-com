import { gql } from 'graphql-request';
import cms from '@utils/cms';

export default async function handler(req, res) {

  if (!req.query.entryUid) {
		return res.status(401).json({ message: "Not allowed to access this route" })
  }

  const { entryUid, token } = req.query;

	const query = gql`
		query($uid: [String]) {
			entry(uid: $uid) {
				id
				uri
			}
		}
  `
  
  const data = await client.request(pageQuery, { uid: entryUid })

  res.setPreviewData({ entryUid, token });
  res.writeHead(307, { Location: `${data.entry.uri}` })
  res.end();

}
