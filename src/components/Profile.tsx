import Image from "next/image";
import type { Profile as ProfileType } from "@/data/profile";

export default function Profile({ profile }: { profile: ProfileType }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-white/80 shadow-[0_14px_32px_-10px_rgba(196,120,60,0.45)]">
        <Image src={profile.avatarUrl} alt={profile.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-stone-800">{profile.name}</h1>
        <p className="text-sm text-stone-500">{profile.bio}</p>
      </div>
    </div>
  );
}
