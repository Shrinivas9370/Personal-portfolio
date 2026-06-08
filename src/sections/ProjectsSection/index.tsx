import { ProjectCard } from "./components/ProjectCard.tsx";
export const ProjectsSection = () => {
    return (
        <section id="projects" className="bg-zinc-800/30 box-border caret-transparent py-20">
            <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="box-border caret-transparent text-center mb-16">
                    <h2 className="text-4xl font-bold box-border caret-transparent leading-10 mb-4">My Projects</h2>
                    <div className="bg-purple-400 box-border caret-transparent h-1 w-24 mx-auto"></div>
                </div>
                <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
                    <ProjectCard imageUrl="https://i.postimg.cc/7ZZHXNVJ/Rescue-AI-Interface.png" projectLink="https://rescue-id.vercel.app/" imageAlt="Rescue.Ai" title="Rescue AI " description="Developed a full-stack emergency response application designed to provide first responders with critical medical and contact information via secure, dynamic QR codes. By bridging the gap between an emergency and a victim's data, Rescue.Ai reduces life-saving response times." techStack={['MongoDB', "Express", 'React', 'Node.js']} achievements={[" End-to-End Full-Stack Architecture", " Optimized Emergency Data Retrieval", " Scalable & Reliable Deployment (DevOps)",]} buttonIcon="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-17.svg" buttonText="GitHub" buttonLink="https://github.com/stutieagrawaal-glitch/Rescue-AI" />
                    <ProjectCard imageUrl="https://c.animaapp.com/mmq5nl3br7cuRw/assets/deadstockk.jpg" projectLink="" imageAlt="DropDeal" title="DropDeal" description="Dropdeal is a high-performance, full-stack E-commerce platform designed to provide a seamless and secure shopping experience. Built using the MERN stack, the application features a dynamic product catalog, real-time inventory management, and a secure checkout flow." techStack={["ReactJS", "Node.js", "ExpressJS", "MongoDB", "Redux / React Context API", "Axios", "Tailwind"]} achievements={["Comprehensive State & Data Management", "Secure Authentication & Role-Based Access", "Optimized Performance & Deployment",]} buttonIcon="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-17.svg" buttonText="GitHub" buttonLink="https://github.com/adilsukumar/Pawsitive_Diagnostics" />
                    <ProjectCard imageUrl="https://i.postimg.cc/FKBSZwWd/Real-Fit-VTON.jpg" projectLink="https://github.com/Shrinivas9370/RealFit.git" imageAlt="RealFit" title="RealFit" description="AI-Powered Virtual Garment Try-On Chrome Extension

RealFit redefines the online shopping experience by allowing users to virtually try on clothing directly from their browser. Built as a seamless Chrome extension, it eliminates sizing guesswork and visualizes fit in real time.
" techStack={["React", "Express.js", "AI/ML","Hugging Face","FAST API","TensorFlow"]} achievements={["Leverages a cutting-edge, diffusion-based Fashn AI VTON (Virtual Try-On) model to generate highly realistic, texture-accurate clothing overlays.",]} buttonIcon="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-17.svg" buttonText="GitHub" buttonLink="https://github.com/Shrinivas9370/RealFit.git"  />      </div>
            </div>
        </section>
    );
};
