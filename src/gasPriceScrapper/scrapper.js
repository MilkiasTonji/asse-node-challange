import axios from "axios"; 
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

export const scrappDataFromWebPage = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true }); 
    const page = await browser.newPage();
    console.log('Scrapping data. Please wait...');

    await page.setDefaultNavigationTimeout(60000);

    let navigationSucceeded = false;
    let retryCount = 0;
    const maxRetries = 3; 

    while (retryCount < maxRetries && !navigationSucceeded) {
      try {
        await page.goto("https://snowtrace.io/");
        navigationSucceeded = true; // Mark success if no error is thrown
      } catch (error) {
        if (error instanceof puppeteer.TimeoutError) {
          console.warn("Navigation timed out. Retrying...", ++retryCount);
        } else {
          throw error; 
        }
      }
    }

    if (!navigationSucceeded) {
      console.error("Failed to navigate after retries. Exiting...");
      await browser.close();
      return; 
    }

    // Wait for specific selector or use a more robust strategy (e.g., page.waitForNavigation)
    await page.waitForSelector("div.text-right span.small");

    const content = await page.content();
    const $ = cheerio.load(content);
    var price_navax = ""
    var price_usd = "" 

    $("div.text-right span.small").each((index, element) => {
        price_usd = $(element).text()
        console.log('price_usd: ', price_usd);
    });
    $("div.text-right span.text-link").each((index, element) => {
        price_navax = $(element).text()
        console.log('price_navax: ', price_navax);
      });
    await browser.close();

    return {'success': true, price_usd, price_navax}
  } catch (error) {
    return {'success': false, error}
  }
};
