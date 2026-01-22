export default function HomePage() {
  return (
    <div className="space-y-50">
      {/* Hero */}
      <section className="pt-2">
        <div className="pill">6-week pilot • £0-200 micro-startups • student led</div>

        <h1 className="heading mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Launch a real startup while you’re still <br className="hidden sm:block" />
          at uni or academy.
        </h1>

        <p className="muted mt-4 max-w-2xl text-base leading-relaxed">
          The Micro-Startup Incubator is a practical, access-first programme helping students build
          small income generating businesses with minimal upfront costs.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/apply" className="btn-primary">
            Apply for the pilot
          </a>
          <a href="/programme" className="btn-secondary">
            See the 6 week plan
          </a>
        </div>
      </section>


      {/* Big card */}
      <section className="card-lg">
        <h2 className="heading text-base font-semibold">What counts as a “micro-startup” here?</h2>

        <p className="muted mt-3 max-w-3xl text-sm leading-relaxed">
          Think service-based and digital: tutoring, editing, design, social media services, niche
          research, local business support, simple digital products—things you can validate quickly
          without big risk.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Offer + pricing",
            "Simple landing page",
            "Ethical outreach",
            "Customer conversations",
            "Delivery systems",
            "Proof of work",
          ].map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Goals */}
      <section className="space-y-3">
        <h2 className="heading text-xl font-semibold">Pilot goals</h2>
        <ul className="muted list-disc space-y-2 pl-5 text-sm">
          <li>10 students complete a structured 6 week programme with the top 3 startups getting funding.</li>
          <li> 75% attempt real outreach and customer conversations.</li>
        </ul>
      </section>
    </div>
  );
}
