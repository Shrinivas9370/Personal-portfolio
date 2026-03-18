import { AboutContent } from "../AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="bg-zinc-800/30 box-border caret-transparent py-20">
      <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="box-border caret-transparent text-center mb-16">
          <h2 className="text-4xl font-bold box-border caret-transparent leading-10 mb-4">
            Who I Am
          </h2>
          {/* Decorative Purple Underline */}
          <div className="bg-purple-400 box-border caret-transparent h-1 w-24 mx-auto"></div>
        </div>
        <AboutContent />
      </div>
    </section>
  );
};

