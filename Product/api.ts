import axios from "axios";
import Papa from "papaparse";

import { Product } from "./types";

const api = {
    list: async (): Promise<Product[]> => {
        return axios
            .get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vSnDsmgyoDi0KR_kNg2dmvJauGPNz53k6FcIGhwdXwjMM4evbF-ijlNthINsdI_MvAgYgEX8PNSPk4h/pub?gid=0&single=true&output=csv",
                {
                    responseType: "blob",
                }
            )
            .then(
                (response) =>
                    new Promise<Product[]>((resolve, reject) =>
                        Papa.parse(response.data, {
                            header: true,
                            complete: ({ data }) => resolve(data as Product[]),
                            error: ({ message }) => reject(message),
                        })
                    )
            );
    },
};

export default api;
