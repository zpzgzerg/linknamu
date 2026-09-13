"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  function handleClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: link.id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-center font-medium text-stone-800 shadow-[0_4px_20px_-8px_rgba(120,80,40,0.25)] backdrop-blur-md transition-all duration-200 hover:border-white/80 hover:bg-white/55 hover:shadow-[0_6px_24px_-8px_rgba(120,80,40,0.3)] active:scale-[0.98]"
    >
      {link.label}
    </a>
  );
}
