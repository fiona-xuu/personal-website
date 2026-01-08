import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import bg from "@/assets/whitebg.png";
import handwrittenProjects from "@/assets/projects-projects.png";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "moodi",
      technologies: "TypeScript, React, TSX, Vite, Presage SDK, Google Gemini API, Supabase",
      description: "Real-time AI-powered health insights app for real-time biometric data tracking.",
      status: "View Project",
      link: "https://github.com/fiona-xuu/moodi",
    },
    {
      id: "02",
      title: "stockl",
      technologies: "TypeScript, ReactJS, CSS, Gadget",
      description: "Full-stack web app for real-time stock tracking",
      status: "View Project",
      link: "https://github.com/fiona-xuu/stockll",
    },
    {
      id: "03",
      title: "PBSN",
      technologies: "TypeScript, ReactJS, CSS",
      description: "Western University's largest business club's official website",
      status: "View Project",
      link: "https://github.com/fiona-xuu/starCheck",
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-44 h-full flex items-center">
        {/* style */}
        <div className="relative w-full">
          <img
            src={handwrittenProjects}
            alt=""
            className="absolute -top-7 -left-12 h-[125px] select-none pointer-events-none"
            style={{ zIndex: 10 }}
            aria-hidden="true"
          />
          <h2 className="text-7xl text-black font-extrabold mb-20 relative z-10">
            projects
            <span className="text-[#F5BFC0]">.projects</span>
          </h2>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row lg:items-center bg-white/80 justify-between py-6 group hover:bg-[#F5BFC0]/10 hover:outline hover:outline-2 hover:outline-[#F5BFC0] transition-colors duration-200 rounded-lg lg:px-4 shadow-lg${idx !== projects.length - 1 ? " mb-6" : ""
                  }`}
              >
                {/* project details */}
                <div className="lg:px-6 max-w-[44%] break-words">
                  <h3 className="text-xl lg:text-2xl font-semibold black mb-1 transition-colors duration-200 ">
                    {project.title}
                  </h3>
                  <span className="text-[#F5BFC0] text-sm lg:text-lg font-light">
                    {project.technologies}
                  </span>
                </div>

                {/* Vertically Centered Description */}
                <div className="pl-8 pr-4 flex items-center flex-1">
                  <span className="text-xl font-light text-gray-600/90">
                    {project.description}
                  </span>
                </div>

                {/* CTA Button */}
                <div className="mt-4 lg:mt-0 lg:mr-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border-2 border-[#F5BFC0] text-[#F5BFC0] hover:scale-110 hover:bg-transparent bg-transparent p-2 transition-all duration-300 ease-in-out"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <a href="https://github.com/fiona-xuu?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#F0D3D3] text-[#D29C9E] hover:bg-[#F5BFC0]/10 px-10 py-7 text-xl"
              >
                view all my projects →
              </Button>
            </a>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Projects;
