import { callApi } from "./callAPi.js";
import cron from 'node-cron'

console.log('Cron job started. The API will be called every 30 minutes.');

// Define the cron job schedule (runs every 30 minutes)
const schedule = '*/30 * * * *';

// Start the cron job
cron.schedule(schedule, async () => {
    console.log('Executing cron job...');
    await callApi();
});

