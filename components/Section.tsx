import Container from "./Container";

export default function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 reveal-up">
      <Container>
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.24em] text-cyan2">{eyebrow}</div>
        )}
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-[0.03em]">{title}</h2>
        <div className="mt-7">{children}</div>
      </Container>
    </section>
  );
}
