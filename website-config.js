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

const uses = {
  workstation: {
    id: 1,
    title: 'Workstation',
    uses: [
      {
        title: 'Apple MacBook Pro 14” M1 Pro 16GB 1TB (MKGT3ZE/A)',
        description:
          'I was using an Intel-based 13” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.',
      },
      {
        title: 'Apple Magic Trackpad',
        description:
          'Magic Trackpad is wireless and rechargeable, and it includes the full range of Multi-Touch gestures and Force Touch technology. Magic Trackpad pairs automatically with your Mac, so you can get to work right away. The rechargeable battery will power it for about a month or more between charges.',
      },
      {
        title: 'Magic Keyboard with Numeric Keypad',
        description:
          'Magic Keyboard with Numeric Keypad features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys. And the built-in, rechargeable battery is incredibly long-lasting, powering your keyboard for about a month or more between charges',
      },
    ],
  },
  development: {
    id: 2,
    title: 'Development tools',
    uses: [
      {
        title: 'Visual Studio Code',
        description:
          'Visual Studio Code is a lightweight but powerful source code editor',
        link: {
          url: 'https://code.visualstudio.com',
          label: 'www.code.visualstudio.com',
        },
      },
      {
        title: 'Supabase',
        description: 'Supabase is an open source Firebase alternative',
        link: {
          url: 'https://supabase.com',
          label: 'www.supabase.com',
        },
      },
      {
        title: 'Render',
        description:
          'Render is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.',
        link: {
          url: 'https://render.com',
          label: 'www.render.com',
        },
      },
      {
        title: 'Vercel',
        description:
          'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.',
        link: {
          url: 'https://vercel.com',
          label: 'www.vercel.com',
        },
      },
      {
        title: 'Uploadcare',
        description:
          'Power up file uploading, processing and delivery for your app in one sitting.',
        link: {
          url: 'https://uploadcare.com',
          label: 'www.uploadcare.com',
        },
      },
      {
        title: 'Dhosting',
        description:
          'The simplicity and intuitiveness of the administration panel, as well as the possibility of editing many elements from its level.',
        link: {
          url: 'https://dhosting.pl',
          label: 'www.dhosting.pl',
        },
      },
      {
        title: 'SVGO',
        description: 'Node.js tool for optimizing SVG files',
        link: {
          url: 'https://github.com/svg/svgo',
          label: 'www.github.com/svg/svgo',
        },
      },
      {
        title: 'Native macOS Terminal',
        description: '',
        link: {
          url: '',
          label: '',
        },
      },
    ],
  },
  design: {
    id: 3,
    title: 'Design',
    uses: [
      {
        title: 'Sketch',
        description:
          'Sketch gives you all the tools you need for a truly collaborative design process. From early ideas to pixel-perfect artwork, playable prototypes and developer handoff.',
        link: {
          url: 'https://sketch.com',
          label: 'www.sketch.com',
        },
      },
    ],
  },
  productivity: {
    id: 4,
    title: 'Productivity',
    uses: [
      {
        title: 'Focus on Mac',
        description:
          'When you need to stay on task and minimize distractions, use Focus. You can use a Focus to pause and silence all notifications or allow only certain notifications—for example, ones from colleagues on an urgent project. You can also share that you’ve silenced notifications so contacts know you’re busy.',
      },
    ],
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
  },
  projects,
  uses,
};

export default configuration;
