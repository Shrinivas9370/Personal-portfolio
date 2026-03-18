import { ServiceCard } from "./components/ServiceCard.tsx";
export const ServicesSection = () => {
    return (
        <section id="services" className="bg-neutral-900 box-border caret-transparent py-20">
            <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="box-border caret-transparent text-center mb-16">
                    <h2 className="text-4xl font-bold box-border caret-transparent leading-10 mb-4">             How I Can Help           </h2>
                    <div className="bg-purple-400 box-border caret-transparent h-1 w-24 mx-auto"></div>
                </div>

                <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">           <ServiceCard iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-18.svg" iconVariant="text-blue-500" title="Full-Stack Web Development" description="Custom, responsive applications from frontend to backend. I build scalable web solutions using modern technologies like React, Node.js, and MongoDB." features={["Responsive Design", "Modern Tech Stack", "Scalable Architecture", "API Integration",]} />
                    <ServiceCard iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-19.svg" iconVariant="text-green-500" title="UI/UX Design & Web Prototyping" description="Clean and intuitive designs with Tailwind CSS. I create user-friendly interfaces that provide excellent user experience across all devices." features={["User-Centered Design", "Responsive Layouts", "Modern UI Components", "Accessibility Focus",]} />
                    <ServiceCard iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-20.svg" iconVariant="text-purple-500" title="Freelance MVP/Prototype Development" description="Campus and startup project execution. I help bring your ideas to life with rapid prototyping and MVP development for quick market validation." features={["Rapid Prototyping", "MVP Development", "Agile Methodology", "Quick Turnaround",]} />
                    <ServiceCard iconUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-21.svg" iconVariant="text-orange-500" title="DSA Mentorship" description="Personalized guidance on problem-solving and coding interviews. I help students and professionals improve their algorithmic thinking and interview skills." features={["1-on-1 Mentoring", "Interview Preparation", "Problem Solving Techniques", "Competitive Programming",]} />         </div>
            </div>
        </section>
    );
};