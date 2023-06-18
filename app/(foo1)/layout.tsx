export default function Foo1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-blue-200">Foo1Layout</div>
      {children}
    </section>
  );
}
