import dotenv from "dotenv";
dotenv.config();

export const database = process.env.DB_NAME;
export const username = process.env.DB_USERNAME;
export const password = process.env.DB_PASSWORD;
export const host = process.env.DB_HOST;
export const appPort = process.env.APP_PORT || 8081;
