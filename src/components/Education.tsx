const education = [
  {
    period: "2026 – 2027",
    degree: "Master 2 — Data, Knowledge and Hybrid AI",
    school: "Université Paris-Saclay",
    location: "France",
    detail: "Advanced studies in data, knowledge representation and artificial intelligence.",
  },
  {
    period: "2025 – 2026",
    degree: "Master 1 — Data, Knowledge and Hybrid AI",
    school: "Université Paris-Saclay",
    location: "France",
    detail: "Graduate studies in data, knowledge and artificial intelligence.",
  },
  {
    period: "2020 – 2025",
    degree: "Engineering Degree — Computer Science & Networks",
    school: "École Marocaine des Sciences de l’Ingénieur (EMSI)",
    location: "Morocco",
    detail: "MIAGE specialization — Computer Methods Applied to Business Management. Five-year engineering program.",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#985D72]">My academic journey</p>
      <h2 className="mb-10 text-4xl font-bold tracking-tight text-[#493442] md:text-5xl">
        Education <span className="text-[#985D72]">& Background.</span>
      </h2>
      <div className="relative space-y-5 border-l-2 border-[#D8A7AD] pl-6 md:pl-9">
        {education.map((item) => (
          <article key={item.degree} className="relative rounded-2xl border border-[#E8D2D7] bg-white p-6 shadow-sm md:p-8">
            <span aria-hidden="true" className="absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 border-[#985D72] bg-[#FCF5F3] md:-left-[43px]" />
            <p className="mb-3 text-sm font-semibold text-[#985D72]">{item.period}</p>
            <h3 className="text-xl font-bold text-[#493442]">{item.degree}</h3>
            <p className="mt-2 font-medium text-[#6D5360]">{item.school} · {item.location}</p>
            <p className="mt-3 leading-7 text-[#78666D]">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
