import { prisma } from "@/globals/db";
import { zSettings } from "../type";
import { EditSettings } from "./EditSetting";

export const revalidate = 0;

export const metadata = {
  title: "Settings",
};

export default async function Page() {
  // ページ内でのDBからのデータ取得
  const settings = await getSettings();
  return (
    <main className="mx-2 sm:mx-4">
      <h2 className="my-4 text-gray-400 text-xs">Settings</h2>
      <EditSettings value={settings} />
    </main>
  );
}

// 設定情報を更新する関数
const getSettings = async () => {
  const settings = await prisma.metaData.findMany();
  const data = settings.reduce<Record<string, string>>((acc, cur) => {
    acc[cur.key] = cur.value;
    return acc;
  }, {});
  const parsedData = zSettings.parse(data);
  return parsedData;
};
