import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <Container className="pt-40 pb-20">
      <div className="text-center">
        <p
          className="font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--chartreuse)" }}
        >
          Phase 2 Complete
        </p>
        <h1
          className="font-display text-6xl font-bold"
          style={{ color: "var(--white)" }}
        >
          LUXE
        </h1>
        <p className="mt-4 font-body text-sm" style={{ color: "#6b7a8d" }}>
          UI Foundation ready. Awaiting Phase 3.
        </p>
      </div>
    </Container>
  );
}