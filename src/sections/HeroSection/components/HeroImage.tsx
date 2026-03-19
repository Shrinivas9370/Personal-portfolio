export const HeroImage = () => {
    return (
        <div className="relative box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] md:justify-end">
            <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto]">
                <div className="relative backdrop-blur-sm bg-[linear-gradient(to_right_bottom,rgba(20,24,31,0.5),rgba(20,24,31,0.8))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent h-80 w-80 border-purple-400/20 overflow-hidden rounded-3xl border-2 border-solid">
                    <img src="https://i.postimg.cc/43HDwcLS/Gemini-Generated-Image-aaq0eyaaq0eyaaq0.png" alt="Shrinivas Medewar" className="box-border caret-transparent h-full max-w-full object-cover w-full" />
                    <div className="absolute bg-[linear-gradient(to_top,rgba(16,19,24,0.2),rgba(0,0,0,0))] box-border caret-transparent inset-0"></div>
                </div>
            </div>
        </div>
    );
};