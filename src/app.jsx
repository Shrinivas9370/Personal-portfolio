import { ToastContainer } from '../src/components/ToastContainer'
import { MainContent } from "../src/components/MainContent";

export const App = () => {
  return (
    /* Change <body> to a <div> or a React Fragment <></> */
    <div className="min-h-screen text-slate-50 text-base bg-[linear-gradient(135deg,rgb(16,19,24),rgb(22,28,38))] box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-seperate font-inter">
      <div className="box-border caret-transparent">
        <ToastContainer />
        <MainContent />
      </div>
    </div>
  );
};