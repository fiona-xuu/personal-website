import pfp from "@/assets/pfp.png";
import bg from "@/assets/whitebg.png";
import handwrittenName from "@/assets/fiona-xu.png";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { href: "https://github.com/fiona-xuu", icon: Github, label: "GitHub" },
    {
      href: "https://linkedin.com/in/fiona-xu06",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://facebook.com/fiona.xuuu",
      icon: Facebook,
      label: "Facebook",
    },
    { href: "mailto:fionaxu.99@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:pl-44 lg:pr-20 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Top text */}
            <div>
              <p className="text-3xl font-light text-black mb-4 ml-2 leading-none relative z-20">
                hi, my name is
              </p>
              {/* Handwritten background name */}
              <div className="relative">
                <img
                  src={handwrittenName}
                  alt=""
                  className="absolute -top-14 -left-16 h-[200px] select-none pointer-events-none"
                  style={{ zIndex: 10 }}
                  aria-hidden="true"
                />
                <h1 className="text-8xl font-extrabold text-black lowercase leading-[0.9] relative z-10">
                  fiona
                  <br />
                  xu
                </h1>
              </div>
              {/* Subtitle */}
              <div className="mt-6 relative">
                <p className="text-3xl font-light text-black leading-tight">
                  and i am a{" "}
                  <span className="text-[#F5BFC0] italic font-medium">
                    software developer
                  </span>
                  <br />
                  and{" "}
                  <span className="text-[#F5BFC0] italic font-medium relative inline-flex items-center z-10">
                    designer
                    <span className="absolute left-[51%] top-[55%] -translate-y-1/2 w-[420px] h-[2px] bg-[#FED6D7] -z-10">
                      {/* Circle at start of arrow */}
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 bg-[#FED6D7]"></span>
                      {/* Arrow at end */}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-[#FED6D7]"></span>
                    </span>
                  </span>
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black hover:border-[#F5BFC0] hover:text-[#F5BFC0] transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex space-x-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-[#FED6D7] text-black font-normal hover:bg-[#F5BFC0]/30 hover:outline hover:outline-2 hover:outline-[#F5BFC0] px-10 py-7 text-xl"
                >
                  see what i've built →
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1LZkxdw1FBZCb4KvgwG9uacPQV4jz19qM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-[#F0D3D3] text-[#D29C9E] hover:bg-[#F5BFC0]/10 px-10 py-7 text-xl"
                >
                  view resume →
                </Button>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-start justify-center">
            <div className="relative w-[450px]">
              <div className="relative">
                <img
                  src={pfp}
                  alt="fiona xu"
                  className="w-full h-full object-fill "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
