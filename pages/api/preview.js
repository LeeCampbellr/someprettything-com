
export default async function handler(req, res) {

  if (!req.query.entryUid) {
		return res.status(401).json({ message: "Not allowed to access this route" })
  }
  
  const { entryUid, token } = req.query;

  res.setPreviewData({ entryUid, token });
  res.redirect('/');
  res.end();

}
