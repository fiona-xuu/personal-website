import { Github, Linkedin, FileText, Mail } from "lucide-react";
import handwrittenFooter from "@/assets/stay-in-touch.png";

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/fiona-xuu", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/fiona-xu06", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:fionaxu.99@gmail.com", icon: Mail, label: "Email" },
    { href: "https://drive.google.com/file/d/1LZkxdw1FBZCb4KvgwG9uacPQV4jz19qM/view?usp=sharing", icon: FileText, label: "Resume" }
  ];
  return (
    <section className="bg-[#F5BFC0]/70 py-7 px-24 rounded-t-[50px]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="relative">
          <img
            src={handwrittenFooter}
            alt=""
            className="absolute -top-5 -left-4 h-[70px] object-contain select-none pointer-events-none"
            style={{ zIndex: 10 }}
            aria-hidden="true"
          />
          {/* Text */}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-600/80 mb-8 lg:mb-0 mt-1 relative z-10">
            stay in touch.
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-1">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-full text-gray-600/80 hover:text-white transition-colors"
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Footer;