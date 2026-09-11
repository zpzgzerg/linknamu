import Image from "next/image";
import type { Profile as ProfileType } from "@/data/profile";

export default function Profile({ profile }: { profile: ProfileType }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full ring-1 ring-gray-200">
        <Image src={profile.avatarUrl} alt={profile.name} fill className="object-cover" />
      </div>
      <h1 className="text-lg font-semibold">{profile.name}</h1>
      <p className="text-sm text-gray-500">{profile.bio}</p>
    </div>
  );
}
