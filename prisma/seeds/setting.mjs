import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.setting?.count();

  if (count && count > 0) {
    await prisma?.setting?.deleteMany();
  }

  await prisma?.setting?.createMany({
    data: [
      {
        id: '049725ba-d910-4da3-928e-337b53c04795',
        description:
          'Hi, I’m a Design-oriented Front-end Developer passionate about modern technologies specializing in responsive web design, modern CSS, Javascript and accessibility. I work with my clients to create interfaces and design systems that works for everyone.',
        image: 'https://www.mflisikowski.dev/og.png',
        title:
          "Mateusz Flisikowski. Mainly Front-End Developer but I'm aspiring Full-Stack Web Developer",
        phone: '+48 500-526-369',
        email: 'contact@mflisikowski.dev',
        postcode: '83-110',
        address: 'ul. Romana Klima 21/A',
        city: 'Tczew',
        country: 'Poland',
        birtday: '21.10.1986',
      },
    ],
  });
}

seed()
  .catch((e) => logger.error(e) && process.exit(1))
  .finally(async () => await prisma.$disconnect());
