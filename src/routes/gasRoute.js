import express from "express";
import { gasPrices, createPrice } from "../controllers/gasPriceController.js";
const router = express();



router.get("/api/gas-prices", gasPrices);
router.post('/api/create-gas-price', createPrice)

export default router;
