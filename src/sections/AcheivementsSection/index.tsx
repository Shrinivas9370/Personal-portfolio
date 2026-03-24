import { AchievementCard } from "./components/AcheivementCard";
export const AchievementsSection = () => {
    return (
        <section className="bg-zinc-800/30 box-border caret-transparent py-20">
            <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="box-border caret-transparent text-center mb-16">
                    <h2 className="text-4xl font-bold box-border caret-transparent leading-10 mb-4">             Highlights           </h2>
                    <div className="bg-purple-400 box-border caret-transparent h-1 w-24 mx-auto"></div>

                </div>
                <div className="box-border caret-transparent gap-x-6 grid grid-cols-none gap-y-6 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
                    <AchievementCard iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-22.svg" iconVariant="text-green-500" badge="50+" title="LeetCode Achiever" description="Solved 50+ problems and earned 27 badges including Daily, Monthly & Yearly badges." />
                    <AchievementCard iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-23.svg" iconVariant="text-blue-500" badge="Certified" title="Azure AI-900 Certified" description="Earned Microsoft AI-900 Certification via Credly." showButton={true} buttonText="View Certificate" />
                    <AchievementCard iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-24.svg" iconVariant="text-yellow-500" badge="Certified" title="NVIDIA DL Certified" description="Completed Deep Learning course and received official certification from NVIDIA." showButton={true} buttonText="View Certificate" />
                    <AchievementCard iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-25.svg" iconVariant="text-purple-500" badge="Top 6" title="Hackathon Finalist" description="Selected as a finalist among the Top 6 teams in SASI Hackathon at Tadepalligudem,AP" />
                </div>
            </div>
        </section>
        );
};
