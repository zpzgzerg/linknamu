"use client";

import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/click")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  return (
    <div className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} count={counts[link.id] ?? 0} />
      ))}
    </div>
  );
}
