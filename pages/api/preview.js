import { gql } from 'graphql-request';
import cms from '@utils/cms';

export default async function handler(req, res) {

  if (!req.query.entryUid) {
		return res.status(401).json({ message: "Not allowed to access this route" });
  }
  
  const { entryUid, token } = req.query;

  const query = gql`
    query (uid: [String]) {
        entry(uid: $uid)  {
          id
          slug
        }
      }
  `;

  const { entry } = await cms(query, {uid: entryUid });

  res.setPreviewData({ token });
  
  if (entry.slug === 'home') {
    res.redirect('/');
  } else {
    res.redirect(`/${entry.slug}`);
  }
  res.end();

}
