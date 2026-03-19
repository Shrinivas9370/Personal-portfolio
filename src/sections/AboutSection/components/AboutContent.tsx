
import { useEffect, useRef } from "react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Vellore Institute of Technology",
    period: "2026 – Present",
    detail: "CGPA: –",
    highlight: true,
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "JJC",
    period: "2025",
    detail: "87.3%",
    highlight: false,
  },
  {
    degree: "Secondary (Class X)",
    institution: "BBEMS",
    period: "2023",
    detail: "90.4%",
    highlight: false,
  },
];

const funFacts = [
  // {
  //   icon: "heart",
  //   text: "Deeply inspired by  balance into daily life and code.",
  // },
  {
    icon: "book",
    text: "Always curious to learn and try new technologies.",
  },
];

const FunFactIcon = ({ type }: { type: string }) => {
  if (type === "heart") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 shrink-0 text-purple-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 shrink-0 text-sky-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
};

export const AboutContent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".about-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .about-animate {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .about-visible .about-animate,
        .about-animate.about-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .about-animate:nth-child(1) { transition-delay: 0.05s; }
        .about-animate:nth-child(2) { transition-delay: 0.12s; }
        .about-animate:nth-child(3) { transition-delay: 0.19s; }
        .about-animate:nth-child(4) { transition-delay: 0.26s; }
        .about-animate:nth-child(5) { transition-delay: 0.33s; }
        .about-animate:nth-child(6) { transition-delay: 0.40s; }

        .edu-card {
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .edu-card:hover {
          border-color: rgba(168, 85, 247, 0.35) !important;
          background-color: rgba(168, 85, 247, 0.04);
        }

        .section-title-line {
          display: block;
          width: 56px;
          height: 3px;
          background: linear-gradient(to right, rgb(204, 102, 255), rgb(0, 191, 255));
          border-radius: 2px;
          margin: 10px auto 0;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative box-border py-24 px-4 md:px-8 max-w-screen-xl mx-auto"
        id="about"
      >
        {/* Section heading */}
        <div className="about-animate text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I Am
          </h2>
          <span className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8">
            {/* Bio paragraphs */}
            <div className="about-animate space-y-5">
              <p className="text-slate-300 text-lg leading-8">
                I'm Shrinivas Medewar, a passionate Computer Science
                undergraduate at VIT University with a strong interest in web
                development, competitive programming, and AI/ML. I enjoy
                building full-stack applications that solve real-world problems
                and optimizing algorithms to make systems more efficient.
              </p>
              <p className="text-slate-400 text-lg leading-8">
                From developing healthcare platforms to creating marketplaces
                for excess inventory, I believe in using tech to improve
                people's lives. I'm constantly exploring new tools, frameworks,
                and problem-solving strategies to grow as a developer and
                thinker.
              </p>
            </div>

            {/* Philosophy / Fun facts */}
            <div className="about-animate">
              <h3 className="text-white text-xl font-semibold mb-5">
                Key-Aspect
              </h3>
              <ul className="flex flex-col gap-4">
                {funFacts.map((fact, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 backdrop-blur-sm bg-zinc-900/40 border border-slate-800/30 rounded-2xl px-5 py-4"
                  >
                    <FunFactIcon type={fact.icon} />
                    <span className="text-slate-300 text-base leading-7">
                      {fact.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Education ── */}
          <div className="flex flex-col gap-6">
            <div className="about-animate">
              <h3 className="text-white text-xl font-semibold mb-6">
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {educationData.map((edu, i) => (
                  <div
                    key={i}
                    className="about-animate edu-card backdrop-blur-sm bg-zinc-900/40 border border-slate-800/25 rounded-2xl px-6 py-5 relative overflow-hidden"
                  >
                    {/* Accent bar on the left for current education */}
                    <div
                      className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full ${
                        edu.highlight
                          ? "bg-gradient-to-b from-purple-400 to-sky-500"
                          : "bg-slate-700"
                      }`}
                    />

                    <h4 className="text-white font-semibold text-base leading-6 pl-2">
                      {edu.degree}
                    </h4>
                    <p
                      className={`text-sm font-medium mt-1 pl-2 ${
                        edu.highlight ? "text-purple-400" : "text-sky-500"
                      }`}
                    >
                      {edu.institution}
                    </p>
                    <p className="text-slate-400 text-sm mt-2 pl-2">
                      {edu.period}
                      <span className="mx-2 text-slate-600">|</span>
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
