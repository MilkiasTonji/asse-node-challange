import { scrappDataFromWebPage } from "../gasPriceScrapper/scrapper.js";
import { getGasPrices, createGasPrice } from "../services/gasPriceService.js";

export const gasPrices = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  console.log(req.query)
  const forGraph = req.query.forGraph || false
  const data = await getGasPrices(page, limit, forGraph);
  return res.status(200).json({ success: true, data });
};

export const createPrice = async (req, res) => {
  const scrapped_data = await scrappDataFromWebPage();
  if (scrapped_data.success) {
    const response = await createGasPrice(scrapped_data);
    if (response.id) {
      return res.status(200).json({ success: true, data: response });
    } else {
      return res
        .status(400)
        .json({ success: false, error: "Could not save data to database" });
    }
  } else {
    return res.status(400).json({ success: false, error: scrapped_data.error });
  }
};
