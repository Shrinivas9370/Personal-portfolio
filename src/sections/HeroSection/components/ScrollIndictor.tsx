export const ScrollIndicator = () => {
    return (
        <>
            <style>{`
                @keyframes scrollBounce {
                    0%, 100% { transform: translateY(0px); opacity: 1; }
                    50% { transform: translateY(8px); opacity: 0.5; }
                }
                @keyframes scrollFadeIn {
                    from { opacity: 0; transform: translateX(-50%) translateY(10px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                .scroll-indicator {
                    animation: scrollFadeIn 1s ease 1.5s both;
                }
                .scroll-arrow {
                    animation: scrollBounce 1.5s ease-in-out infinite;
                }
                .scroll-text {
                    animation: scrollBounce 1.5s ease-in-out infinite;
                    animation-delay: 0.1s;
                }
            `}</style>
            <div className="scroll-indicator absolute box-border caret-transparent translate-x-[-50%] left-2/4 bottom-8">
                <div className="items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
                    <div className="scroll-text text-slate-400 text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Scroll to explore
                    </div>
                    <img
                        src="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-8.svg"
                        alt="Icon"
                        className="scroll-arrow text-slate-400 box-border caret-transparent h-6 w-6"
                    />
                </div>
            </div>
        </>
    );
};