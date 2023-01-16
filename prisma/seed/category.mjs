import { prisma, getNewestSeed } from './index.mjs';

import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'category.json');
    logger.debug(data);
    await prisma?.category?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
})();
