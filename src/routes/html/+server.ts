
import puppeteer from 'puppeteer-core'
import chrome from 'chrome-aws-lambda'
import type { RequestEvent } from './$types';

/**
 * 
 * @param RequestHandler
 */
export async function GET({}:RequestEvent) {
    const browser = await puppeteer.launch({
        args: chrome.args,
        executablePath: await chrome.executablePath,
        channel: "chrome",
        headless: true,
        ignoreHTTPSErrors: true,
      })
    const page = await browser.newPage();

    await page.goto('https://google.com');

    await page.setViewport({ width: 1080, height: 1024 });
    const imgBuffer = await page.screenshot({ fullPage: true });

    await browser.close();
    if(!imgBuffer) return new Response("No image buffer found", { status: 500 })
    return new Response(imgBuffer, {
        headers: {
            'Content-Type': 'image/png',
        },
    });
}