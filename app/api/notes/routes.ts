import { prisma } from "@/globals/db";
import { NextResponse } from "next/server";

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

// ノート一覧を取得するAPI
export async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}
