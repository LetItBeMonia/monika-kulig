import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton.jsx";

const projects = [
  {
    title: "Coming soon...",
    description: "Next.js + Typescript project.",
    image: "/projects/project-next-project.jpg",
    tags: ["Next.js", "TypeScript"],
    link: "#",
    github: "#",
  },
  {
    title: "The Portfolio Itself",
    description:
      "Single page application made to showcase my programming projects. The website shows my interest in creating CSS animations and was an opportunity to practice my React.js skills. It also gave me a space to learn Tailwind CSS.",
    image: "/projects/project-dev-portfolio.jpg",
    tags: ["React.js", "Vite", "Tailwind", "CSS animations"],
    link: "#",
    github: "https://github.com/LetItBeMonia/monika-kulig",
  },
  {
    title: "Companies Web Catalog",
    description:
      "Full-stack web application for browsing and managing a catalog of companies, featuring user registration and authentication, search functionality, filtering, sorting, pagination and file uploads. The project demonstrates the use of MVC architecture, session management, REST API implementation, middleware, routing, dynamic templates, server creation and non-relational database integration.",
    image: "/projects/project-company-catalog.jpg",
    tags: [
      "JavaScript",
      "NodeJS",
      "express.js",
      "mongoDB",
      "mongoose",
      "ejsLayouts",
      "REST API",
    ],
    link: "#",
    github: "https://github.com/LetItBeMonia/CompaniesWebCatalog",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            More coming
            <span className="font-serif italic font-normal text-white">
              {" "}
              soon...
            </span>
          </h2>
          <p>A selection of my work showing my programming skills.</p>
          {/* <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my work showing my programming skills. From simple
            single-page websites to complex web applications.
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 h-full flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/*  via-accent/50 */}
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-accent/20 via-accent/10 
                 to-transparent opacity-60"
                />
                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 duration-300">
                  {project.link != "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  ) : (
                    ""
                  )}
                  {project.github != "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};
