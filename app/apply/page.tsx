"use client";

import { useMemo, useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  course: string;
  year: string;
  idea: string;
  goal: string;
};

const initial: FormState = {
  name: "",
  email: "",
  course: "",
  year: "",
  idea: "",
  goal: "",
};

export default function ApplyPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const toEmail = process.env.NEXT_PUBLIC_APPLICATION_EMAIL ?? "";

  const isValid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.email.includes("@") &&
      form.course.trim().length >= 2 &&
      form.year.trim().length >= 1 &&
      form.goal.trim().length >= 10
    );
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid) return;

    const subject = encodeURIComponent("Micro-Startup Incubator — Pilot Application");
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Course: ${form.course}`,
        `Year: ${form.year}`,
        "",
        "Idea (optional):",
        form.idea || "-",
        "",
        "Goal for the 6 weeks:",
        form.goal,
      ].join("\n")
    );

    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="heading text-4xl font-semibold tracking-tight">Apply to the 6-week pilot</h1>
        <p className="muted max-w-2xl">
          Small cohort (10–15). If you’re willing to do weekly tasks and talk to real people, you’re a good fit.
        </p>
      </section>

      <section className="card">
        {submitted && (
          <div className="mb-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-100">
            If your email client opened, you’re set. If it didn’t, copy your answers and send them manually.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1">
              <span className="text-sm font-medium heading">Name</span>
              <input
                className="input"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label className="space-y-1">
              <span className="text-sm font-medium heading">Email</span>
              <input
                className="input"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@university.ac.uk"
              />
            </label>

            <label className="space-y-1">
              <span className="text-sm font-medium heading">Course</span>
              <input
                className="input"
                value={form.course}
                onChange={(e) => update("course", e.target.value)}
                placeholder="e.g., Business Management"
              />
            </label>

            <label className="space-y-1">
              <span className="text-sm font-medium heading">Year</span>
              <input
                className="input"
                value={form.year}
                onChange={(e) => update("year", e.target.value)}
                placeholder="e.g., 2nd year"
              />
            </label>
          </div>

          <label className="space-y-1">
            <span className="text-sm font-medium heading">Idea (optional)</span>
            <textarea
              className="input min-h-[90px]"
              value={form.idea}
              onChange={(e) => update("idea", e.target.value)}
              placeholder="2–5 lines is enough."
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium heading">Goal for the 6 weeks (required)</span>
            <textarea
              className="input min-h-[110px]"
              value={form.goal}
              onChange={(e) => update("goal", e.target.value)}
              placeholder="Example: validate an offer and get my first paying customer by week 6."
            />
          </label>

          <button type="submit" disabled={!isValid} className="btn-primary px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50">
            Submit application
          </button>

          <p className="muted text-xs">This opens your email app with a pre-filled message.</p>
        </form>
      </section>
    </div>
  );
}
