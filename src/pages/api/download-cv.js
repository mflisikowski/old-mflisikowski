import { BROWSERLESS_WS_ENDPOINT } from '@/composables/env';
import { puppeteer } from '@/composables/puppeteer';

// Supabase Edge function issues with deno-puppeteer
// https://github.com/lucacasonato/deno-puppeteer/issues/72
// https://github.com/lucacasonato/deno-puppeteer/issues/73

// Temp solution
export default async function handler(req, res) {
  res.setHeader('Content-Disposition', 'attachment; filename="cv.pdf"');
  res.setHeader('Content-Type', 'application/pdf');

  try {
    const url = 'https://mflisikowski.dev/cv';

    const browser = await puppeteer.connect({
      // Browserless deploy on Railway https://railway.app
      browserWSEndpoint: BROWSERLESS_WS_ENDPOINT,
    });

    const page = await browser.newPage();

    await page.emulateMediaType('screen');
    await page.goto(url);

    const pdf = await page.pdf({ format: 'A4' });

    res.status(201);
    res.send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(JSON.stringify(error.message));
  }
}
