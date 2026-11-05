const interests = [
  { title: "Strength Training", description: "Discipline and consistency", number: "01" },
  { title: "Kickboxing", description: "Focus and resilience", number: "02" },
  { title: "Pilates", description: "Balance and well-being", number: "03" },
  { title: "Outdoor Painting", description: "Creativity inspired by nature", number: "04" },
  { title: "Hackathons", description: "Collaboration, learning and problem solving", number: "05" },
];

export default function BeyondCode() {
  return (
    <section id="beyond" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#985D72]">A little more about me</p>
      <h2 className="text-4xl font-bold tracking-tight text-[#493442] md:text-5xl">
        Beyond <span className="text-[#985D72]">the Code.</span>
      </h2>
      <p className="mb-10 mt-5 max-w-3xl leading-7 text-[#78666D]">
        Outside of technology, I enjoy activities that encourage discipline, creativity and collaboration.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest) => (
          <article key={interest.title} className="rounded-2xl border border-[#E8D2D7] bg-white p-6 shadow-sm">
            <span className="text-sm font-semibold text-[#B77D8B]">{interest.number}</span>
            <h3 className="mt-5 text-xl font-semibold text-[#493442]">{interest.title}</h3>
            <p className="mt-2 text-[#78666D]">{interest.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
