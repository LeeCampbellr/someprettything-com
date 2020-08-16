import fetch from "@utils/fetch";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req, res) => {
  if (req.query["x-craft-live-preview"] || !req.query.entryUid) {
    return res
      .status(401)
      .json({
        message: `${req.query.entryUid} & ${req.query["x-craft-live-preview"]}`,
      });
  }

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

  res.setPreviewData({
    previewToken: req.query.token ?? null,
  });

  res.redirect(parsedUrl.pathname);
};
