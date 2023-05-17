import { zUpsertNote } from "@/app/notes/type";
import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";

// app/api/notes/[id]
// ノートIDはパスパラメータで受け取る

// ノート詳細を取得するAPI
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: number } }
) {
  const note = await prisma.note.findUnique({
    where: { id: Number(params.id) },
  });

  // ノートが存在しない場合404を返す
  if (note === null) {
    return new NextResponse(null, { status: 404 });
  }
  return NextResponse.json(note);
}

// ノートを更新するAPI
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const parcedData = zUpsertNote.parse(data);
  const note = await prisma.note.update({
    where: { id: Number(params.id) },
    data: { title: parcedData.title, body: parcedData.body },
  });
  return new NextResponse(null, { status: 204 });
}

// ノートを削除するAPI
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const note = await prisma.note.delete({
    where: { id: Number(params.id) },
  });
  return new NextResponse(null, { status: 204 });
}
