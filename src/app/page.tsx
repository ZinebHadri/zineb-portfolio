import Link from "next/link";
import About from "../components/About";

const projects = [
  {
    number: "01",
    title: "Agentic RAG Document Assistant",
    href: "/projects/ai-document-assistant",
    category: "Generative AI · RAG · Agents",
    description:
      "An agentic document assistant combining hybrid FAISS/BM25 retrieval, relevance grading, query rewriting and source-grounded answers with LangGraph.",
    technologies: ["Python", "LangGraph", "FAISS", "BM25", "Qwen2.5", "Streamlit"],
    gradient: "from-[#E8BBC4] via-[#F2DCE1] to-[#FCF5F3]",
    icon: "✦",
  },
  {
    number: "02",
    title: "Sales Prediction",
    href: "",
    category: "Machine Learning · Data Science",
    description:
      "A predictive machine learning project focused on analyzing sales data, identifying patterns and building forecasting models.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Regression"],
    gradient: "from-[#D7B4C2] via-[#F5E6E8] to-[#FCF5F3]",
    icon: "↗",
  },
  {
    number: "03",
    title: "Legal Contract NLP",
    href: "",
    category: "Natural Language Processing",
    description:
      "Exploring natural language processing techniques to analyze legal contracts and extract meaningful information from text.",
    technologies: ["Python", "NLP", "Transformers", "Legal AI"],
    gradient: "from-[#CBA8B7] via-[#F1DEE3] to-[#FCF5F3]",
    icon: "{ }",
  },
];

const contacts = [
  {
    title: "GitHub",
    detail: "Explore my code and AI projects",
    href: "https://github.com/ZinebHadri",
    action: "View GitHub ↗",
  },
  {
    title: "LinkedIn",
    detail: "Connect with me professionally",
    href: "https://www.linkedin.com/in/zineb-hadri-2a69b0209",
    action: "View LinkedIn ↗",
  },
  {
    title: "Email",
    detail: "zinebhadri1234@gmail.com",
    href: "mailto:zinebhadri1234@gmail.com",
    action: "Send an email ↗",
  },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-[#FCF5F3] text-[#493442]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#DFC8CE] bg-[#FCF5F3]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Zineb <span className="text-[#985D72]">Hadri</span>
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#66515D]">
            <a href="#home" className="transition hover:text-[#985D72]">Home</a>
            <a href="#about" className="transition hover:text-[#985D72]">About</a>
            <a href="#projects" className="transition hover:text-[#985D72]">Projects</a>
            <a href="#contact" className="transition hover:text-[#985D72]">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#D8A7AD]/25 blur-3xl" />
        <div className="relative z-10 max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#D8A7AD] bg-[#F4E4E8] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#985D72]" />
            <span className="text-xs font-medium tracking-wide text-[#874E65]">AI ENGINEER · PARIS-SACLAY</span>
          </div>
          <p className="mb-5 text-lg font-medium text-[#66515D]">Hello, I&apos;m Zineb Hadri.</p>
          <h1 className="text-5xl font-bold leading-[1.12] tracking-tight md:text-7xl">
            Turning complex information into{" "}
            <span className="bg-gradient-to-r from-[#985D72] to-[#B87987] bg-clip-text text-transparent">intelligent solutions.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#715B68]">
            Master&apos;s student in Data, Knowledge and Hybrid AI at Université Paris-Saclay. I build intelligent applications using LLMs, Retrieval-Augmented Generation and Machine Learning.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-[#985D72] px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#80475D]">Explore My Work ↗</a>
            <a href="#about" className="rounded-xl border border-[#CBA8B1] px-7 py-3 font-semibold text-[#493442] transition hover:border-[#985D72] hover:text-[#874E65]">More About Me</a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-[#715B68]">
            <span className="h-2 w-2 rounded-full bg-[#985D72]" />
            Seeking a 6-month AI internship starting March 2027
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="[&>section]:scroll-mt-24"><About /></div>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#985D72]">Selected Work</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Featured <span className="text-[#985D72]">Projects.</span></h2>
          <p className="mt-5 max-w-2xl leading-7 text-[#715B68]">A selection of projects exploring artificial intelligence, document understanding and predictive machine learning.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="group overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#985D72]">
              <div className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <span className="absolute left-6 top-6 text-sm font-semibold text-[#493442]/60">PROJECT / {project.number}</span>
                <span aria-hidden="true" className="select-none text-7xl font-light text-[#74465A]/70 transition duration-500 group-hover:scale-110">{project.icon}</span>
              </div>
              <div className="p-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#985D72]">{project.category}</p>
                <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-7 leading-7 text-[#715B68]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-lg border border-[#D8A7AD] bg-[#F4E4E8] px-3 py-1.5 text-xs font-medium text-[#74465A]">{tech}</span>
                  ))}
                </div>
                {project.href ? (
                  <Link href={project.href} className="mt-8 flex items-center justify-between border-t border-[#DFC8CE] pt-5 text-sm font-semibold text-[#874E65] transition hover:text-[#493442]">
                    <span>Explore Case Study</span><span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <p className="mt-8 border-t border-[#DFC8CE] pt-5 text-sm text-[#78636E]">Detailed case study coming soon</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-[#DFC8CE] bg-[#F4E5E5]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#985D72]">Get in touch</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s build something <span className="text-[#985D72]">intelligent.</span></h2>
            <p className="mt-6 leading-8 text-[#715B68]">I&apos;m open to 6-month internships in AI Engineering, LLMs and RAG starting in March 2027. Feel free to explore my work or get in touch.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {contacts.map((contact) => (
              <a key={contact.title} href={contact.href} target={contact.title === "Email" ? undefined : "_blank"} rel={contact.title === "Email" ? undefined : "noopener noreferrer"} className="group flex flex-col rounded-2xl border border-[#DFC8CE] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#985D72]">
                <h3 className="text-xl font-semibold text-[#493442]">{contact.title}</h3>
                <p className="mt-3 break-words text-sm leading-6 text-[#715B68]">{contact.detail}</p>
                <span className="mt-8 text-sm font-semibold text-[#874E65] transition group-hover:text-[#74465A]">{contact.action}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#DFC8CE] px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-[#78636E]">
          <p>© 2026 Zineb Hadri. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
