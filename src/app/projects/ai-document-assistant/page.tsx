
import Image from "next/image";
import Link from "next/link";

const githubUrl =
  "https://github.com/ZinebHadri/rag-document-assistant";

const technologies = [
  "Python",
  "PyPDF",
  "SentenceTransformers",
  "FAISS",
  "BM25",
  "Qwen2.5",
  "Hugging Face",
  "LangGraph",
  "FastAPI",
  "Streamlit",
  "Docker",
  "Pytest",
];

const metrics = [
  {
    value: "91.7%",
    label: "Top-1 Retrieval",
  },
  {
    value: "100%",
    label: "Top-3 Retrieval",
  },
  {
    value: "0.958",
    label: "Mean Reciprocal Rank",
  },
];

const stages = [
  {
    number: "01",
    title: "Document Ingestion",
    description:
      "PDF documents are processed using PyPDF. Text is divided into smaller chunks and converted into vector embeddings with SentenceTransformers.",
  },
  {
    number: "02",
    title: "Hybrid Retrieval",
    description:
      "FAISS semantic search and BM25 lexical search are combined to retrieve and rank relevant document passages.",
  },
  {
    number: "03",
    title: "Relevance Grading",
    description:
      "A three-zone relevance system rejects low-confidence passages, accepts strong matches and uses Qwen to evaluate ambiguous cases.",
  },
  {
    number: "04",
    title: "Agentic Query Rewriting",
    description:
      "When retrieval quality is insufficient, LangGraph orchestrates query rewriting and another retrieval attempt.",
  },
  {
    number: "05",
    title: "Grounded Answer Generation",
    description:
      "Qwen2.5 generates answers using the selected document context. The application provides source references or a safe fallback when evidence is insufficient.",
  },
];

const architecture = [
  "Streamlit Frontend",
  "FastAPI Backend",
  "LangGraph Agent",
  "FAISS + BM25",
  "Relevance Grader",
  "Query Rewriting",
  "Qwen2.5",
  "Verified Answer / Safe Fallback",
];

const screenshots = [
  {
    src: "/projects/agentic-rag/knowledge-base.png",
    title: "Knowledge Base",
    description:
      "Upload and manage PDF documents used by the assistant.",
  },
  {
    src: "/projects/agentic-rag/assistant.png",
    title: "AI Assistant",
    description:
      "Natural-language question-answering interface.",
  },
  {
    src: "/projects/agentic-rag/workflow.png",
    title: "Document Processing",
    description:
      "PDF extraction, text chunking and vector embeddings.",
  },
  {
    src: "/projects/agentic-rag/hybrid-retrieval.png",
    title: "Hybrid Retrieval",
    description:
      "Combining semantic FAISS search with lexical BM25.",
  },
  {
    src: "/projects/agentic-rag/agentic-decisions.png",
    title: "Agentic Decision Layer",
    description:
      "Relevance grading, query rewriting and safe fallback.",
  },
];

export default function AgenticRagProjectPage() {
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
            ← Back to Projects
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#985D72]">
          Featured Project · Generative AI / Agents
        </p>

        <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          Agentic RAG{" "}
          <span className="text-[#985D72]">
            Document Assistant
          </span>
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#66515D]">
          An intelligent PDF question-answering assistant
          combining hybrid retrieval, relevance grading,
          agentic query rewriting and source-grounded answers.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#985D72] px-6 py-3 font-semibold text-white transition hover:bg-[#80475D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985D72]"
          >
            View Source Code on GitHub
          </a>

          <Link
            href="/#projects"
            className="inline-flex items-center rounded-xl border border-[#CBA8B1] px-6 py-3 font-semibold text-[#493442] transition hover:border-[#985D72] hover:bg-[#F5E6E6]"
          >
            Back to Projects
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-[#D8A7AD] bg-[#F4E4E8] px-3 py-2 text-xs font-medium text-[#74465A]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* MAIN SCREENSHOT */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <figure>
          <div className="overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white shadow-xl">
            <Image
              src="/projects/agentic-rag/workspace.png"
              alt="Agentic RAG Streamlit workspace showing document statistics and system status"
              width={1792}
              height={856}
              sizes="(max-width: 768px) 100vw, 90vw"
              className="h-auto w-full"
              priority
            />
          </div>

          <figcaption className="mt-3 text-sm text-[#715B68]">
            Real Streamlit application screenshot showing
            5 indexed documents and 495 text chunks.
          </figcaption>
        </figure>
      </section>

      {/* CHALLENGE AND SOLUTION */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
        <article className="rounded-2xl border border-[#DFC8CE] bg-white p-7 md:p-9">
          <h2 className="text-2xl font-semibold">
            The Challenge
          </h2>

          <p className="mt-4 leading-8 text-[#66515D]">
            Finding reliable information across lengthy
            technical PDF documents can be difficult.
            Keyword-only searches may miss relevant passages,
            while unconstrained language models can generate
            answers that are not supported by the source
            documents.
          </p>
        </article>

        <article className="rounded-2xl border border-[#DFC8CE] bg-white p-7 md:p-9">
          <h2 className="text-2xl font-semibold">
            My Solution
          </h2>

          <p className="mt-4 leading-8 text-[#66515D]">
            I developed a hybrid FAISS and BM25 retrieval
            engine combined with a LangGraph agent that
            evaluates passage relevance, rewrites weak queries
            and retries retrieval before generating
            source-grounded answers.
          </p>
        </article>
      </section>

      {/* EVALUATION RESULTS */}
      <section className="border-y border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
            Measured Retrieval Quality
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Evaluation Results
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#66515D]">
            Hybrid retrieval was evaluated using a validation
            set of 12 questions. The results below measure
            passage retrieval performance, not the overall
            accuracy of LLM-generated answers.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-[#D8A7AD] bg-white p-7"
              >
                <p className="text-4xl font-bold text-[#985D72] md:text-5xl">
                  {metric.value}
                </p>

                <p className="mt-3 text-sm font-medium text-[#66515D]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-[#715B68]">
            On this validation set, hybrid retrieval
            outperformed standalone FAISS and BM25.
            The evaluation sample contains only 12 questions.
          </p>
        </div>
      </section>

      {/* TECHNICAL WORKFLOW */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
          Under the Hood
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          From PDF to Grounded Answer
        </h2>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {stages.map((stage) => (
            <article
              key={stage.number}
              className="rounded-2xl border border-[#DFC8CE] bg-white p-7"
            >
              <span className="text-sm font-semibold text-[#985D72]">
                STEP {stage.number}
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                {stage.title}
              </h3>

              <p className="mt-3 leading-7 text-[#66515D]">
                {stage.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-y border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
            System Design
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Architecture Overview
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#66515D]">
            The system combines document processing,
            hybrid retrieval and an agentic decision
            workflow orchestrated with LangGraph.
          </p>

          <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {architecture.map((step, index) => (
              <li
                key={step}
                className="rounded-xl border border-[#D8A7AD] bg-white p-5"
              >
                <span className="text-xs font-bold text-[#985D72]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-2 font-semibold text-[#493442]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
          Real Application Screenshots
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Inside the Workspace
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-[#66515D]">
          A closer look at the document management,
          retrieval and agentic components of
          the Streamlit application.
        </p>

        <div className="mt-9 grid gap-7 md:grid-cols-2">
          {screenshots.map((screenshot) => (
            <figure
              key={screenshot.src}
              className="overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.title}
                width={1792}
                height={856}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />

              <figcaption className="px-5 py-4">
                <p className="font-semibold text-[#493442]">
                  {screenshot.title}
                </p>

                <p className="mt-1 text-sm text-[#715B68]">
                  {screenshot.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* QUESTION ANSWERING */}
      <section className="border-y border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
            Application Evidence
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Question Answering & Source References
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#66515D]">
            The assistant enables users to ask questions
            about their uploaded documents and retrieve
            relevant passages with document references.
          </p>

          <figure className="mt-8 overflow-hidden rounded-2xl border border-[#D8A7AD] bg-white">
            <Image
              src="/projects/agentic-rag/assistant.png"
              alt="Real Streamlit AI assistant interface"
              width={1792}
              height={856}
              sizes="(max-width: 768px) 100vw, 90vw"
              className="h-auto w-full"
            />

            <figcaption className="px-5 py-4 text-sm text-[#66515D]">
              Actual assistant interface. A documented
              question-answer example with cited source pages
              can be added after a verified test.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">
          Engineering Journey
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Project Evolution
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-[#66515D]">
          This project evolved from a classic RAG pipeline
          to evaluated hybrid retrieval, followed by an
          agentic workflow orchestrated with LangGraph.
          The system includes a FastAPI backend,
          a Streamlit frontend, Docker configuration
          and automated testing with Pytest.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Classic RAG",
            "Hybrid RAG",
            "Evaluated Retrieval",
            "Agentic RAG",
          ].map((stage, index) => (
            <div
              key={stage}
              className="rounded-xl border border-[#D8A7AD] bg-[#F4E4E8] p-5"
            >
              <span className="text-xs font-semibold text-[#985D72]">
                PHASE {index + 1}
              </span>

              <p className="mt-2 font-semibold text-[#493442]">
                {stage}
              </p>
            </div>
          ))}
        </div>
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
