import { prisma, getNewestSeed } from './index.mjs';
import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'availability.json');
    logger.debug(data);
    await prisma?.availability?.createMany({ data });
  } catch (error) {
    logger.error(error);
  }
})();
