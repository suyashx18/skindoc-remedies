import Script from "next/script";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome to SKIN DOCTOR</h1>
        <p className="mt-3 text-muted-foreground">
          Your site is deployed successfully. We'll add sections as components become available.
        </p>
      </section>
      <Script src="https://cdn.jotfor.ms/agent/embedjs/019932d81fb47bb69ca58304864789a8e076/embed.js" strategy="afterInteractive" />
    </main>
  );
}