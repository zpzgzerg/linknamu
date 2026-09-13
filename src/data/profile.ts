export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "김재용",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/profile.jpeg",
  links: [
    { id: "github", label: "🐙 GitHub", url: "https://github.com/zpzgzerg" },
    { id: "blog", label: "✍️ Blog", url: "https://blog.naver.com/zpzgzerg" },
    { id: "email", label: "📮 Email", url: "mailto:zpzgzerg@gmail.com" },
  ],
};
