import { prisma, getNewestSeed } from './index.mjs';

import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'setting.json');
    logger.debug(data);
    await prisma?.setting?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
})();
