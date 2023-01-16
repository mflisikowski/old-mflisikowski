import { PrismaClient } from '@prisma/client';
import logger from 'node-color-log';
import fs from 'fs';

/**
 * Gets the newest directory in the specified directory.
 * @param {string} path - The path to search for the newest directory.
 * @returns {Promise} A promise that resolves to path of the newest directory.
 */

const getNewestDirectory = async (path) => {
  try {
    const files = await fs.promises.readdir(path);
    const directories = files.filter((file) => {
      return fs.statSync(`${path}/${file}`).isDirectory();
    });

    directories.sort((a, b) => new Date(b) - new Date(a));

    return `${path}/${directories[0]}`;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Gets the contents of a JSON file with the specified name from the newest directory in the specified path.
 * @param {string} path - The path to search for the newest directory.
 * @param {string} fileName - The name of the JSON file to read from the newest directory.
 * @returns {Promise} A promise that resolves to the parsed contents of the JSON file.
 */
export const getNewestSeed = async (path, fileName) => {
  try {
    const dir = await getNewestDirectory(path);
    const json = await fs.promises.readFile(`${dir}/${fileName}`, 'utf8');

    return JSON.parse(json);
  } catch (err) {
    console.error(err);
  }
};

export const prisma = new PrismaClient({ errorFormat: 'pretty' });

prisma.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  logger.info(
    `Prisma Query Details: ${params.action} on ${params.model} model took a ${
      after - before
    }ms`
  );

  return result;
});
