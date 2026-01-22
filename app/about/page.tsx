export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="heading text-4xl font-semibold tracking-tight">About the project</h1>
        <p className="muted max-w-3xl">
          The Micro-Startup Incubator is designed to make entrepreneurship realistic for students (all ages) who
          don’t have spare money to gamble. The focus is simple: build a small, legitimate offer,
          speak to real customers, and learn the skills that translate directly into employability or futher entrepnrenurial success.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="card">
          <h2 className="heading text-xl font-semibold">Why it matters</h2>
          <ul className="muted mt-3 list-inside list-disc space-y-2 text-sm">
            <li>Students want to start but lack capital and practical guidance.</li>
            <li>Similar programmes prioritise pitch decks over execution and real customers.</li>
            <li>This pilot removes barriers and builds confidence through action.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="heading text-xl font-semibold">What success looks like</h2>
          <ul className="muted mt-3 list-inside list-disc space-y-2 text-sm">
            <li>10 students complete the 6-week pilot.</li>
            <li>Strong participation in outreach and customer conversations.</li>
            <li>First sales/invoices or validated paid commitments.</li>
            <li>Clear next-step plans and proof-of-work for CVs.</li>
          </ul>
        </div>
      </section>

      <section className="card-lg">
        <h2 className="heading text-xl font-semibold">Funding and commitment</h2>
        <p className="muted mt-2 max-w-3xl text-sm">
          This project is being launched as a pilot and requires modest funding for delivery
          infrastructure, participant coordination, and programme materials. I am personally
          contributing <span className="font-medium text-foreground">£250 of my own savings</span> to demonstrate my belief and
          commitment as well as reducing reliance on external funding.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            {
              t: "Delivery infrastructure",
              b: "Reliable equipment + tools to run sessions, create resources, manage participants, and report outcomes.",
            },
            {
              t: "Programme development",
              b: "Templates, curriculum, workshop materials, and structured weekly tasks.",
            },
            {
              t: "Recruitment and outreach",
              b: "Getting the right students into the pilot and tracking measurable results.",
            },
          ].map((x) => (
            <div key={x.t} className="card p-4">
              <p className="heading text-sm font-semibold">{x.t}</p>
              <p className="muted mt-1 text-xs">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <a href="/programme" className="btn-secondary px-5 py-3">
          View the programme
        </a>
        <a href="/apply" className="btn-primary px-5 py-3">
          Apply to join the pilot
        </a>
      </section>
    </div>
  );
}
