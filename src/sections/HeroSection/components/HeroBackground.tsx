
import { useEffect, useRef } from "react";

export const HeroBackground = () => {
    return (
        <>
            <style>{`
                @keyframes floatBlob1 {
                    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
                    33% { transform: translate(-20px, 15px) scale(1.1); opacity: 1; }
                    66% { transform: translate(10px, -10px) scale(0.95); opacity: 0.8; }
                }
                @keyframes floatBlob2 {
                    0%, 100% { transform: translate(0, 0) scale(1) rotate(12deg); }
                    50% { transform: translate(15px, 20px) scale(1.08) rotate(20deg); }
                }
                @keyframes floatBlob3 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.8; }
                    50% { transform: translate(-8px, 12px); opacity: 1; }
                }
                @keyframes floatBlob4 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(12px, -15px) scale(1.2); }
                }
                @keyframes pulseGlow1 {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.15); }
                }
                @keyframes pulseGlow2 {
                    0%, 100% { opacity: 0.5; transform: scale(1) blur(8px); }
                    50% { opacity: 0.9; transform: scale(1.2); }
                }
                @keyframes driftLeft {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-18px); }
                }
                @keyframes driftRight {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(18px); }
                }
                @keyframes iconFloat1 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(3deg); }
                }
                @keyframes iconFloat2 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(8px) rotate(-3deg); }
                }
                @keyframes iconFloat3 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-6px) rotate(2deg); }
                }
                .blob-1 { animation: floatBlob1 8s ease-in-out infinite; }
                .blob-2 { animation: floatBlob2 7s ease-in-out infinite; }
                .dot-1 { animation: floatBlob3 5s ease-in-out infinite; }
                .dot-2 { animation: floatBlob4 6s ease-in-out infinite; }
                .glow-1 { animation: pulseGlow1 6s ease-in-out infinite; }
                .glow-2 { animation: pulseGlow2 9s ease-in-out infinite; }
                .icon-card-1 { animation: iconFloat1 5s ease-in-out infinite; }
                .icon-card-2 { animation: iconFloat2 6s ease-in-out infinite 1s; }
                .icon-card-3 { animation: iconFloat3 7s ease-in-out infinite 0.5s; }
            `}</style>
            <div className="absolute box-border caret-transparent pointer-events-none inset-0 overflow-hidden">
                {/* Top-right large glow blob */}
                <div className="blob-1 absolute bg-[linear-gradient(to_right_bottom,rgba(204,102,255,0.25),rgba(0,191,255,0.25))] box-border caret-transparent blur-2xl h-48 w-48 rounded-full right-16 top-16"></div>

                {/* Top-left teal square */}
                <div className="blob-2 absolute bg-sky-500/30 box-border caret-transparent h-20 w-20 rounded-2xl left-16 top-32"></div>

                {/* Small purple dot */}
                <div className="dot-1 absolute bg-purple-400 box-border caret-transparent h-4 w-4 rounded-full right-[33.3333%] top-1/4"></div>

                {/* Small sky dot */}
                <div className="dot-2 absolute bg-sky-500 box-border caret-transparent h-6 w-6 rounded-full left-1/4 bottom-[33.3333%]"></div>

                {/* Icon card – code icon (right 1/4) */}
                <div className="icon-card-1 absolute backdrop-blur-sm bg-zinc-900/50 box-border caret-transparent border border-slate-800/20 p-4 rounded-2xl border-solid right-1/4 top-[33.3333%]">
                    <img src="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-2.svg" alt="Icon" className="text-purple-400 box-border caret-transparent h-8 w-8" />
                </div>

                {/* Icon card – database (right-20) */}
                <div className="icon-card-2 absolute backdrop-blur-sm bg-zinc-900/50 box-border caret-transparent border border-slate-800/20 p-4 rounded-2xl border-solid right-20 bottom-1/4">
                    <img src="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-3.svg" alt="Icon" className="text-sky-500 box-border caret-transparent h-8 w-8" />
                </div>

                {/* Icon card – palette (left-16) */}
                <div className="icon-card-3 absolute backdrop-blur-sm bg-zinc-900/50 box-border caret-transparent border border-slate-800/20 p-4 rounded-2xl border-solid left-16 top-[66.6667%]">
                    <img src="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-4.svg" alt="Icon" className="text-purple-400 box-border caret-transparent h-8 w-8" />
                </div>

                {/* Bottom-center purple glow */}
                <div className="glow-1 absolute bg-[linear-gradient(to_right_bottom,rgba(204,102,255,0.15),rgba(0,0,0,0))] box-border caret-transparent blur-xl h-32 w-32 rounded-full right-[33.3333%] bottom-20"></div>

                {/* Left-mid sky glow */}
                <div className="glow-2 absolute bg-[linear-gradient(to_right_bottom,rgba(0,191,255,0.2),rgba(0,0,0,0))] box-border caret-transparent blur-lg h-24 w-24 rounded-full left-10 top-2/4"></div>
            </div>
        </>
    );
};