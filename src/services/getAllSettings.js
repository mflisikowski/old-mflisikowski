import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getAllSettings = async () => {
  const settings = serialize(await prisma.setting.findFirst());

  return {
    settings: settings,
  };
};
