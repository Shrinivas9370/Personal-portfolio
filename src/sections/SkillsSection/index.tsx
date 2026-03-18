import { SkillCard } from "../SkillsSection/components/SkillCard.tsx"
export const SkillsSection = () => {
  return (
    <section className="bg-neutral-900 py-24" id="skills">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="bg-purple-500 h-1.5 w-20 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and core competencies developed through academic projects and professional interests.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <SkillCard
            iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-13.svg"
            iconVariant="text-purple-500"
            title="Backend"
            skills={[
              "Node.js", "Express.js", "MongoDB", "Django",
              "REST APIs", "Flask"
            ]}
          />

          <SkillCard
            iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-14.svg"
            iconVariant="text-orange-500"
            title="Tools & DevOps"
            skills={[
              "Git", "Docker", "Kubernetes", "AWS",
              "GitHub Actions", "Figma", "VS Code"
            ]}
          />

          <SkillCard
            iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-15.svg"
            iconVariant="text-red-500"
            title="CS Fundamentals & ML"
            skills={[
              "DSA", "OOPs", "Operating Systems", "DBMS",
              "AI/ML", "scikit-learn", "XGBoost",'numpy', "Model Evaluation"
            ]}
          />

          <SkillCard
            iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-16.svg"
            iconVariant="text-teal-500"
            title="Soft Skills"
            skills={[
              "Problem Solving", "Teamwork",
              "Time Management", "Adaptability"
            ]}
          />
          <SkillCard
            iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-12.svg"
            iconVariant="text-teal-500"
            title="Frontend"
            skills={[
              "HTML", "CSS",
              "JavaScript", "ReactJS", "NextJS", "Tailwind CSS"

            ]}
          />
          <SkillCard
            iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-11.svg"
            iconVariant="text-teal-500"
            title="Langauges
"
            skills={[
              "C", "C++", "Python", "SQL", "JavaScript"

            ]}
          />
        </div>
      </div>
    </section>
  );
};