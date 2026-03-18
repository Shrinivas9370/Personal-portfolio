import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
export const ContactSection = () => {
  return (
    <section  className="bg-neutral-950 py-24" id="contact">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Let's Connect
          </h2>
          <div className="bg-purple-500 h-1.5 w-20 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
          <p className="mt-6 text-slate-400 max-w-lg mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through the form or any of my social channels.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          
          <div className="flex flex-col space-y-8">
            <div className="bg-zinc-900/50 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <ContactInfo />
            </div>
            
            {/* Optional Availability Badge */}
            <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};