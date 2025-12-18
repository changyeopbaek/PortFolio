export interface TimelineItem {
  date: string;
  company: string;
  role: string;
  description?: string;
  details?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  isSvg?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  emoji: string;
  tags: string[];
}

export interface Interest {
  icon: string;
  name: string;
}

export interface Education {
  date: string;
  school: string;
  major: string;
  status: string;
}

export interface Award {
  date: string;
  title: string;
  organization: string;
}

export interface Experience {
  period: string;
  location: string;
  description: string;
}

export const interests: Interest[] = [
  { icon: "🌱", name: "환경" },
  { icon: "💪", name: "건강" },
  { icon: "🎮", name: "게임" },
  { icon: "⚽", name: "스포츠" },
];

export const timeline: TimelineItem[] = [
  {
    date: "2025.04 ~ 2025.11",
    company: "멋쟁이사자처럼",
    role: "프론트엔드 부트캠프 14기 수료",
    description:
      "HTML, CSS, Javascript, React를 배우고 총 3개의 프로젝트를 수행하고 부트캠프를 정상 수료",
    details: [
      "HTML, CSS, Javascript, React 학습",
      "UI 프로젝트 수행",
      "바닐라 자바스크립트 프로젝트 수행",
      "리액트 파이널 프로젝트 수행",
    ],
  },
  {
    date: "2023.08 ~ 2024.09",
    company: "에스엠씨인터내셔널",
    role: "IT 개발팀 PM",
    description: "서비스 기획과 회사 운영에 필요한 전반적인 업무들을 담당",
    details: [
      "디저트39 오더앱 고도화",
      "삼구 AI 헬퍼 기획 및 런칭",
      "디저트39 포스 프로그램 QA",
      "탄소감축 지표 계산식 제작",
      "탄소배출권 사업 계획서 제작",
      "친환경 정부 지원 방안을 위한 환경부 미팅 자료 제작 및 PT 진행",
      "리유저블컵 인프라 구축 방안 기획",
      "가맹점 내 DID 업그레이드 진행",
      "커피 & 베이커리 구독 시장 물색 및 신규 구독 서비스 기획",
      "기존 IP와 건강을 활용한 신규 아이템 기획",
      "글로벌 소프트 드링크 시장 분석 및 신규 제품 방향성 기획",
      "디저트 트렌드 분석 및 신규 디저트 발굴",
      "인사팀 CAPS관리 및 인재 채용",
    ],
  },
  {
    date: "2020.12 ~ 2023.04",
    company: "(주)씨엘엑스엠",
    role: "공동창업자 / 기획",
    description:
      "서비스 기획, 인사, 마케팅 기획, 콘텐츠 기획, 고객 관리 등을 총괄",
    details: [
      "2021.06 E-Sports 크라우드 펀딩 플랫폼 콜로세움 서비스 기획 및 런칭",
      "2021.12 미술품 조각거래 정보제공 플랫폼 GREEMY 기획 및 런칭",
      "2022.04 GREEMERZ NFT 프로젝트 마케팅 및 커뮤니티 관리",
      "2022.04 GREEMY 플랫폼 NFT 종합 정보 및 자산 분석 서비스로 리뉴얼 기획 및 런칭",
      "2023.02 GREEMERZ ADVENTURE 게임 기획 및 런칭",
    ],
  },
  {
    date: "2020.07 ~ 2020.11",
    company: "(주)패스트림",
    role: "전략기획",
    description:
      "제품과 서비스를 피드 형식과 영상을 결합한 방식으로 만나볼 수 있는 패스트림 플랫폼 초기 서비스 APP 런칭",
  },
];

export const education: Education[] = [
  {
    date: "2018.12 ~ 2021.04",
    school: "Borough Manhattan Community College",
    major: "멀티미디어 프로그래밍",
    status: "중퇴",
  },
  {
    date: "2018.06 ~ 2018.11",
    school: "Advanced Kaplan Philadelphia",
    major: "영어 교육",
    status: "수료",
  },
];

export const awards: Award[] = [
  {
    date: "2025년",
    title: "동료칭찬상",
    organization: "멋쟁이사자처럼 프론트엔드 부트캠프 14기",
  },
];

export const overseasExperience: Experience = {
  period: "2018.06 ~ 2021.03",
  location: "미국",
  description:
    "Kaplan Philadelphia Advanced Class 수료\nBorough of Manhattan Community College Multi-media Programming 전공",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Design & Planning",
    icon: "✏️",
    skills: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Adobe XD",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
      },
      {
        name: "Illustrator",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      },
      {
        name: "Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      },
      {
        name: "InVision",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg",
      },
      {
        name: "draw.io",
        icon: "https://www.diagrams.net/favicon.ico",
      },
    ],
  },
  {
    title: "Cooperation",
    icon: "🤝",
    skills: [
      {
        name: "Notion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
      },
      {
        name: "Slack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      },
      {
        name: "Trello",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
      },
      { name: "Discord", icon: "discord", isSvg: true },
      { name: "Zeplin", icon: "zeplin", isSvg: true },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Zustand",
        icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      },
    ],
  },
  {
    title: "Backend & Deploy",
    icon: "⚙️",
    skills: [
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "Bun",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "UI 프로젝트",
    description: "멋쟁이사자처럼 부트캠프에서 수행한 첫 번째 프로젝트입니다.",
    emoji: "🎨",
    tags: ["HTML", "CSS", "UI/UX"],
  },
  {
    title: "바닐라 JS 프로젝트",
    description: "순수 JavaScript로 구현한 프로젝트입니다.",
    emoji: "⚡",
    tags: ["JavaScript", "Vanilla JS"],
  },
  {
    title: "리액트 프로젝트",
    description: "React를 활용한 SPA 프로젝트입니다.",
    emoji: "⚛️",
    tags: ["React", "TypeScript"],
  },
  {
    title: "GameMatcher",
    description: "게임 매칭 서비스 프로젝트입니다.",
    emoji: "🎮",
    tags: ["React", "Supabase", "Next.js"],
  },
];
