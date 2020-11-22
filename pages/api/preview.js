import cms from "@utils/cms";

export default async function handler(req, res) {

	if (!req.query.entryUid) {
		return res.status(401).json({ message: "Not allowed to access this route" })
	}

	const { data } = await cms(
    `
      {
        entry(uid: "${req.query.entryUid}") {
          url
        }
      }
    `
  );

  if (!data?.entry?.url) {
    return res.status(404).json({
      message: `URL of the entry "${req.query.entryUid}" could not be fetched`
    });
  }
	
  res.setPreviewData({
    previewToken: req.query.token ?? null
  });

  // (4)
  const parsedUrl = new URL(data.entry.url);

  // Redirect to the path from the fetched url
  res.writeHead(307, { Location: parsedUrl.pathname });
  res.end("previewing?");
}
