import fetch from "@utils/fetch";
import { NextApiRequest, NextApiResponse } from "next";

export default async (NextApiRequest, NextApiResponse) => {
  // (1)
  // Check for the right query params
  if (!req.query["x-craft-live-preview"] || !req.query.entryUid) {
    return res
      .status(401)
      .json({ message: "Not allowed to access this route" });
  }

  // (2)
  // Get the url from Craft for the specific entry
  const { data } = await fetch(
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
      message: `URL of the entry "${req.query.entryUid}" could not be fetched`,
    });
  }

  // (3)
  // Set the token as preview data
  res.setPreviewData({
    previewToken: req.query.token ?? null,
  });

  // (4)
  const parsedUrl = new URL(data.entry.url);

  // Redirect to the path from the fetched url
  res.writeHead(307, { Location: parsedUrl.pathname });
  res.end();
};
