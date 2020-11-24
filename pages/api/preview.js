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
				slug
			}
		}
  `
  
  const data = await cms(query, { uid: entryUid })

  res.setPreviewData({ entryUid, token });

  if (data.entry.slug === "home") {
    res.redirect('/');
  }
  else {
    res.redirect(`/${data.entry.slug}`)
  }
  res.end();

}
