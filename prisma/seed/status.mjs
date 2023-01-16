import { prisma, getNewestSeed } from './index.mjs';

import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'status.json');
    logger.debug(data);
    await prisma?.status?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
})();
