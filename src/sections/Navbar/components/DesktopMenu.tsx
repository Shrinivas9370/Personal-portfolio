
const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Services", href: "services" },
    { label: "Contact", href: "contact" },
];

export const DesktopMenu = () => {
    const handleScroll = (sectionId: string) => {
        if (sectionId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            <div className="items-baseline box-border caret-transparent flex ml-10">
                {navItems.map((item, index) => (
                    <button
                        key={item.href}
                        onClick={() => handleScroll(item.href)}
                        className={`text-slate-400 text-sm font-medium bg-transparent caret-transparent block leading-5 min-h-0 min-w-0 text-center px-3 py-2 rounded-[10px] md:min-h-[auto] md:min-w-[auto] hover:text-purple-400 transition-colors duration-200 ${
                            index !== 0 ? "ml-4" : ""
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};