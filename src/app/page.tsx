import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import BeyondCode from "../components/BeyondCode";

const projects = [
  {
    number: "01",
    title: "Agentic RAG Document Assistant",
    category: "Generative AI · RAG · Agents",
    description:
      "An agentic document assistant combining hybrid FAISS/BM25 retrieval, relevance grading, query rewriting and source-grounded answers with LangGraph.",
    technologies: ["Python", "LangGraph", "FAISS", "BM25", "Qwen2.5", "Streamlit"],
    href: "/projects/ai-document-assistant",
    image: "/projects/agentic-rag/workspace.png",
    imageAlt: "Agentic RAG Streamlit workspace showing indexed documents",
    status: "featured",
  },
  {
    number: "02",
    title: "Agentic AI Decision Copilot",
    category: "Agentic AI · Business Analytics · LLM Agents",
    description:
      "An agentic business analytics copilot combining Qwen2.5, LangGraph, deterministic Python tools and answer verification to deliver grounded business insights.",
    technologies: ["Python", "LangGraph", "Qwen2.5", "FastAPI", "Pandas", "Docker"],
    href: "/projects/agentic-ai-decision-copilot",
    image: "/projects/agentic-decision-copilot/overview.png",
    imageAlt: "Decision Copilot Streamlit dashboard showing agentic analytics features",
    status: "featured",
  },
  {
    number: "03",
    title: "Legal Contract NLP",
    category: "Natural Language Processing",
    description:
      "Work in progress: exploring NLP techniques for legal contract analysis.",
    technologies: ["Python", "NLP", "Transformers"],
    href: "",
    image: "",
    imageAlt: "",
    status: "in-progress",
  },
];

const contacts = [
  {
    title: "GitHub",
    detail: "Explore my code and AI projects",
    href: "https://github.com/ZinebHadri",
    action: "View GitHub",
  },
  {
    title: "LinkedIn",
    detail: "Connect with me professionally",
    href: "https://www.linkedin.com/in/zineb-hadri-2a69b0209",
    action: "View LinkedIn",
  },
  {
    title: "Email",
    detail: "zinebhadri1234@gmail.com",
    href: "mailto:zinebhadri1234@gmail.com",
    action: "Send an email",
  },
];

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Certifications", href: "#certifications" },
  { title: "Beyond Code", href: "#beyond" },
  { title: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-[#FCF5F3] text-[#493442]">
      <header className="sticky top-0 z-50 border-b border-[#E8D2D7] bg-[#FCF5F3]/95 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5"
          aria-label="Main navigation"
        >
          <Link href="/" className="text-xl font-bold tracking-tight">
            Zineb <span className="text-[#985D72]">Hadri</span>
          </Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#6D5360]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-sm transition hover:text-[#985D72] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985D72]"
              >
                {link.title}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-[74vh] max-w-6xl flex-col justify-center px-6 py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-[#D8A7AD]/25 blur-3xl"
        />
        <div className="relative max-w-4xl motion-safe:animate-[fade-rise_650ms_ease-out_both]">
          <p className="mb-7 inline-block rounded-full border border-[#D8A7AD] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#985D72]">
            AI Engineer · Paris-Saclay
          </p>
          <p className="mb-5 text-lg font-medium text-[#6D5360]">Hello, I&apos;m Zineb Hadri.</p>
          <h1 className="text-5xl font-bold leading-[1.12] tracking-tight md:text-7xl">
            Turning complex information into <span className="text-[#985D72]">intelligent solutions.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#78666D]">
            Master&apos;s student in Data, Knowledge and Hybrid AI at Université Paris-Saclay.
            I build intelligent applications using LLMs, Agentic RAG and Machine Learning.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-[#985D72] px-7 py-3 font-semibold text-white transition hover:bg-[#7D4C60] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985D72]"
            >
              Explore My Work
            </a>
            <a
              href="#about"
              className="rounded-xl border border-[#985D72] px-7 py-3 font-semibold text-[#985D72] transition hover:bg-[#F5E6E6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985D72]"
            >
              More About Me
            </a>
          </div>
          <p className="mt-12 text-sm font-medium text-[#78666D]">
            Open to a 6-month AI Engineering internship starting March 2027.
          </p>
          <div aria-label="Agentic RAG retrieval results" className="mt-10 grid max-w-2xl grid-cols-3 gap-2 sm:gap-4">
            {[
              { value: "91.7%", label: "Top-1" },
              { value: "100%", label: "Top-3" },
              { value: "0.958", label: "MRR" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#E8D2D7] bg-white/90 p-3 shadow-sm sm:p-5">
                <p className="text-2xl font-bold text-[#884C62] sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs font-semibold text-[#67505B]">{item.label} retrieval</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#6D5360]">
            Agentic RAG hybrid retrieval · validation set: 12 questions ·{" "}
            <a href="#projects" className="underline underline-offset-4 hover:text-[#884C62]">See case study</a>
          </p>
        </div>
      </section>

      <About />

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#985D72]">Selected Work</p>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Featured <span className="text-[#985D72]">Projects.</span>
        </h2>
        <p className="mb-10 mt-5 max-w-2xl leading-7 text-[#78666D]">
          A selection of my work and upcoming projects in AI and data.
        </p>
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-[#E8C9D0] bg-white shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#E7BCC5] to-[#FAEDEE]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition duration-300 motion-safe:group-hover:scale-[1.02]"
                  />
                ) : project.status === "featured" ? (
                  <div className="flex h-full flex-col items-center justify-center gap-4 px-5 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7D4C60]">Agentic analytics architecture</p>
                    <div className="flex w-full max-w-sm flex-wrap items-center justify-center gap-2 text-xs font-semibold text-[#684C59]">
                      {["Question", "LangGraph", "Python tools", "Verification"].map((step) => (
                        <span key={step} className="rounded-lg border border-[#CFA8B1] bg-white/85 px-3 py-2">
                          {step}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-[#725664]">Deterministic metrics · Safe fallback</p>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center px-8 text-center text-sm font-semibold uppercase tracking-widest text-[#986F7F]">
                    Work in progress
                  </div>
                )}
                <span className="absolute left-5 top-5 rounded-lg bg-white/95 px-3 py-1 text-xs font-bold text-[#985D72]">
                  PROJECT / {project.number}
                </span>
              </div>
              <div className="p-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#985D72]">{project.category}</p>
                <h3 className="text-2xl font-bold text-[#493442]">{project.title}</h3>
                <p className="mb-7 mt-4 leading-7 text-[#78666D]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#E9BCC6] bg-[#F9EBEE] px-3 py-1.5 text-xs font-medium text-[#7D4C60]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 border-t border-[#EEDCE0] pt-5">
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="rounded-sm font-semibold text-[#985D72] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985D72]"
                    >
                      Explore Case Study
                    </Link>
                  ) : (
                    <span className="text-sm text-[#987B86]">Case study coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Education />
      <Certifications />
      <BeyondCode />

      <section id="contact" className="scroll-mt-28 border-t border-[#EAD4D8] bg-[#F5E6E6] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#985D72]">Get in touch</p>
          <h2 className="text-4xl font-bold text-[#493442] md:text-5xl">
            Let&apos;s build something <span className="text-[#985D72]">intelligent.</span>
          </h2>
          <p className="mb-10 mt-5 max-w-2xl leading-7 text-[#78666D]">
            Interested in collaborating or discussing AI Engineering opportunities? Feel free to reach out.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {contacts.map((contact) => (
              <article key={contact.title} className="rounded-2xl border border-[#E6C7CE] bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-[#493442]">{contact.title}</h3>
                <p className="mb-7 mt-3 break-words text-[#78666D]">{contact.detail}</p>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="rounded-sm font-semibold text-[#985D72] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985D72]"
                >
                  {contact.action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-[#EAD4D8] bg-[#FCF5F3] px-6 py-7 text-center text-sm text-[#806A75]">
        © 2026 Zineb Hadri. All rights reserved.
      </footer>
    </main>
  );
}
