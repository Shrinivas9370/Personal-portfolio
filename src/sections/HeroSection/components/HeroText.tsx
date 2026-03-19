import { useEffect, useRef } from "react";

export const HandleScroll = () => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    const el = document.getElementById('contact');
    
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
};


export const HeroText = () => {
    const typedRef = useRef<HTMLSpanElement>(null);
    const typedInstance = useRef<any>(null);

    useEffect(() => {
        // Dynamically import Typed.js to avoid SSR issues
        const loadTyped = async () => {
            try {
                // Try importing as ES module first
                const TypedModule = await import("typed.js");
                const Typed = TypedModule.default || TypedModule;

                if (typedRef.current) {
                    typedInstance.current = new Typed(typedRef.current, {
                        strings: [
                            "Competitive Programmer",
                            "Web Developer",
                            "MERN Developer",
                            "Problem Solver",
                            "Full Stack Dev",
                        ],
                        typeSpeed: 60,
                        backSpeed: 40,
                        backDelay: 1500,
                        startDelay: 300,
                        loop: true,
                        showCursor: true,
                        cursorChar: "|",
                        smartBackspace: true,
                    });
                }
            } catch (err) {
                // Fallback: load via script tag if npm package not available
                if (!document.querySelector('script[data-typed]')) {
                    const script = document.createElement("script");
                    script.src = "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.1.0/typed.umd.js";
                    script.setAttribute("data-typed", "true");
                    script.onload = () => {
                        const TypedGlobal = (window as any).Typed;
                        if (TypedGlobal && typedRef.current) {
                            typedInstance.current = new TypedGlobal(typedRef.current, {
                                strings: [
                                    "Competitive Programmer",
                                    "Web Developer",
                                    "MERN Developer",
                                    "Problem Solver",
                                    "Full Stack Dev",
                                ],
                                typeSpeed: 60,
                                backSpeed: 40,
                                backDelay: 1500,
                                startDelay: 300,
                                loop: true,
                                showCursor: true,
                                cursorChar: "|",
                                smartBackspace: true,
                            });
                        }
                    };
                    document.head.appendChild(script);
                } else {
                    // Script already loaded, just init
                    const TypedGlobal = (window as any).Typed;
                    if (TypedGlobal && typedRef.current) {
                        typedInstance.current = new TypedGlobal(typedRef.current, {
                            strings: [
                                "Competitive Programmer",
                                "Web Developer",
                                "MERN Developer",
                                "Problem Solver",
                                "Full Stack Dev",
                            ],
                            typeSpeed: 60,
                            backSpeed: 40,
                            backDelay: 1500,
                            startDelay: 300,
                            loop: true,
                            showCursor: true,
                            cursorChar: "|",
                            smartBackspace: true,
                        });
                    }
                }
            }
        };

        loadTyped();

        return () => {
            if (typedInstance.current) {
                typedInstance.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <style>{`
                .typed-cursor {
                    color: #38bdf8;
                    font-weight: 300;
                    animation: typedBlink 0.7s infinite;
                }
                @keyframes typedBlink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <div className="text-slate-400 text-sm font-medium items-center backdrop-blur-sm bg-zinc-900/50 box-border caret-transparent inline-flex leading-5 border border-slate-800/20 px-4 py-2 rounded-full border-solid">
                    <img src="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-5.svg" alt="Icon" className="text-purple-400 box-border caret-transparent h-4 w-4 mr-2" />
                    Available for opportunities
                </div>
                <div className="box-border caret-transparent mt-8">
                    <h1 className="text-5xl font-bold box-border caret-transparent leading-[60px] md:text-7xl md:leading-[72px]">
                        <span className="text-transparent text-5xl bg-clip-text bg-[linear-gradient(to_right,rgb(204,102,255),rgb(0,191,255),rgb(204,102,255))] box-border leading-[60px] md:text-7xl md:leading-[72px]">
                            Shrinivas
                        </span>
                        <br className="text-5xl box-border caret-transparent leading-[60px] md:text-7xl md:leading-[72px]" />
                        <span className="text-5xl box-border caret-transparent leading-[60px] md:text-7xl md:leading-[72px]">
                            Medewar
                        </span>
                        <span className="text-purple-400 text-5xl box-border caret-transparent leading-[60px] md:text-7xl md:leading-[72px]">
                            {" "}→
                        </span>
                    </h1>
                    <div className="box-border caret-transparent mt-6">
                        <h2 className="text-slate-400 text-2xl font-medium box-border caret-transparent leading-8 md:text-3xl md:leading-9">
                            I am a{" "}
                            <span className="text-purple-400 text-2xl font-semibold box-border caret-transparent leading-8 md:text-3xl md:leading-9">
                                <span ref={typedRef}></span>
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg box-border caret-transparent leading-7 max-w-xl mt-2">
                            Web Developer &amp; Competitive Programmer from VIT University,
                            passionate about impactful solutions.
                        </p>
                    </div>
                </div>
                <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-8 md:flex-row">
                    <button onClick={HandleScroll} className="text-neutral-900 text-lg font-medium items-center bg-purple-400 bg-[linear-gradient(to_right,rgb(204,102,255),rgb(0,191,255))] caret-transparent gap-x-2 flex h-11 justify-center leading-7 min-h-[auto] min-w-[auto] gap-y-2 text-center text-nowrap px-8 py-6 rounded-2xl hover:opacity-90 transition-opacity">
                        <img src="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-6.svg" alt="Icon" className="box-border caret-transparent shrink-0 h-4 pointer-events-none text-nowrap w-4 mr-2" />
                        Let&#39;s Connect
                    </button>
                    <a href="https://www.instagram.com/shrinivas._018/"><button className="text-lg font-medium items-center backdrop-blur-sm bg-zinc-900/20 caret-transparent gap-x-2 flex h-11 justify-center leading-7 min-h-[auto] min-w-[auto] gap-y-2 text-center text-nowrap border border-slate-800/30 px-8 py-6 rounded-2xl hover:text-neutral-900 hover:bg-purple-400 transition-colors">
                        <img src="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-7.svg" alt="Icon" className="box-border caret-transparent shrink-0 h-4 pointer-events-none text-nowrap w-4 mr-2" />
                        Social
                    </button></a>
                </div>
            </div>
        </>
    );
};
