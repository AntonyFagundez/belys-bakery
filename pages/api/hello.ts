// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// https://docs.google.com/spreadsheets/d/e/2PACX-1vSnDsmgyoDi0KR_kNg2dmvJauGPNz53k6FcIGhwdXwjMM4evbF-ijlNthINsdI_MvAgYgEX8PNSPk4h/pub?gid=0&single=true&output=csv

type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ name: "John Doe" });
}
