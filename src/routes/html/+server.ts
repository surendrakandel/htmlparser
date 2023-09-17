
import puppeteer from 'puppeteer';
import type { RequestEvent } from './$types';

/**
 * 
 * @param RequestHandler
 */
export async function GET({}:RequestEvent) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://google.com');

    await page.setViewport({ width: 1080, height: 1024 });
    const imgBuffer = await page.screenshot({ fullPage: true });

    await browser.close();

    return new Response(imgBuffer, {
        headers: {
            'Content-Type': 'image/png',
        },
    });
}