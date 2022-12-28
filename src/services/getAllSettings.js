import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getAllSettings = async (key) => {
  const settings = serialize(await prisma.setting.findMany());

  return {
    settings: settings[0],
  };
};
