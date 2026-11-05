"use client";

import { useState } from "react";

type Credential = { issuer: string; name: string };
const certifications: Credential[] = [
  { issuer: "Dataiku", name: "Core Designer" },
  { issuer: "IBM", name: "Deep Learning with Keras and TensorFlow" },
  { issuer: "IBM", name: "Introduction to Deep Learning & Neural Networks with Keras" },
  { issuer: "IBM", name: "Machine Learning with Python: Build Real-World ML Models" },
  { issuer: "IBM", name: "Exploratory Data Analysis for Machine Learning" },
  { issuer: "IBM", name: "Introduction to Big Data with Spark and Hadoop" },
  { issuer: "IBM", name: "Introduction to Containers with Docker, Kubernetes & OpenShift" },
  { issuer: "DeepLearning.AI", name: "AI For Everyone" },
  { issuer: "University of Michigan", name: "Python for Everybody — Specialization" },
  { issuer: "Packt", name: "Alteryx Advanced" },
  { issuer: "Packt", name: "Alteryx for Beginners" },
  { issuer: "Microsoft", name: "Preparing Data for Analysis with Microsoft Excel" },
  { issuer: "Meta", name: "React Basics" },
  { issuer: "Google", name: "Introduction to Git and GitHub" },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="scroll-mt-28 bg-[#F5E6E6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#985D72]">Continuous learning</p>
        <h2 className="text-4xl font-bold tracking-tight text-[#493442] md:text-5xl">
          Certifications <span className="text-[#985D72]">& Training.</span>
        </h2>
        <p className="mb-10 mt-5 max-w-3xl leading-7 text-[#78666D]">
          A selection of completed courses and credentials across AI, data and software engineering.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert) => (
            <article key={`${cert.issuer}-${cert.name}`} className="flex h-full flex-col rounded-2xl border border-[#E8D2D7] bg-white p-6 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#985D72]">{cert.issuer}</p>
              <h3 className="text-lg font-semibold leading-7 text-[#493442]">{cert.name}</h3>
              <p className="mt-auto pt-5 text-xs font-medium text-[#806A75]">Completed</p>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            className="rounded-xl border border-[#985D72] px-6 py-3 font-semibold text-[#985D72] transition hover:bg-[#985D72] hover:text-white"
          >
            {showAll ? "Show Fewer Certifications" : `View All ${certifications.length} Certifications`}
          </button>
        </div>
      </div>
    </section>
  );
}
