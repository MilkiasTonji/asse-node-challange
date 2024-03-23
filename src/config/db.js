//db.js

import mongoose from 'mongoose';
import { callApi } from '../cronJobRunner/callAPi.js';


const url = `mongodb+srv://assegidassefa7:4dknjGNARzHwQUU4@cluster-gasprice.d6qp74o.mongodb.net/gasPrices`;


const db = async() => {
  try {
    await mongoose.connect(url);
    console.log('Connected to the database ')
    callApi()
  } catch (error) {
    console.error(`Error connecting to the database. n${error}`);
  }
}


export default db;