import { prisma, getNewestSeed } from './index.mjs';

import logger from 'node-color-log';

(async function () {
  try {
    const data = await getNewestSeed('prisma/backups', 'employee.json');
    logger.debug(data);
    await prisma?.employee?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
})();
