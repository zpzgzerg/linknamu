import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-6 px-4 py-10 sm:py-16">
      <Profile profile={profile} />
      <LinkList links={profile.links} />
    </main>
  );
}
