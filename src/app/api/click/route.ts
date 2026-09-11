import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

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
