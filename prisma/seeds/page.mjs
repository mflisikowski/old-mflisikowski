import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.page?.count();

  if (count && count > 0) await prisma?.page?.deleteMany();

  const data = [
    {
      id: 'f46c2c93-8656-4ef9-b1ca-b08ce15206c9',
      route_id: '09d2a3f0-e71b-4f8b-84a8-cafc6b4897b6',
      subheading:
        'I’m a Design-oriented Front-end Developer passionate about modern technologies specializing in responsive web design, modern CSS, Javascript and accessibility. I work with my clients to create interfaces and design systems that work for everyone.',
      heading: 'Hello I’m Mateusz Flisikowski',
      title: 'Home',
    },
    {
      id: '77bde7c8-964a-46ce-ad7c-1cb6a83ee7a0',
      route_id: '50c7119d-0a16-4216-ad6f-b69a66eb0de8',
      subheading:
        'I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.',
      heading: 'Software I use, gadgets I love, and other things I recommend.',
      title: 'Uses',
    },
    {
      id: '2e38062b-c64d-4c91-8f3b-55e39aa864c2',
      route_id: '767221cf-ef3f-4c34-adaf-b3f021e8cf39',
      subheading: 'Vitae',
      heading: 'Curriculum',
      title: 'CV',
    },
    {
      id: 'b979f8ca-83cc-4022-b74a-08ecc044029e',
      route_id: 'ee02fe20-a6c4-462b-86f8-909659704bc7',
      subheading:
        'I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.',
      heading: 'Things I’ve made.',
      title: 'Projects',
    },
  ];

  try {
    await prisma?.page?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
}

seed().finally(async () => await prisma.$disconnect());
