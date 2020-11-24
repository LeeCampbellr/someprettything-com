
export default async function handler(req, res) {

  if (!req.query.entryUid || !req.query.token) {
		return res.status(401).json({ message: "Not allowed to access this route" })
  }
  
  const { entryUid, token } = req.query;

  res.setPreviewData({ entryUid, token });
  res.redirect('/');
  res.end();

}
