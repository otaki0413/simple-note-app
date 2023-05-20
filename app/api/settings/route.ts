import { zSettings } from "@/app/type";
import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";

// 設定情報を更新するAPI
export async function PUT(req: NextRequest) {
  const data = await req.json();
  const parcedData = zSettings.parse(data);

  // トランザクションで複数データを一気に更新する
  await prisma.$transaction([
    prisma.metaData.update({
      where: { key: "version" },
      data: { value: parcedData.version },
    }),
    prisma.metaData.update({
      where: { key: "faq" },
      data: { value: parcedData.faq },
    }),
    prisma.metaData.update({
      where: { key: "tos" },
      data: { value: parcedData.tos },
    }),
  ]);

  return new NextResponse(null, { status: 204 });
}
