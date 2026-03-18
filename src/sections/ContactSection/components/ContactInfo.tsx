
const contactLinks = [
  {
    label: "Phone",
    value: "+91 9370413177",
    href: "tel:+9370413177",
    icon: "https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-27.svg",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shrinivas-medewar",
    href: "https://www.linkedin.com/in/shrinivas-medewar-374a86219/",
    icon: "https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-28.svg",
  },
  {
    label: "GitHub",
    value: "github.com/shrinivas9370",
    href: "https://github.com/Shrinivas9370",
    icon: "https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-29.svg",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/shrinivas12345",
    href: "https://leetcode.com/u/Shrinivas12345/",
    icon: "https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-30.svg",
  },
];

export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      {contactLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 rounded-xl transition-all duration-200 hover:bg-zinc-800/50 group"
        >
          {/* Icon Container */}
          <div className="flex items-center justify-center bg-purple-400/10 p-3 rounded-xl transition-colors group-hover:bg-purple-400/20">
            <img
              src={link.icon}
              alt={`${link.label} icon`}
              className="h-6 w-6 transition-transform group-hover:scale-110"
              style={{ filter: "brightness(0) saturate(100%) invert(67%) sepia(88%) border(0) saturate(2853%) hue-rotate(223deg) brightness(101%) contrast(101%)" }}
            />
          </div>

          {/* Text Content */}
          <div className="ml-4">
            <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors">
              {link.label}
            </h4>
            <p className="text-slate-400 text-sm leading-5">
              {link.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};