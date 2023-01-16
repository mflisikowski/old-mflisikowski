import { prisma, getNewestSeed } from './index.mjs';

import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'relocation.json');
    logger.debug(data);
    await prisma?.relocation.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
})();
