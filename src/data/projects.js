/* eslint-disable no-multi-str */
export const professionalProjects = [
  {
    title: "InnoPrograms",
    description:
      "A programs module integrated with the Innoloft ecosystem, that allows companies create their own customized programs and lessons dashboard, and customize various aspects to their specific needs, showing progress of participants and managing tasks assignments for each chapters and lesson.",
    image:
      "https://storage.googleapis.com/turing_developers/portfolio/1652638824236_Bildschirmfoto%202022-02-24%20um%2017.20.33.png",
    technologies: [
      "React",
      "Javascript",
      "Hooks",
      "Redux",
      "Storybook",
      "React-beautiful-DND",
    ],
    links: [
      {
        type: "external",
        link: "http://innoloft.com/programs",
      },
    ],
  },
  {
    title: "360dialog Insights & Billing",
    description:
      "A dashboard for visualizing conversation metrics between business and their customers, \
      providing insights into conversation types (Free and paid) and billing period.",
    image:
      "https://storage.googleapis.com/turing_developers/portfolio/1652638824236_Bildschirmfoto%202022-02-24%20um%2017.20.33.png",
    technologies: [
      "React",
      "Typescript",
      "Hooks",
      "Mobx",
      "Styled-components",
      "Storybook",
    ],
    links: [
      {
        type: "external",
        link: "http://hub.360dialog.com/dashboard/insights",
      },
    ],
  },
  {
    title: "LoftOS Pipelines",
    description:
      "A tool (similar to Trello and Jira Boards) with drag and drop features \
      for managing tasks and suppliers. Tasks could be created as cards on a board,\
      users can be added to a card and have different access levels(admin, user and commenters).",
    image:
      "https://storage.googleapis.com/turing_developers/portfolio/1627303772611_pipelines_board.png",
    technologies: [
      "React",
      "Javascript",
      "React-Hooks",
      "Redux",
      "Draftjs",
      "React-beautiful-DND",
    ],
    links: [
      {
        type: "external",
        link: "http://innoloft.com/pipelines",
      },
    ],
  },
  {
    title: "Innoloft Forms",
    description: "",
    image: "/inno_forms.png",
    technologies: [
      "React",
      "Javascript",
      "React-Hooks",
      "Redux",
      "React-DND",
      "Github",
    ],
    links: [
      {
        type: "external",
        link: "http://innoloft.com/forms/my-forms",
      },
    ],
  },
  {
    title: "On Demand Service Provider App",
    description:
      "A mobile application to help people find professional and trusted artisans in their locality for home facilities repairs and installments. \
        The application had features like Quote creation and generation, \
        merchants management and location management to help find the nearest available provider for a user's request.",
    image:
      "https://storage.googleapis.com/turing_developers/portfolio/1619262739507_phone9.png",
    technologies: ["Angular", "Typescript", "Firebase", "Git", "BitBucket"],
    links: [
      {
        type: "github",
        link: "https://github.com/isyel/tqworksserviceprovider",
      },
      {
        type: "external",
        link: "https://play.google.com/store/apps/details?id=com.tqworks.tqworksartisan",
      },
    ],
  },
  {
    title: "Skoorep - EdTech Platform",
    description:
      "A web and mobile based platform that helps Educational Institutions in managing their daily activities, \
        students, staff, exams, lessons, attendance, etc. Developed using React, Ionic/Angular \
        JWT for user authentication and Context API for state management and Sails.js for server side.",
    image:
      "https://storage.googleapis.com/turing_developers/portfolio/1619263210940_skoorep.png",
    technologies: [
      "Ionic",
      "Angular",
      "React",
      "Redux",
      "Typescript",
      "Javascript",
      "Git",
    ],
    links: [
      {
        type: "external",
        link: "https://skoorep.com/",
      },
    ],
  },
  {
    title: "Ecagon - SMS (School Management Application)",
    description:
      "A web-based platform that helps Educational Institutions in managing their daily activities, students, staff, exams,\
         lessons, attendance, etc. The platform can be used at any school level, as it can be configured to suit any school structure, \
         from elementary to tertiary institution.",
    image: "/ecagon_sms.png",
    technologies: ["Javascript", "Jquery", "Html5", "Php", "Git"],
    links: [],
  },
];

export const personalProjects = [
  {
    links: {
      github: "https://spotify-clone-e3cac.web.app",
      external: "https://spotify-clone-e3cac.web.app",
    },
    image: "/spotify-clone.png",
    title: "Spotify Clone",
    description:
      "A spotify clone, using the spotify API for authentication, and pulling user's playlist and selected favorite playlist, and with a playback functionality (Spotify Premium required)",
    technologies: [
      "Javascript",
      "React",
      "Context API",
      "Firebase Hosting",
      "Git",
    ],
  },
  {
    links: {
      github: "https://github.com/isyel/bitcoin-chart",
      external: "https://bitcoin-chart-six.vercel.app/bitcoin",
    },
    image: "/bitcoin-chart.png",
    title: "Bitcoin Price Chart",
    description:
      "A Chart showing the price of bitcoin over the last 30 days, pulling data from coindesk API, Hosted on Vercel.",
    technologies: [
      "Javascript",
      "React",
      "d3.js/visx",
      "Vercel Hosting",
      "Git",
    ],
  },
  {
    links: {
      github: "https://github.com/isyel/disney-plus-clone",
      external: "https://disney-clone-d1e27.firebaseapp.com/",
    },
    image: "/disney-plus.png",
    title: "Disney+ Clone",
    description:
      "A Disney+ streaming site clone, built to closely resemble the real platform, using firebase and state management library REDUX",
    technologies: [
      "Javascript",
      "React",
      "Firebase",
      "Styled Components",
      "Redux",
      "Git",
      "Netlify Hosting",
    ],
  },
  {
    links: {
      github: "https://github.com/isyel/graphql-vx-visualization",
      external: "https://graphql-vx-visualization.vercel.app/",
    },
    image: "/pub-visualization.png",
    title: "Data analysis and Visualization App",
    description:
      "A React application which analyzes and visualizes data returned from a GraphQL API using Apollo Client, \
        performs analysis on the posts and the likelyTopics values assigned to it, to draw out stats",
    technologies: [
      "Javascript",
      "React",
      "d3.js/visx",
      "Context Api",
      "GraphQL",
      "Git",
      "Vercel Hosting",
    ],
  },
  {
    links: {
      github: "https://github.com/isyel/social-app-client",
      external: "https://stupefied-haibt-ecb828.netlify.app/",
    },
    image: "/simple-social.png",
    title: "Social Engagement App",
    description:
      "A simple social media application, with functionality for creating posts, likes and comments, built with Reactjs",
    technologies: [
      "Javascript",
      "React",
      "Nodejs",
      "MongoDB",
      "Git",
      "Netlify Hosting",
    ],
  },
  {
    links: {
      github: "https://github.com/isyel/jobs-listing-interface",
      external: "https://jobs-listing-interface.vercel.app/",
    },
    image: "/job_listing_site.png",
    title: "Job Listing Website",
    description:
      "A job listing website for Medical centres, built with Nextjs, TailwindCss and hosted on Vercel",
    technologies: ["Javascript", "Nextjs", "Git", "Vercel Hosting"],
  },
  {
    links: {
      github: "https://bitbucket.org/isyel/mbduserinterface",
      external: "https://mbd-company.netlify.app/",
    },
    image: "/fb-clone.png",
    title: "MyBoardDeals Companies Web App",
    description:
      "A personal mobile advertising app, with tailored advertisement for each user, \
			and provide earning capabilities, built with Reactjs, hosted on Netlify",
    technologies: [
      "Javascript",
      "Angular",
      "Firebase",
      "Git",
      "Vercel Hosting",
    ],
  },
  {
    links: {
      github: "https://github.com/isyel/hacker-new-reader",
      external: "https://hacker-new-reader.vercel.app/",
    },
    image: "/hacker_news.png",
    title: "Hacker Rank Reader",
    description:
      "A replica of the hacker news website, built with Reactjs, hosted on Vercel",
    technologies: [
      "Javascript",
      "Nextjs",
      "TailwindCss",
      "Git",
      "Vercel Hosting",
    ],
  },
];
