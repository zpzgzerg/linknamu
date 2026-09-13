import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("linknamu");
  const docs = await db
    .collection<{ linkId: string; count: number }>("linkClicks")
    .find({}, { projection: { _id: 0, linkId: 1, count: 1 } })
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count ?? 0;
  }

  return NextResponse.json(counts);
}

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();
  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("linknamu");
  await db.collection("linkClicks").updateOne(
    { linkId },
    { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
    { upsert: true }
  );

  return NextResponse.json({ ok: true });
}
