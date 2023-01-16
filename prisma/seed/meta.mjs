import { prisma, getNewestSeed } from './index.mjs';

import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'meta.json');
    logger.debug(data);
    await prisma?.meta?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
})();
