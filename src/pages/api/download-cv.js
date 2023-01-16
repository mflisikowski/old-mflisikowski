import { BROWSERLESS } from '@/composables/env';
import { puppeteer } from '@/composables/puppeteer';

export default async function handler(req, res) {
  res.setHeader('Content-Disposition', 'attachment; filename="cv.pdf"');
  res.setHeader('Content-Type', 'application/pdf');

  try {
    const url = 'https://mflisikowski.dev/cv';

    const browser = await puppeteer.connect({
      browserWSEndpoint: BROWSERLESS.WS,
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
