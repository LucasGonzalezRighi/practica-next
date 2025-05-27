// lrc crea de forma automatica el layout

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-4xl text-purple-400">Padre general</h1>
      {children}
    </div>
  );
}