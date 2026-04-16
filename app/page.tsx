export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p
          className="font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--chartreuse)" }}
        >
          Phase 1 Complete
        </p>
        <h1
          className="font-display text-5xl font-bold"
          style={{ color: "var(--white)" }}
        >
          LUXE
        </h1>
        <p className="mt-3 text-sm" style={{ color: "#6b7a8d" }}>
          Project initialized. Awaiting Phase 2.
        </p>
      </div>
    </main>
  );
}