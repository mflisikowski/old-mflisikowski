import { prisma, getNewestSeed } from './index.mjs';

import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'social.json');
    logger.debug(data);
    await prisma?.social?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
})();
