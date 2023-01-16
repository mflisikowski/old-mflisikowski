import { prisma, getNewestSeed } from './index.mjs';

import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'company.json');
    logger.debug(data);
    await prisma?.company?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
})();
