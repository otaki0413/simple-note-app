export default function Foo2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-red-200">Foo1Layout</div>
      {children}
    </section>
  );
}
