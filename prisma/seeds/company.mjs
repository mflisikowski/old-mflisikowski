import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.company?.count();

  if (count && count > 0) await prisma.company.deleteMany();

  await prisma.company.createMany({
    data: [
      {
        id: '1321bf94-2fa0-4848-8186-01de526a04ad',
        name: 'Wirtualna Polska Media Sp. z o.o',
        logotype: 'https://ucarecdn.com/325bcca8-c615-4124-81cf-2c02fb9b4d05/',
        isContractor: true,
        isClient: false,
      },
      {
        id: '2a9519a8-731f-4efe-9304-06d340233221',
        name: 'Nord Systems Sp. z o.o.',
        logotype: 'https://ucarecdn.com/46eba137-03fa-483a-869c-8b1ea6eb9e7f/',
        isContractor: true,
        isClient: false,
      },
      {
        id: 'e1688bbb-df86-4409-b11c-4ab7b09eca32',
        name: 'Interbit Sp. z o.o',
        logotype: 'https://ucarecdn.com/46eba137-03fa-483a-869c-8b1ea6eb9e7f/',
        isContractor: true,
        isClient: false,
      },
      {
        id: 'fb352fda-dff6-4db5-9d7a-3addd9fb3c7a',
        name: 'E NET PRODUCTION sp. z o.o.',
        logotype: 'https://ucarecdn.com/e25cf388-dc9d-4e34-a7f9-1192e014f79b/',
        isContractor: true,
        isClient: false,
      },
      {
        id: 'e34ff748-7ac4-49e7-bdaa-8005e3640524',
        name: 'Mateusz Flisikowski Development',
        logotype: 'https://ucarecdn.com/25a53619-c475-4cf0-9c69-c0aa123ad26f/',
        isContractor: false,
        isClient: false,
      },
    ],
  });
}

seed()
  .catch((e) => logger.error(e) && process.exit(1))
  .finally(async () => await prisma.$disconnect());
