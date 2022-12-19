const title = 'Mateusz Flisikowski';

const workplaces = [
  {
    id: '1',
    company: 'Mateusz Flisikowski Development',
    title: 'Owner',
    logo: 'https://ucarecdn.com/25a53619-c475-4cf0-9c69-c0aa123ad26f/workplacemfd.svg',
    start: '2019',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    id: '2',
    company: 'E NET PRODUCTION sp. z o.o.',
    title: 'Front-end Developer',
    logo: 'https://ucarecdn.com/e25cf388-dc9d-4e34-a7f9-1192e014f79b/workplaceenp.svg',
    start: '2019',
    end: '2022',
  },
  {
    id: '3',
    company: 'Wirtualna Polska Media Sp. z o.o',
    title: 'Front-end Developer',
    logo: 'https://ucarecdn.com/325bcca8-c615-4124-81cf-2c02fb9b4d05/workplacewp.svg',
    start: '2015',
    end: '2019',
  },
  {
    id: '4',
    company: 'Nord Systems Sp. z o.o.',
    title: 'Front-end Developer',
    logo: 'https://ucarecdn.com/46eba137-03fa-483a-869c-8b1ea6eb9e7f/workplaceplaceholder.svg',
    start: '2014',
    end: '2015',
  },
  {
    id: '5',
    company: 'Not related ',
    title: 'to the IT industry',
    logo: 'https://ucarecdn.com/46eba137-03fa-483a-869c-8b1ea6eb9e7f/workplaceplaceholder.svg',
    start: '2006',
    end: '2014',
  },
  {
    id: '6',
    company: 'Interbit Sp. z o.o',
    title: 'Junior Webmaster',
    logo: 'https://ucarecdn.com/46eba137-03fa-483a-869c-8b1ea6eb9e7f/workplaceplaceholder.svg',
    start: '2006',
    end: '2006',
  },
];

const socials = [
  {
    id: '1',
    label: 'Github',
    href: 'https://github.com/mflisikowski',
  },
  {
    id: '2',
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/mateusz-flisikowski/',
  },
  {
    id: '3',
    label: 'Email',
    href: 'mailto:contact@mflisikowski.dev',
  },
];

const configuration = {
  pages: {
    home: {
      layout: {
        title: 'Hello I’m Mateusz Flisikowski',
        intro:
          'I’m a Design-oriented Front-end Developer passionate about modern technologies specializing in responsive web design, modern CSS, Javascript and accessibility. I work with my clients to create interfaces and design systems that work for everyone.',
        image: {
          visibilityRegions: [
            'Europe/Copenhagen',
            'Europe/Stockholm',
            'Europe/Warsaw',
            'Europe/Oslo',
            'Asia/Bangkok',
          ],
          src: 'https://ucarecdn.com/2ff13d60-3bb1-4a6e-be58-ea0c8986a3e3/image.jpg',
        },
      },
      title: `Home Page - ${title}`,
      metas: [],
    },
    projects: {
      layout: {
        title: 'Things I’ve made.',
        intro:
          'I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.',
      },
      title: `Projects - ${title}`,
      metas: [],
    },
    uses: {
      layout: {
        title: 'Software I use, gadgets I love, and other things I recommend.',
        intro:
          'I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.',
      },
      title: `Uses - ${title}`,
      metas: [],
    },
  },
  workplaces,
  socials,
};

export default configuration;
