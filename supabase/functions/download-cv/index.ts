// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.131.0/http/server.ts';
import puppeteer from 'https://deno.land/x/puppeteer@16.2.0/mod.ts';

const BROWSERLESS_WS_ENDPOINT = Deno.env.get('BROWSERLESS_WS_ENDPOINT');

serve(async (req) => {
  try {
    const url = new URL(req?.url)?.searchParams?.get('url') || '';

    // https://github.com/lucacasonato/deno-puppeteer/issues/72
    const browser = await puppeteer.connect({
      browserWSEndpoint: BROWSERLESS_WS_ENDPOINT,
    });

    const page = await browser.newPage();

    await page.goto(url);

    // https://github.com/lucacasonato/deno-puppeteer/issues/73
    // const pdf = await page.pdf({ format: 'A4' });
    // return new Response(pdf, {
    //   headers: {
    //     'Content-Disposition': `attachment; filename="cv.pdf"`,
    //     'Content-Type': 'application/pdf',
    //   },
    // });

    const screenshot = await page.screenshot();

    return new Response(screenshot, {
      headers: { 'Content-Type': 'image/png' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error.message), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
