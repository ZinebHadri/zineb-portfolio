
import Image from "next/image";
import Link from "next/link";

const stack = [
  "Python",
  "Qwen2.5",
  "Hugging Face Transformers",
  "LangGraph",
  "FastAPI",
  "Streamlit",
  "Pandas",
  "NumPy",
  "scikit-learn",
  "Pydantic",
  "Pytest",
  "Docker",
];

const workflow = [
  {
    title: "Input & Precheck",
    detail:
      "A natural-language business question enters through the FastAPI precheck.",
  },
  {
    title: "Routing & Planning",
    detail:
      "Qwen2.5 routes the question, while a hybrid planner selects single-step or multi-step analytics operations.",
  },
  {
    title: "LangGraph Orchestration",
    detail:
      "LangGraph coordinates deterministic Python analytics tools instead of asking the LLM to calculate business metrics.",
  },
  {
    title: "Grounded Answer Generation",
    detail:
      "The local LLM translates numerical tool outputs into readable business explanations.",
  },
  {
    title: "Verification & Fallback",
    detail:
      "Numerical grounding and quality verifiers check the response. A deterministic fallback is available when verification fails.",
  },
];

const benchmark = [
  { value: "20/20", label: "Benchmark queries completed" },
  {
    value: "100%",
    label: "Final answers passed internal verification",
  },
  { value: "85%", label: "Exact plan match" },
  { value: "85%", label: "Exact tool-selection match" },
  { value: "0", label: "Runtime errors" },
  { value: "17", label: "Automated tests passing" },
];

const changes = [
  { label: "Revenue change", value: "-25.03%" },
  { label: "Orders", value: "-14.31%" },
  { label: "Customers", value: "-12.11%" },
  { label: "Quantity", value: "-18.23%" },
  { label: "Average order value", value: "-12.51%" },
];

const additionalExamples = [
  {
    heading: "September 2011 Performance",
    items: [
      "Revenue: 1,056,435.19",
      "Orders: 1,837",
      "Customers: 1,266",
      "Average order value: 575.09",
    ],
  },
  {
    heading: "April 2011 Returns",
    items: [
      "Return transactions: 426",
      "Returned units: 23,078",
      "Return value: 44,601.50",
    ],
  },
  {
    heading: "Customer Contribution · March to April",
    items: [
      "Total revenue change: -179,246.77",
      "Largest customer decline: 14646 (-18,485.84)",
      "Top 10 declines combined: -89,993.47",
    ],
  },
];

const systemFlow = [
  "User Question",
  "FastAPI Precheck",
  "Qwen Router",
  "Hybrid Planner",
  "LangGraph",
  "Deterministic Analytics",
  "LLM Generation",
  "Numerical Verification",
  "Quality Verification",
  "Verified Answer / Safe Fallback",
];

export default function AgenticDecisionCopilotPage() {
  return (
    <main className="min-h-screen bg-[#FCF5F3] text-[#493442]">

      {/* NAVIGATION */}
      <header className="border-b border-[#DFC8CE] bg-[#FCF5F3]">
        <nav
          aria-label="Project navigation"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5"
        >
          <Link
            href="/"
            className="text-xl font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985D72]"
          >
            Zineb{" "}
            <span className="text-[#985D72]">
              Hadri
            </span>
          </Link>

          <Link
            href="/#projects"
            className="text-sm font-medium text-[#874E65] hover:underline"
          >
            Back to Projects
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-20">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#985D72]">
          Featured Project · Agentic AI / Analytics
        </p>

        <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          Agentic AI{" "}
          <span className="text-[#985D72]">
            Decision Copilot
          </span>
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#66515D]">
          An agentic business analytics copilot combining
          Qwen2.5, LangGraph, deterministic Python tools
          and answer verification to deliver grounded
          business insights.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/ZinebHadri/agentic-ai-decision-copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#985D72] px-6 py-3 font-semibold text-white transition hover:bg-[#80475D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985D72]"
          >
            View Source Code on GitHub
          </a>

          <Link
            href="/#projects"
            className="inline-flex items-center rounded-xl border border-[#CBA8B1] px-6 py-3 font-semibold text-[#493442] transition hover:border-[#985D72]"
          >
            Back to Projects
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-[#D8A7AD] bg-[#F4E4E8] px-3 py-2 text-xs font-medium text-[#74465A]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* APPLICATION SCREENSHOTS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
          Real Application
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Inside Decision Copilot
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-[#66515D]">
          Screenshots of the actual Streamlit application,
          including the main workspace, natural-language
          question interface and system architecture.
        </p>

        {/* MAIN SCREENSHOT */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white shadow-sm">
          <Image
            src="/projects/agentic-decision-copilot/overview.png"
            alt="Decision Copilot home screen with agentic analytics features"
            width={1831}
            height={831}
            sizes="(max-width: 768px) 100vw, 90vw"
            className="h-auto w-full"
            priority
          />

          <figcaption className="px-5 py-4 text-sm text-[#66515D]">
            Decision Copilot workspace — hybrid routing,
            agentic planning, analytics tools and verification.
          </figcaption>
        </figure>

        {/* OTHER SCREENSHOTS */}
        <div className="mt-7 grid gap-7 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white shadow-sm">
            <Image
              src="/projects/agentic-decision-copilot/ask-copilot.png"
              alt="Natural-language question interface"
              width={1831}
              height={831}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />

            <figcaption className="px-5 py-4 text-sm text-[#66515D]">
              Ask Decision Copilot — natural-language
              business analytics questions.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white shadow-sm">
            <Image
              src="/projects/agentic-decision-copilot/architecture.png"
              alt="Agentic AI system architecture"
              width={1771}
              height={831}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />

            <figcaption className="px-5 py-4 text-sm text-[#66515D]">
              Architecture: LLM Router, Hybrid Planner,
              LangGraph, Analytics Tools, Verification
              and Safe Fallback.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CHALLENGE AND SOLUTION */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
        <article className="rounded-2xl border border-[#DFC8CE] bg-white p-7 md:p-9">
          <h2 className="text-2xl font-semibold">
            The Challenge
          </h2>

          <p className="mt-4 leading-8 text-[#66515D]">
            Business questions frequently require several
            calculations across revenue, customers, orders,
            returns and anomalies. Language models can
            introduce numerical mistakes when they attempt
            to calculate business metrics directly.
          </p>
        </article>

        <article className="rounded-2xl border border-[#DFC8CE] bg-white p-7 md:p-9">
          <h2 className="text-2xl font-semibold">
            My Solution
          </h2>

          <p className="mt-4 leading-8 text-[#66515D]">
            I built an agentic system that routes business
            questions, creates execution plans and calls
            deterministic Python analytics functions.
            LangGraph orchestrates the workflow while
            numerical and quality verifiers review
            the generated answers.
          </p>
        </article>
      </section>

      {/* WORKFLOW */}
      <section className="border-y border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
            Under the Hood
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Architecture & Agentic Workflow
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#66515D]">
            The system combines local LLM reasoning
            with deterministic analytics, structured
            tool execution and numerical verification.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {workflow.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[#DFC8CE] bg-white p-7"
              >
                <span className="text-sm font-bold text-[#985D72]">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-[#66515D]">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#DFC8CE] bg-white p-6">
            <h3 className="text-xl font-semibold">
              System Flow
            </h3>

            <ol className="mt-5 flex flex-wrap items-center gap-2">
              {systemFlow.map((step, index) => (
                <li
                  key={step}
                  className="rounded-lg border border-[#D8A7AD] bg-[#F4E4E8] px-3 py-2 text-sm font-medium text-[#493442]"
                >
                  {index + 1}. {step}
                </li>
              ))}
            </ol>

            <p className="mt-4 text-sm leading-7 text-[#715B68]">
              Safe fallback is conditional: it is used
              when verification does not support returning
              a generated answer.
            </p>
          </div>
        </div>
      </section>

      {/* REAL ANALYTICS EXAMPLE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
          Multi-Step Analytics
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          A Grounded Business Analysis
        </h2>

        <div className="mt-8 rounded-2xl border border-[#DFC8CE] bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#985D72]">
            Validated Question
          </p>

          <blockquote className="mt-3 border-l-4 border-[#D8A7AD] pl-5 text-lg font-medium leading-8">
            Why did revenue fall from March 2011 to
            April 2011, and was April unusually weak?
          </blockquote>

          <p className="mt-5 text-sm text-[#715B68]">
            Selected plan:{" "}
            <strong className="text-[#493442]">
              revenue_change → anomaly_analysis
            </strong>
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {changes.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#E8D2D7] bg-[#FCF5F3] p-4"
              >
                <p className="text-sm text-[#715B68]">
                  {item.label}
                </p>

                <p className="mt-2 text-2xl font-bold text-[#884C62]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "April Revenue",
                value: "536,968.49",
              },
              {
                label: "Revenue Z-score",
                value: "-1.08",
              },
              {
                label: "Anomaly Classification",
                value: "Normal",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-[#F4E4E8] p-4"
              >
                <p className="text-sm text-[#715B68]">
                  {item.label}
                </p>

                <p className="mt-2 text-xl font-bold text-[#493442]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-[#66515D]">
            The deterministic tools calculated these
            metrics. In this validated example,
            revenue declined while April was classified
            as normal by the anomaly detection process.
          </p>
        </div>
      </section>

      {/* VERIFICATION */}
      <section className="border-y border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
            Engineering Quality
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Verification, Tools & Fallback
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Deterministic Analytics",
                description:
                  "Revenue changes, customer contributions, returns and anomaly detection are computed by Python functions, not by the LLM.",
              },
              {
                title: "Verified Answer Mode",
                description:
                  "Numerical grounding and quality checks validate generated explanations against deterministic tool outputs.",
              },
              {
                title: "Safe Fallback",
                description:
                  "When answer verification fails, the workflow can return a deterministic grounded result instead of an unsupported claim.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#DFC8CE] bg-white p-7"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#66515D]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 leading-8 text-[#66515D]">
            Automated tests cover planning, multi-step
            analysis, numerical verification, quality
            verification and fallback behavior.
            The application uses FastAPI, Streamlit,
            Docker and Pytest.
          </p>
        </div>
      </section>

      {/* BENCHMARK */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
          Measured Engineering Outcomes
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Benchmark Results
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-[#66515D]">
          Evaluation on 20 benchmark queries,
          supported by automated tests and
          the system&apos;s internal verification layer.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benchmark.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-[#DFC8CE] bg-white p-6"
            >
              <p className="text-3xl font-bold text-[#884C62]">
                {item.value}
              </p>

              <p className="mt-3 text-sm leading-6 text-[#66515D]">
                {item.label}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-[#715B68]">
          100% of final benchmark answers passed
          the project&apos;s own verification layer.
          This does not mean 100% factual accuracy
          or guaranteed performance on unseen data.
        </p>
      </section>

      {/* ADDITIONAL RESULTS */}
      <section className="border-y border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
            Validated Outputs
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Business Analytics Examples
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {additionalExamples.map((example) => (
              <article
                key={example.heading}
                className="rounded-2xl border border-[#DFC8CE] bg-white p-7"
              >
                <h3 className="text-xl font-semibold">
                  {example.heading}
                </h3>

                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-[#66515D]">
                  {example.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#715B68]">
            Dataset: UCI Online Retail ·
            541,909 raw rows ·
            524,878 valid sales rows after preprocessing.
          </p>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          Scope & Limitations
        </h2>

        <ul className="mt-6 max-w-4xl list-disc space-y-4 pl-6 leading-8 text-[#66515D]">
          <li>
            The benchmark includes only 20 questions
            and does not establish accuracy on unseen
            business queries.
          </li>

          <li>
            Exact plan and tool-selection matches were
            85%, leaving room to improve routing
            and planning consistency.
          </li>

          <li>
            The verification layer checks answers
            against project rules and deterministic
            tool outputs, not independent ground truth
            for every possible question.
          </li>

          <li>
            The demonstrated analyses use UCI Online
            Retail data, not a production business system.
          </li>
        </ul>

        <a
          href="https://github.com/ZinebHadri/agentic-ai-decision-copilot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-xl bg-[#985D72] px-6 py-3 font-semibold text-white transition hover:bg-[#80475D]"
        >
          Explore the GitHub Repository
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#DFC8CE] px-6 py-8 text-center text-sm text-[#78636E]">
        <p>© 2026 Zineb Hadri</p>

        <Link
          href="/#projects"
          className="mt-3 inline-block font-medium text-[#874E65] hover:underline"
        >
          Back to Portfolio
        </Link>
      </footer>
    </main>
  );
}
