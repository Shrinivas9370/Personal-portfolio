export type ProjectCardProps = {
    imageUrl: string;
    projectLink: string;
    imageAlt: string; title: string;
    description: string;
    techStack: string[];
    achievements: string[];
    buttonIcon: string;
    buttonText: string;
    buttonLink: string;
};


export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="bg-zinc-900 flex flex-col h-full justify-between border border-slate-800 overflow-hidden rounded-xl shadow-lg group">
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden"  onClick={()=> window.location.href = props.projectLink} >
                <img
                    src={props.imageUrl}
                    alt={props.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </div>

            {/* Content Body */}
            <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                    {props.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {props.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {props.techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full border border-slate-700 bg-slate-800 text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                        {props.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start text-sm text-slate-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5 mr-2" />
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                    <button onClick={() => window.location.href = props.buttonLink} className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-slate-200 bg-zinc-800 border border-slate-700 rounded-lg transition-all hover:bg-purple-500 hover:text-white hover:border-purple-400 active:scale-95">
                        {props.buttonIcon && (
                            <img
                                src={props.buttonIcon}
                                alt=""
                                className="h-4 w-4 mr-2 filter brightness-0 invert"
                            />
                        )}
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};