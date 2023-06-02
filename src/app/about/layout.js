export default function AboutLayout({ children }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        {children}
      </section>
    );
  }