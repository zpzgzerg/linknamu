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
  bio: "세계 최강 바이브 코더",
  avatarUrl: "/avatar.svg",
  links: [
    { id: "github", label: "GitHub", url: "https://github.com/USERNAME" },
    { id: "blog", label: "Blog", url: "https://example.com" },
    { id: "instagram", label: "Instagram", url: "https://instagram.com/USERNAME" },
  ],
};
