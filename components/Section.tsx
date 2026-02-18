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
    <section className="py-14">
      <Container>
        {eyebrow && (
          <div className="text-xs tracking-[0.22em] text-gold uppercase">{eyebrow}</div>
        )}
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}
