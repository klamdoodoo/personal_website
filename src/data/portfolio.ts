export type ButtonVariant = "primary" | "secondary" | "ghost";
export type TechIconId =
  | "python"
  | "cplusplus"
  | "react"
  | "nodejs"
  | "aws"
  | "openai";

export type CopyField = {
  value?: string;
  placeholder: string;
};

export type ListField = {
  items?: string[];
  placeholder: string;
};

export type LinkItem = {
  label: string;
  href?: string;
  note?: string;
  variant?: ButtonVariant;
  download?: boolean;
};

export type MediaAsset = {
  src?: string;
  alt: string;
  type: "image" | "logo" | "video";
  placeholder: string;
  ratio?: "portrait" | "landscape" | "wide" | "logo";
  aspectRatio?: string;
  fit?: "cover" | "contain";
  position?: string;
  caption?: string;
  embedUrl?: string;
};

export type NarrativeSection = {
  title: string;
  paragraphs: string[];
};

export type ExpandableProjectContent = {
  label: string;
  sections: NarrativeSection[];
};

export type TechStackItem = {
  label: string;
  icon: TechIconId;
};

export type Profile = {
  name: string;
  heroEyebrow: string;
  heroGreeting: string;
  role: string;
  location?: string;
  summary: string;
  email: string;
  github: string;
  linkedin: string;
  resumeHref: string;
  headshot: MediaAsset;
  headshotPosition: string;
  techStackRows: TechStackItem[][];
};

export type Organization = {
  name: string;
  url?: string;
  logo: MediaAsset;
};

export type ExperienceEntry = {
  id: string;
  employer: Organization;
  role: string;
  client: {
    name: string;
    url?: string;
    logo: MediaAsset;
  };
  dates: CopyField;
  description: CopyField;
  technologies: ListField;
  measurableContributions: ListField;
  favoritePart: CopyField;
  links: LinkItem[];
};

export type ProjectEntry = {
  slug: string;
  title: string;
  category: "product" | "research" | "game";
  summary: CopyField;
  contribution: CopyField;
  technologies: ListField;
  results?: CopyField;
  media: MediaAsset[];
  badges?: string[];
  recognitionLinks?: LinkItem[];
  homepageLinks: LinkItem[];
  mediaAction?: LinkItem;
  notices?: CopyField[];
  expandableContent?: ExpandableProjectContent;
};

export type RecognitionItem = {
  title: string;
  date: string;
  note?: string;
};

export type CompactHonor = {
  title: string;
  date: string;
  note: string;
};

export type EducationSection = {
  school: string;
  degree: string;
  minor?: string;
  gpa?: string;
  recognitions: RecognitionItem[];
  relatedVideo: MediaAsset;
  gilpatrickPhoto: MediaAsset;
};

type PortfolioData = {
  profile: Profile;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationSection;
  additionalHonors: CompactHonor[];
};

export const portfolio: PortfolioData = {
  profile: {
    name: "Lam Do",
    heroEyebrow: "Open to work",
    heroGreeting: "Hello World, I am ",
    role: "Full-Stack Software Engineer",
    location: "Based in Los Angeles, CA",
    summary: "",
    email: "khanhlamdo209@gmail.com",
    github: "https://github.com/klamdoodoo",
    linkedin: "https://www.linkedin.com/in/lamdo209/",
    resumeHref: "/resume.pdf",
    headshot: {
      src: "/headshot.png",
      alt: "Portrait of Lam Do",
      type: "image",
      placeholder: "[Add a professional headshot]",
      ratio: "portrait",
    },
    headshotPosition: "50% 22%",
    techStackRows: [
      [
        { label: "Python", icon: "python" },
        { label: "C++", icon: "cplusplus" },
        { label: "OpenAI", icon: "openai" },
      ],
      [
        { label: "React", icon: "react" },
        { label: "Node.js", icon: "nodejs" },
        { label: "AWS", icon: "aws" },
      ],
    ],
  },
  experience: [
    {
      id: "siliconprime-bjs",
      employer: {
        name: "SiliconPrime Labs",
        url: "https://www.linkedin.com/company/siliconprimeai",
        logo: {
          src: "/siliconprimeai_logo.jpg",
          alt: "SiliconPrime Labs logo",
          type: "logo",
          placeholder: "[Add SiliconPrime Labs logo]",
          ratio: "logo",
        },
      },
      role: "Software Engineer Intern",
      client: {
        name: "BJ's Restaurants",
        url: "https://www.bjsrestaurants.com/",
        logo: {
          src: "/bjs_logo.png",
          alt: "BJ's Restaurants logo",
          type: "logo",
          placeholder: "[Add BJ's Restaurant logo]",
          ratio: "logo",
        },
      },
      dates: {
        value: "May 2025 - August 2025",
        placeholder: "[Add internship dates]",
      },
      description: {
        value:
          "I worked on customer-facing features for the BJ's Restaurants website. My work moved through real QA, code review, and twice-weekly production releases.",
        placeholder:
          "[Add internship description focused on the product, engineering scope, and your role.]",
      },
      technologies: {
        items: ["React", "Node.js", "reCAPTCHA v3", "PayPal"],
        placeholder: "[Add internship technologies]",
      },
      measurableContributions: {
        items: [
          "Upgraded the website from reCAPTCHA v2 to v3, making bot protection less disruptive for users.",
          "Rebuilt a mobile payment flow for guests scanning a table QR code.",
          "Resolved about 20 full-stack tickets and shipped my work to production.",
        ],
        placeholder: "[Add measurable contributions and outcomes]",
      },
      favoritePart: {
        value:
          "I asked a lot of questions, and am grateful to work with people who took the time to answer them.",
        placeholder:
          "[Add a short reflection on the best part of this experience]",
      },
      links: [
        {
          label: "SiliconPrime Labs",
          href: "https://www.linkedin.com/company/siliconprimeai",
          variant: "secondary",
        },
        {
          label: "BJ's Restaurants",
          href: "https://www.bjsrestaurants.com/",
          variant: "ghost",
        },
      ],
    },
  ],
  projects: [
    {
      slug: "aila",
      title: "AILA",
      category: "product",
      summary: {
        value:
          "AILA is an AI-powered language learning platform that gives students immediate feedback and helps instructors keep control over their course materials while understanding class progress.",
        placeholder: "[Add a short AILA description]",
      },
      contribution: {
        value:
          "I structured the database and built reusable frontend components. I also translated instructor and student feedback into product changes.",
        placeholder: "[Add your personal contribution to AILA]",
      },
      technologies: {
        items: [
          "React",
          "Next.js",
          "Node.js",
          "Python",
          "MySQL",
          "AWS EC2",
          "OpenAI",
          "LangChain",
        ],
        placeholder: "[Add AILA technologies]",
      },
      results: {
        value:
          "AILA was deployed in a 30-student Intermediate Spanish course and is planned to support about 100 users in Fall 2026.",
        placeholder: "[Add any AILA results or outcomes you can safely share]",
      },
      media: [
        {
          src: "/aila_conference.JPG",
          alt: "Team presenting AILA at a conference",
          type: "image",
          placeholder: "[Add AILA team presentation photo]",
          ratio: "landscape",
          position: "50% 42%",
          caption: "AILA presentation at the 2026 CCRALL conference",
        },
      ],
      badges: ["Artificial Intelligence", "Education"],
      homepageLinks: [
        {
          label: "View presentation",
          href: "https://docs.google.com/presentation/d/1rzngRCJwPNoU-ko0hg8INO3wAMagjnz_ePZqjP9OO8Q/edit?usp=sharing",
          variant: "primary",
          note: "The production app is tied to Denison authentication, live courses, student data, and paid AI APIs, so the presentation offers a safe look at the full workflow.",
        },
      ],
      mediaAction: {
        label: "View presentation",
        href: "https://docs.google.com/presentation/d/1rzngRCJwPNoU-ko0hg8INO3wAMagjnz_ePZqjP9OO8Q/edit?usp=sharing",
      },
    },
    {
      slug: "epsilon-indistinguishability",
      title: "The Power of Two",
      category: "research",
      summary: {
        value:
          "We explored how simple head-to-head choices can help recommender systems understand new users with very little effort.",
        placeholder:
          "[Add a plain-language summary of the ε-Indistinguishability research]",
      },
      contribution: {
        value:
          'Our team introduced "Tolerably Truthful" interaction, and I helped develop the C++ algorithms, write proofs for them, and test them on large datasets.',
        placeholder:
          "[Add your contribution to the ε-Indistinguishability research]",
      },
      technologies: {
        items: [
          "C++",
          "Algorithm Design",
          "Recommender Systems",
          "Linux",
          "Experimental Analysis",
        ],
        placeholder: "[Add research technologies and methods]",
      },
      media: [
        {
          src: "/research_team.jpg",
          alt: "Photo related to the ε-Indistinguishability research",
          type: "image",
          placeholder: "[Add ε-Indistinguishability research photo]",
          aspectRatio: "1.5",
          position: "50% 36%",
        },
      ],
      badges: ["Best Paper Award"],
      recognitionLinks: [
        {
          label: "Featured by Denison University",
          href: "https://denison.edu/academics/computer-science/feature/161042",
        },
      ],
      homepageLinks: [
        {
          label: "Read publication",
          href: "https://dl.acm.org/doi/10.1145/3733723.3733725",
          variant: "primary",
        },
        {
          label: "View code",
          href: "https://github.com/ashlall/Indistinguishability2",
          variant: "ghost",
        },
      ],
      mediaAction: {
        label: "Read publication",
        href: "https://dl.acm.org/doi/10.1145/3733723.3733725",
      },
      expandableContent: {
        label: "Behind the project",
        sections: [
          {
            title: "What research taught me",
            paragraphs: [
              "A lot of this project involved drawing all over the whiteboard and staring at them in Olin 217 with my teammates. I learned that moving faster does not always mean rushing. Sometimes the best progress comes from slowing down, explaining the idea, and bringing everyone with you.",
              "We had plenty of failed experiments, including runs that took days on the Linux machines before we realized something was wrong. The beginning was rough, but we learned how to communicate, found our rhythm, published the paper, and somehow ended up winning Best Paper!",
            ],
          },
        ],
      },
    },
    {
      slug: "tidy-turtles",
      title: "Tidy Turtles",
      category: "game",
      summary: {
        value:
          "A two-player cooperative puzzle game about cleaning up the ocean, designed to reward communication and teamwork.",
        placeholder: "[Add a short Tidy Turtles description]",
      },
      contribution: {
        value:
          "I shaped the game's visual identity and collaborated on designing a reusable level system that generates maps from .txt files instead of building each level by hand.",
        placeholder: "[Add your role on Tidy Turtles]",
      },
      technologies: {
        items: ["Unity", "C#", "Photoshop", "Git"],
        placeholder: "[Add Tidy Turtles technologies]",
      },
      media: [
        {
          src: "/tidy_turtles.png",
          alt: "Screenshot or gameplay image from Tidy Turtles",
          type: "image",
          placeholder: "[Add Tidy Turtles screenshot or gameplay image]",
          aspectRatio: "1.5",
          position: "50% 46%",
        },
      ],
      badges: ["Game Development", "Environmental Awareness"],
      homepageLinks: [
        {
          label: "Play game",
          href: "https://personal.denison.edu/~currinf/scooby/",
          variant: "primary",
        },
      ],
      mediaAction: {
        label: "Play game",
        href: "https://personal.denison.edu/~currinf/scooby/",
      },
      expandableContent: {
        label: "Behind the project",
        sections: [
          {
            title: "Why we made it",
            paragraphs: [
              "The idea came from playing Fireboy and Watergirl during a stressful research period. I wanted to build something centered on figuring things out as a team rather than competing against each other.",
              "The cooperative nature reminded me of coding with another person (or a rubber duck!): talking through ideas, getting stuck, and working things out together.",
            ],
          },
          {
            title: "My favorite moment",
            paragraphs: [
              "At our public showcase, two friends became so invested that they stayed after the event was wrapping up and kept trying to finish the game. We eventually had to stop them one level before the ending because the venue was closing. Seeing people genuinely have fun with something our team created was super rewarding.",
            ],
          },
        ],
      },
    },
  ],
  education: {
    school: "Denison University",
    degree: "B.A. in Computer Science (2022 - 2026)",
    minor: "Minor in Digital Humanities",
    recognitions: [
      {
        title: "Valedictorian, Class of 2026",
        date: "May 2026",
      },
      {
        title: "Gilpatrick Award",
        date: "May 2026",
        note: "Recognizing the most outstanding Computer Science senior based on achievement, leadership, and academic excellence.",
      },
    ],
    relatedVideo: {
      src: "/valedictorian.mp4",
      alt: "Video related to Lam Do's valedictorian recognition at Denison University",
      type: "video",
      placeholder: "[Add related Denison video URL or embed]",
      aspectRatio: "1.781",
      position: "50% 50%",
    },
    gilpatrickPhoto: {
      src: "/gilpatrick.JPG",
      alt: "Lam Do holding the John L. Gilpatrick Award certificate",
      type: "image",
      placeholder: "[Add Gilpatrick Award photo]",
      aspectRatio: "0.668",
      position: "50% 40%",
    },
  },
  additionalHonors: [
    {
      title: "Phi Beta Kappa",
      date: "May 2025",
      note: "The oldest and most prestigious academic honor society in the United States",
    },
    {
      title: "Daniel Donald Bonar Award",
      date: "May 2025",
      note: "For a junior engaged in departmental initiatives.",
    },
    {
      title: "Kato Award",
      date: "May 2025",
      note: "For a promising junior demonstrating strong character and receiving the department's recommendation.",
    },
    {
      title: "Forbes B. Wiley Award",
      date: "May 2024",
      note: "For outstanding departmental work by a sophomore.",
    },
  ],
};

export const navigationItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/#resume" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export function getHeroLinks(): LinkItem[] {
  return [
    {
      label: "View resume",
      href: "/#resume",
      variant: "primary",
    },
    {
      label: "GitHub",
      href: portfolio.profile.github,
      variant: "secondary",
    },
    {
      label: "LinkedIn",
      href: portfolio.profile.linkedin,
      variant: "secondary",
    },
    {
      label: "Email",
      href: `mailto:${portfolio.profile.email}`,
      variant: "ghost",
    },
  ];
}

export function getHeaderActions(): LinkItem[] {
  return [];
}
