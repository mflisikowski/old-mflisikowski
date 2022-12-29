// import { prisma } from './src/composables/prisma';

import logger from 'node-color-log';
import spawn from 'await-spawn';
import fs from 'fs';

const packagee = JSON.parse(fs.readFileSync('./package.json'));

async function install() {
  const scripts = Object.keys(packagee.scripts);

  const executeSeeds = async () => {
    const filtered = scripts.filter((script) => {
      return `${script}`.includes('prisma:seed:');
    });

    const seeds = filtered.map(async (script) => {
      await spawn('yarn', [script]);
    });

    logger.info('Execute Seeds started, please wait for finish action');

    return await Promise.allSettled(seeds)
      .then(() => {
        logger.success('Execute Seeds completed successfully');
      })
      .catch((error) => {
        logger.error('Execute Seeds completed with errors:');
        logger.error(error.message);
      });
  };

  executeSeeds();
}

install();
