import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/projects/agentic-rag/workspace.png", title: "Document intelligence workspace", detail: "Dashboard example — 5 indexed documents and 495 text chunks" },
  { src: "/projects/agentic-rag/knowledge-base.png", title: "Knowledge base", detail: "Upload and manage PDF documents" },
  { src: "/projects/agentic-rag/assistant.png", title: "AI assistant", detail: "Question-answering interface" },
  { src: "/projects/agentic-rag/workflow.png", title: "Processing pipeline", detail: "PDF extraction, chunking and embeddings" },
  { src: "/projects/agentic-rag/hybrid-retrieval.png", title: "Hybrid search", detail: "FAISS + BM25" },
  { src: "/projects/agentic-rag/agentic-decisions.png", title: "Agentic decision layer", detail: "Relevance grading, query rewriting and safe fallback" },
];

const stack = [
  "Python", "PyPDF", "SentenceTransformers", "FAISS", "BM25",
  "Qwen2.5", "Hugging Face", "LangGraph", "FastAPI", "Streamlit", "Docker", "Pytest",
];

const stages = [
  { step: "01", title: "Document ingestion", detail: "Extract PDF text with PyPDF, split it into chunks and generate embeddings with SentenceTransformers." },
  { step: "02", title: "Hybrid retrieval", detail: "Combine dense FAISS search and lexical BM25 retrieval to rank relevant passages." },
  { step: "03", title: "Relevance grading", detail: "Use three semantic-score zones: reject low scores, accept high scores, and let Qwen assess ambiguous cases." },
  { step: "04", title: "Query rewrite & retry", detail: "When retrieved passages are insufficient, LangGraph orchestrates query rewriting and another retrieval attempt." },
  { step: "05", title: "Grounded answer / fallback", detail: "Qwen2.5 generates an answer grounded in the selected context with source references, or returns a safe fallback when evidence is insufficient." },
];

export default function AgenticRagProjectPage() {
  return (
    <main className="min-h-screen bg-[#FCF5F3] text-[#493442]">
      <header className="border-b border-[#DFC8CE] bg-[#FCF5F3]">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="text-xl font-bold">Zineb <span className="text-[#985D72]">Hadri</span></Link>
          <Link href="/#projects" className="text-sm text-[#874E65] hover:text-[#493442]">← Back to projects</Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#985D72]">Featured project · Generative AI / Agents</p>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">Agentic RAG <span className="text-[#985D72]">Document Assistant</span></h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#66515D]">An intelligent PDF question-answering assistant combining hybrid retrieval, relevance grading, agentic query rewriting and source-grounded answers.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/ZinebHadri/rag-document-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#985D72] px-6 py-3 font-semibold text-white transition hover:bg-[#80475D]"
          >
            View Source Code on GitHub ↗
          </a>
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-xl border border-[#CBA8B1] px-6 py-3 font-semibold text-[#493442] transition hover:border-[#985D72]"
          >
            Back to Projects
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">{stack.map((tech) => <span key={tech} className="rounded-lg border border-[#D8A7AD] bg-[#F4E4E8] px-3 py-2 text-xs text-[#74465A]">{tech}</span>)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white shadow-2xl">
          <Image src="/projects/agentic-rag/workspace.png" alt="Screenshot of the Agentic RAG workspace" width={1792} height={856} className="h-auto w-full" priority />
        </div>
        <p className="mt-3 text-sm text-[#715B68]">Streamlit application screenshot showing 5 indexed documents and 495 text chunks in this example.</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
        <article className="rounded-2xl border border-[#DFC8CE] bg-white p-7 md:p-9">
          <h2 className="text-2xl font-semibold">The challenge</h2>
          <p className="mt-4 leading-8 text-[#66515D]">Finding reliable answers in lengthy PDFs can be challenging. Keyword-only search may miss equivalent phrasing, while unconstrained generation can produce answers unsupported by the documents.</p>
        </article>
        <article className="rounded-2xl border border-[#DFC8CE] bg-white p-7 md:p-9">
          <h2 className="text-2xl font-semibold">My solution</h2>
          <p className="mt-4 leading-8 text-[#66515D]">I built a hybrid FAISS + BM25 retrieval engine and a LangGraph workflow that grades passage relevance, rewrites weak queries, retries retrieval and falls back safely when sufficient evidence is unavailable.</p>
        </article>
      </section>

      <section className="border-y border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">Measured retrieval quality</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Evaluation results</h2>
          <p className="mt-4 max-w-3xl text-[#715B68]">Evaluation of <strong className="text-[#493442]">Hybrid Retrieval</strong> on a validation set of 12 questions. These metrics evaluate passage retrieval, not the accuracy of every LLM-generated answer.</p>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {[{ number: "91.7%", label: "Top-1 retrieval" }, { number: "100%", label: "Top-3 retrieval" }, { number: "0.958", label: "Mean Reciprocal Rank" }].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-[#D8A7AD] bg-white p-7">
                <p className="text-4xl font-bold text-[#985D72] md:text-5xl">{metric.number}</p>
                <p className="mt-3 text-sm text-[#66515D]">{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-[#715B68]">On this validation set, hybrid retrieval outperformed standalone FAISS and BM25. The sample is limited to 12 questions.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">Under the hood</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">From PDF to grounded answer</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {stages.map((item) => <article key={item.step} className="rounded-2xl border border-[#DFC8CE] bg-white p-7"><span className="font-semibold text-[#985D72]">STEP {item.step}</span><h3 className="mt-3 text-xl font-semibold">{item.title}</h3><p className="mt-3 leading-7 text-[#66515D]">{item.detail}</p></article>)}
        </div>
        <div className="mt-9 rounded-2xl border border-[#DFC8CE] bg-white p-6">
          <h3 className="mb-5 text-xl font-semibold">Architecture overview</h3>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {['Streamlit', 'FastAPI', 'LangGraph', 'FAISS + BM25', 'Relevance grading', 'Qwen2.5 / Fallback'].map((step, i) => (
              <div key={step} className="flex items-center gap-3"><span className="rounded-lg border border-[#D8A7AD] bg-[#F4E4E8] px-3 py-3 text-[#493442]">{step}</span>{i < 5 && <span className="text-[#985D72]" aria-hidden="true">→</span>}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#985D72]">Real application screenshots</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Inside the workspace</h2>
          <div className="mt-9 grid gap-7 md:grid-cols-2">
            {images.slice(1).map((item) => <figure key={item.src} className="overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white"><Image src={item.src} alt={item.title} width={1792} height={856} className="h-auto w-full" /><figcaption className="px-5 py-4"><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm text-[#715B68]">{item.detail}</p></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Engineering & evolution</h2>
        <p className="mt-5 max-w-3xl leading-8 text-[#66515D]">The project evolved from classic RAG to evaluated hybrid retrieval and finally to an agentic workflow orchestrated with LangGraph. It provides a FastAPI backend, a Streamlit interface, Docker configuration and Pytest tests.</p>
        <div className="mt-9 flex flex-wrap gap-3">{['Classic RAG', 'Hybrid RAG', 'Evaluated retrieval', 'Agentic RAG'].map((stage, i) => <span key={stage} className="rounded-xl border border-[#D8A7AD] bg-[#F4E4E8] px-4 py-3 text-sm text-[#74465A]">{i+1}. {stage}</span>)}</div>
      </section>

      <footer className="border-t border-[#DFC8CE] px-6 py-8 text-center text-sm text-[#78636E]">© 2026 Zineb Hadri · <Link href="/#projects" className="text-[#874E65] hover:text-[#493442]">Back to portfolio</Link></footer>
    </main>
  );
}
