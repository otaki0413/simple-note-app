import { prisma } from "@/globals/db";
import { LineBreakText } from "@/components/LineBreakText";

// 30秒ごとに再検証
export const revalidata = 30;

export default async function Page() {
  const data = await prisma.metaData.findUniqueOrThrow({
    where: { key: "faq" },
  });
  return (
    <main>
      <h1 className="text-xl my-2">Frequently Asked Questions</h1>
      <p className="text-xs text-gray-400 my-2">
        The following text is a sample
      </p>
      <LineBreakText>{data.value}</LineBreakText>
    </main>
  );
}
