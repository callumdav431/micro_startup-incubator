const weeks = [
  {
    week: "Week 1",
    title: "Pick a money-making problem (£0 mindset)",
    bullets: [
      "Choose an idea constrained by time + cost (no excuses, just constraints)",
      "Define target user, pain point, and what “success” looks like",
      "Set up a simple landing page + tracking sheet",
    ],
  },
  {
    week: "Week 2",
    title: "Design the offer + price it properly",
    bullets: [
      "Turn skills into an offer people can actually buy",
      "Create 2–3 pricing options (simple, clear, fair)",
      "Write a short pitch message that doesn’t feel gross",
    ],
  },
  {
    week: "Week 3",
    title: "Ethical sales + outreach sprint",
    bullets: [
      "Learn a repeatable outreach method (DM/email/in-person)",
      "Roleplay and refine messaging",
      "Run the first outreach sprint and track results",
    ],
  },
  {
    week: "Week 4",
    title: "Customer conversations + first commitments",
    bullets: [
      "Turn interest into calls/chats",
      "Handle objections without being pushy",
      "Aim for first sale/invoice or paid commitment",
    ],
  },
  {
    week: "Week 5",
    title: "Deliver well + build simple operations",
    bullets: [
      "Create delivery templates/checklists",
      "Set up basic admin: scheduling, invoicing, follow-up",
      "Collect testimonials and proof-of-work",
    ],
  },
  {
    week: "Week 6",
    title: "Review, iterate, and plan your next 30 days",
    bullets: [
      "What worked / what didn’t (based on data, not feelings)",
      "Improve the offer and outreach plan",
      "Build a 30-day action plan to continue after the pilot",
    ],
  },
];

export default function ProgrammePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="heading text-4xl font-semibold tracking-tight">The 6-week pilot programme</h1>
        <p className="muted max-w-3xl">
          This is a practical incubator for students who want results. We keep it simple: build an
          offer, talk to real people, make your first sale (or learn exactly why not), and leave with
          a repeatable system.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { t: "Time commitment", b: "~2 hours/week live + ~2–3 hours/week doing outreach and delivery tasks." },
            { t: "Cohort size", b: "10–15 students (small enough for support, big enough for momentum)." },
            { t: "Outcomes", b: "Outreach attempted, customer conversations, first sale/invoice, portfolio proof." },
          ].map((x) => (
            <div key={x.t} className="card p-5">
              <h3 className="heading font-semibold">{x.t}</h3>
              <p className="muted mt-2 text-sm">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading text-xl font-semibold">Weekly outline</h2>
        <div className="space-y-4">
          {weeks.map((w) => (
            <div key={w.week} className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="muted text-sm font-medium">{w.week}</p>
                <h3 className="heading text-lg font-semibold">{w.title}</h3>
              </div>
              <ul className="muted mt-3 list-inside list-disc space-y-1 text-sm">
                {w.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card-lg">
        <h2 className="heading text-xl font-semibold">What you get</h2>
        <ul className="muted mt-3 list-inside list-disc space-y-2 text-sm">
          <li>Templates: outreach scripts, pricing sheets, delivery checklists.</li>
          <li>A simple landing page structure you can reuse for any offer.</li>
          <li>Weekly accountability and feedback.</li>
          <li>Proof of work you can show employers (real-world initiative).</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/apply" className="btn-primary px-5 py-3">
            Apply for the pilot
          </a>
          <a href="/about" className="btn-secondary px-5 py-3">
            About the project
          </a>
        </div>
      </section>
    </div>
  );
}
