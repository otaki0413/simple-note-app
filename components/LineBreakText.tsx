export const LineBreakText = ({ children }: { children: string }) => {
  /**
   * 与えられた文字列を改行文字（\n）で分割。
   * それぞれの部分文字列に対して、改行文字であれば<br>要素を追加し、そうでなければ元の文字列をそのまま表示。
   * 最終的に、改行が<br>要素に置き換えられた文字列が表示される。
   */
  return (
    <>
      {children
        .split(/(\n)/g)
        .map((t, index) => (t === "\n" ? <br key={index} /> : t))}
    </>
  );
};
