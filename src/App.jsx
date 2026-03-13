import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    campaignType: "Advocacy organization",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("sent");
        setFormData({ name: "", organization: "", email: "", campaignType: "Advocacy organization", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const nav = [
    { label: "Solutions", href: "#solutions" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const pillars = [
    {
      title: "Mobilize supporters",
      body:
        "Launch issue-driven campaigns that give constituents, members, and supporters a clear path to participate.",
    },
    {
      title: "Coordinate outreach",
      body:
        "Organize emails, letters, sign-ons, and public pressure around a focused message and target audience.",
    },
    {
      title: "Influence decision-makers",
      body:
        "Help public affairs teams and advocacy groups move concerns into structured policy conversations.",
    },
  ];

  const solutions = [
    "Advocacy organizations",
    "Industry associations",
    "Government relations teams",
    "Community coalitions",
    "Issue and referendum campaigns",
  ];

  const features = [
    "Campaign launch pages",
    "Constituent action flows",
    "Decision-maker targeting",
    "Email and letter outreach",
    "Petition and pledge collection",
    "Supporter segmentation",
    "Analytics and reporting",
    "AI-assisted message drafting",
  ];

  const stats = [
    { value: "250+", label: "campaigns launched" },
    { value: "120K+", label: "constituent actions supported" },
    { value: "500+", label: "decision-makers reached" },
    { value: "24/7", label: "campaign readiness" },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Frame the issue",
      body:
        "Define the campaign, the audience, and the policy objective in a format supporters can understand quickly.",
    },
    {
      step: "02",
      title: "Activate supporters",
      body:
        "Route constituents and aligned organizations into coordinated outreach flows with clear calls to action.",
    },
    {
      step: "03",
      title: "Track momentum",
      body:
        "Present participation, activity volume, and campaign traction in a format stakeholders can monitor easily.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7ff] text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_26%),linear-gradient(to_bottom,#fbfcff,transparent)]" />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-4 font-semibold tracking-tight text-slate-950">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_16px_42px_rgba(99,102,241,0.14)] ring-1 ring-indigo-100">
              <svg viewBox="0 0 160 160" className="h-8 w-8" fill="none" aria-hidden="true">
                <path d="M80 38c-24.301 0-44 19.699-44 44" stroke="#CBD5E1" strokeWidth="10" strokeLinecap="round" opacity="0.95" />
                <path d="M80 24c-32.032 0-58 25.968-58 58" stroke="#A5B4FC" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
                <path d="M80 52c-16.569 0-30 13.431-30 30" stroke="#E0E7FF" strokeWidth="10" strokeLinecap="round" />
                <circle cx="80" cy="82" r="14" fill="#6366F1" />
                <circle cx="80" cy="82" r="22" stroke="#C4B5FD" strokeOpacity="0.5" strokeWidth="6" />
                <path d="M94 68l22-22" stroke="#A78BFA" strokeWidth="8" strokeLinecap="round" />
                <circle cx="120" cy="42" r="8" fill="#8B5CF6" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold leading-none text-slate-950">ImpactOutreach</div>
              <div className="mt-1 text-[9px] italic font-medium uppercase tracking-[0.18em] text-slate-500">
                Voices organized for influence
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[linear-gradient(135deg,#6366F1,#8B5CF6)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.22)] transition hover:opacity-95"
            >
              Book a demo
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur">
                Built for advocacy teams, associations, and public affairs campaigns
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Turn public voices into coordinated action.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                ImpactOutreach helps organizations, campaigns, and advocacy teams coordinate constituent engagement, structure outreach, and build momentum around the issues that matter.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Book a demo
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-full border border-indigo-100 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-slate-950"
                >
                  Learn more
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] border border-white/80 bg-white/80 p-4 shadow-[0_14px_36px_rgba(99,102,241,0.08)] backdrop-blur">
                    <div className="text-2xl font-semibold text-slate-950">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_26px_75px_rgba(99,102,241,0.12)] backdrop-blur-2xl">
                <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,#ffffff,rgba(244,247,255,0.96))] p-6 ring-1 ring-indigo-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-slate-500">Example campaign</div>
                      <div className="mt-2 text-2xl font-semibold text-slate-950">Rural Healthcare Access</div>
                    </div>
                    <div className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
                      Live momentum
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Supporter actions</div>
                      <div className="mt-2 text-3xl font-semibold text-slate-950">27,540</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Decision-makers targeted</div>
                      <div className="mt-2 text-3xl font-semibold text-slate-950">84</div>
                    </div>
                  </div>
                  <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Weekly campaign activity</div>
                        <div className="mt-2 text-sm text-slate-500">Email, pledge, and public action volume</div>
                      </div>
                      <div className="text-sm text-violet-600">+18.4%</div>
                    </div>
                    <div className="mt-5 flex h-32 items-end gap-2">
                      {[28, 42, 37, 54, 68, 62, 84, 79].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-xl bg-[linear-gradient(to_top,#6366F1,#8B5CF6)]" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Issue pages", "Rapid campaign setup"],
                    ["Constituent flows", "Structured public action"],
                    ["Reporting", "Clear campaign visibility"],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-2xl border border-indigo-50 bg-white/70 p-4">
                      <div className="text-sm font-semibold text-slate-900">{title}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-500">{body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_12px_35px_rgba(99,102,241,0.08)] backdrop-blur">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Core capability</div>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Solutions</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built for modern advocacy and public affairs teams.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether the objective is public pressure, stakeholder coordination, or campaign visibility, ImpactOutreach gives organizations a polished advocacy front end.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {solutions.map((solution) => (
              <div key={solution} className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_12px_35px_rgba(99,102,241,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(99,102,241,0.10)] backdrop-blur">
                <div className="text-base font-semibold text-slate-900">{solution}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">How it works</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A simple structure for issue-driven outreach.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The first version is built to communicate capability clearly, support stakeholder conversations, and create a credible front door for campaigns.
              </p>
            </div>
            <div className="grid gap-5">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex gap-5 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_12px_35px_rgba(99,102,241,0.08)] backdrop-blur">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#6366F1,#8B5CF6)] text-sm font-semibold text-white shadow-[0_8px_20px_rgba(99,102,241,0.18)]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Features</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Presentation-ready campaign infrastructure.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Position the platform as organized, strategic, and capable of supporting advocacy execution from intake to reporting.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature} className="rounded-[1.5rem] border border-white/80 bg-white/80 p-5 shadow-[0_12px_35px_rgba(99,102,241,0.08)] transition hover:-translate-y-1 backdrop-blur">
                  <div className="text-base font-semibold text-slate-900">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_14px_45px_rgba(99,102,241,0.10)] backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Reporting preview</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Clear campaign visibility for stakeholders.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Show activity levels, participation trends, and campaign traction in a format suited to operators, clients, and partners.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Weekly actions", "8,420"],
                  ["Conversion rate", "14.8%"],
                  ["Policy targets", "36"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-5">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
                    <div className="mt-2 text-3xl font-semibold text-slate-950">{value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-indigo-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Action trend</div>
                    <div className="mt-1 text-sm text-slate-500">Campaign activity over time</div>
                  </div>
                  <div className="text-sm font-semibold text-violet-600">+22%</div>
                </div>
                <div className="mt-6 flex h-40 items-end gap-3">
                  {[18, 26, 30, 24, 36, 48, 52, 63, 58, 71].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-2xl bg-[linear-gradient(to_top,#6366F1,#8B5CF6)]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div id="about" className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_14px_45px_rgba(99,102,241,0.10)] backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">About</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Canadian-focused advocacy infrastructure.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                ImpactOutreach is designed for modern advocacy, campaign strategy, and public affairs execution. The platform helps organizations create a credible public-facing presence while preparing the foundation for deeper workflow automation.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Built for policy conversations, constituent engagement, and structured outreach.",
                  "Designed to support advocacy teams, associations, campaigns, and coalition builders.",
                  "Positioned to layer AI and automation into campaign operations over time.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-indigo-50 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Ready to launch an advocacy presence that looks established from day one?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Book a demo, discuss a campaign, or explore how ImpactOutreach can support constituent mobilization and issue-based outreach.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-600">
                <div>General inquiries: team@impactoutreach.ca</div>
                <div>Campaign intake: campaigns@impactoutreach.ca</div>
                <div>Based in Canada. Built for issue-driven public engagement.</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_14px_45px_rgba(99,102,241,0.10)] backdrop-blur">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                  <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-300" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Organization</span>
                  <input value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-300" placeholder="Organization" />
                </label>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-300" placeholder="you@organization.ca" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Campaign type</span>
                  <select value={formData.campaignType} onChange={(e) => setFormData({ ...formData, campaignType: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-300">
                    <option>Advocacy organization</option>
                    <option>Association campaign</option>
                    <option>Public affairs / GR</option>
                    <option>Community coalition</option>
                    <option>Issue campaign</option>
                  </select>
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-slate-700">What are you trying to influence?</span>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-300" placeholder="Describe the issue, audience, and campaign objective." />
              </label>
              <div className="mt-6 flex items-end justify-end">
                {formStatus === "sent" ? (
                  <p className="text-sm font-medium text-green-600">Message sent — we'll be in touch.</p>
                ) : formStatus === "error" ? (
                  <div className="flex items-center gap-4">
                    <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
                    <button type="submit" className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#6366F1,#8B5CF6)] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.22)] transition hover:opacity-95">
                      Retry
                    </button>
                  </div>
                ) : (
                  <button type="submit" disabled={formStatus === "sending"} className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#6366F1,#8B5CF6)] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.22)] transition hover:opacity-95 disabled:opacity-60">
                    {formStatus === "sending" ? "Sending..." : "Talk to us"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}