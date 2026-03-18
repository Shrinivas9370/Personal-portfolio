export type AchievementCardProps =
    {
        iconUrl:
        string; iconVariant: string; badge: string; title: string; description: string; showButton?: boolean; buttonText?: string;
    };

export const AchievementCard = (props: AchievementCardProps) => {
    return (
        <div className="bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent h-full min-h-[auto] min-w-[auto] text-center border border-slate-800 rounded-xl border-solid">
            <div className="box-border caret-transparent flex flex-col h-full justify-between p-6">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">           <div
                    className={`bg-zinc-800 box-border caret-transparent inline-flex p-4 rounded-full ${props.iconVariant}`}           >
                    <img src={props.iconUrl} alt="Icon" className="box-border caret-transparent h-8 w-8" />           </div>
                    <div className="box-border caret-transparent mt-4">             <h3 className="text-purple-400 text-3xl font-bold box-border caret-transparent leading-9">
                        {props.badge}
                    </h3>
                        <h4 className="text-lg font-semibold box-border caret-transparent leading-7 mt-2">               {props.title}             </h4>
                        <p className="text-slate-400 text-sm box-border caret-transparent leading-[22.75px] mt-2">               {props.description}             </p>           </div>
                </div>         {props.showButton && (<button className="text-neutral-900 text-sm font-medium items-center bg-purple-400 caret-transparent gap-x-2 flex h-9 justify-center leading-5 min-h-[auto] min-w-[auto] gap-y-2 text-nowrap w-full mt-4 px-3 py-0 rounded-[10px] hover:bg-purple-400/90">             {props.buttonText}        
                   </button>)}       </div>     </div>);
};