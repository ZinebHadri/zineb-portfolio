import Image from "next/image";

const skills = [
  "Python", "Machine Learning", "Natural Language Processing", "LLMs",
  "RAG", "FAISS", "SQL", "Streamlit", "FastAPI", "Docker", "LangGraph",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-[#493442]">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#985D72]">Get to know me</p>
      <h2 className="mb-10 text-4xl font-bold">About <span className="text-[#985D72]">Me.</span></h2>
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-[#DFC8CE] bg-white shadow-sm">
          <div className="relative aspect-[4/5] w-full">
            <Image src="/zineb-profile.jpeg" alt="Portrait of Zineb Hadri" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" priority />
          </div>
        </div>
        <div className="rounded-2xl border border-[#DFC8CE] bg-white p-8 shadow-sm md:p-10">
          <h3 className="mb-6 text-2xl font-semibold">Hi, I&apos;m Zineb Hadri.</h3>
          <p className="mb-5 leading-8 text-[#66515D]">I&apos;m a Master&apos;s student in Data, Knowledge and Hybrid AI at Université Paris-Saclay, passionate about building intelligent and practical AI solutions.</p>
          <p className="mb-5 leading-8 text-[#66515D]">My interests include Large Language Models, Retrieval-Augmented Generation, Natural Language Processing and Machine Learning.</p>
          <p className="mb-8 leading-8 text-[#66515D]">Through my projects, I design systems that transform complex information into useful, accessible and reliable tools.</p>
          <h4 className="mb-4 font-semibold">Technologies I work with</h4>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => <span key={skill} className="rounded-lg border border-[#D8A7AD] bg-[#F9ECEE] px-4 py-2 text-sm text-[#74465A]">{skill}</span>)}
          </div>
          <p className="mt-8 border-t border-[#DFC8CE] pt-6 text-sm text-[#715B68]">● Seeking a 6-month AI Engineering internship starting in March 2027.</p>
        </div>
      </div>
    </section>
  );
}
