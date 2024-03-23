import GasPrice from "../models/GasPrice.js";


export const getGasPrices = async(page, limit, forGraph) => {
    let index = (page-1) * limit
    const gasPrices = await GasPrice.find().sort({createdAt: -1}).skip(index).limit(limit)
    const for_graph = await GasPrice.find().sort({createdAt: -1})
    const totalGasPrices = await GasPrice.countDocuments();
    if (forGraph){
        return {gasPrices: for_graph}
    }else{
        return {gasPrices, total: totalGasPrices}
    }
}

export const createGasPrice = async (data) => {
    const gasPrice = await GasPrice.create(data)
    return gasPrice
}
