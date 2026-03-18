export const FooterLinks = () => {
    return (
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            <h3 className="font-semibold box-border caret-transparent mb-4">         Quick Links       </h3>
            <div className="box-border caret-transparent gap-x-2 grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-y-2">
                <button className="text-slate-400 text-sm bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-left p-0 hover:text-purple-400">           Home         </button>
                <button className="text-slate-400 text-sm bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-left p-0 hover:text-purple-400">           About         </button>
                <button className="text-slate-400 text-sm bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-left p-0 hover:text-purple-400">           Skills         </button>
                <button className="text-slate-400 text-sm bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-left p-0 hover:text-purple-400">           Projects         </button>
                <button className="text-slate-400 text-sm bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-left p-0 hover:text-purple-400">           Services         </button>
                <button className="text-slate-400 text-sm bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-left p-0 hover:text-purple-400">           Contact         </button>
            </div>
        </div>
    );
};