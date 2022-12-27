const title = 'Mateusz Flisikowski';

const projects = {
  websites: {
    id: 1,
    title: 'Websites',
    projects: [],
  },
  opensource: {
    id: 2,
    title: 'Open Source',
    projects: [],
  },
};

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
          src: '2ff13d60-3bb1-4a6e-be58-ea0c8986a3e3',
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
    cv: {
      layout: {
        title: '',
        intro: '',
      },
      title: `CV - ${title}`,
      metas: [],
    },
  },
  projects,
};

export default configuration;
