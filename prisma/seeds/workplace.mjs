import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.workplace?.count();

  if (count && count > 0) await prisma?.workplace?.deleteMany();

  const data = [
    {
      id: 'b9459462-06f8-4fdf-82c2-6bca70059c6e',
      company_id: 'e34ff748-7ac4-49e7-bdaa-8005e3640524',
      title: 'Front-end Developer',
      description: '',
      start: '2019',
      end: '',
      present: true,
    },
    {
      id: 'be324735-445f-42d4-91a7-ea8af0ac3fb7',
      company_id: 'fb352fda-dff6-4db5-9d7a-3addd9fb3c7a',
      title: 'Front-end Developer',
      description: '',
      start: '2019',
      end: '2022',
      present: false,
    },
    {
      id: '581eb760-f438-41dd-a98b-757778bee54f',
      company_id: '1321bf94-2fa0-4848-8186-01de526a04ad',
      title: 'Front-end Developer',
      description: '',
      start: '2015',
      end: '2019',
      present: false,
    },
    {
      id: '09e83d0a-4ec2-4a14-bce5-a723b4212274',
      company_id: '2a9519a8-731f-4efe-9304-06d340233221',
      title: 'Front-end Developer',
      description: '',
      start: '2014',
      end: '2015',
      present: false,
    },
    {
      id: '572bd023-629c-4acb-8e64-405199834b81',
      company_id: 'e1688bbb-df86-4409-b11c-4ab7b09eca32',
      title: 'Junior Webmaster',
      description: '',
      start: '2006',
      end: '2007',
      present: false,
    },
  ];

  try {
    await prisma?.workplace?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
}

seed().finally(async () => await prisma.$disconnect());
