export type SkillCardProps = {
    iconUrl: string;
    iconVariant: string;
    title: string;
    skills: string[];
};
export const SkillCard = (props: SkillCardProps) => {
    return (
        <div className="bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent h-full min-h-[auto] min-w-[auto] border border-slate-800 rounded-xl border-solid">
            <div className="box-border caret-transparent flex flex-col text-center p-6">
                <img src={props.iconUrl} alt="Icon" className={`box-border caret-transparent h-12 w-12 mb-4 mx-auto ${props.iconVariant}`} />
                <h3 className="text-xl font-semibold box-border caret-transparent tracking-[-0.5px] leading-7 min-h-[auto] min-w-[auto] mt-1.5">           {props.title}         </h3>
            </div>
            <div className="box-border caret-transparent pb-6 px-6">
                <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                    {props.skills.map((skill, index) => (<div key={index} className="text-neutral-900 text-sm font-semibold items-center bg-sky-500 box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] border px-3 py-1 rounded-full border-solid border-transparent"             >
                        {skill}
                    </div>
                    ))}
                </div>
            </div>
        </div>);
};