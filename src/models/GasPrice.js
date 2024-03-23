import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    price_usd: {
      type: String,
      required: true,
    },
    price_navax: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("GasPrice", schema);
