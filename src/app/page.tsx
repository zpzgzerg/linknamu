import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:py-20">
      <Profile profile={profile} />
      <LinkList links={profile.links} />
    </main>
  );
}
