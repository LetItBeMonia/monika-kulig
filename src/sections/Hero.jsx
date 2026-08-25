// Ostatnio zmieniałam pt i pb w divie "content"

import { Button } from "@/components/Button.jsx";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaReact, FaGit, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiMysql, SiTailwindcss, SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton.jsx";
import { Download } from "lucide-react";
import { BgDots } from "@/components/BgDots.jsx";

const skills = [
  { name: "React", icon: <FaReact className="w-15 h-15" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="w-15 h-15" /> },
  { name: "Node.js", icon: <DiNodejs className="w-15 h-15" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-15 h-15" /> },
  { name: "SQL", icon: <SiMysql className="w-15 h-15" /> },
  { name: "GIT", icon: <FaGit className="w-15 h-15" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-15 h-15" /> },
  { name: "HTML", icon: <FaHtml5 className="w-15 h-15" /> },
  { name: "CSS", icon: <FaCss3Alt className="w-15 h-15" /> },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 flex items-end justify-center">
        {/* Bg Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgb(252_189_117/15%)_0%,#311c36_100%)]" />
        {/* <div className="absolute h-450 w-450 rounded-full -bottom-225 bg-rajah-200/7 blur-[150px]" /> */}
      </div>

      {/* Bg Dots - Small */}
      <BgDots size={1} numberOfDots={250} duration={70} />
      {/* Bg Dots - Medium */}
      <BgDots size={3} numberOfDots={100} duration={140} />
      {/* Bg Dots - Large */}
      <BgDots size={6} numberOfDots={40} duration={210} />

      {/* Content */}
      {/* <div className="container mx-auto px-6 pt-20 min-[1550px]:pt-32 pb-32 min-[1550px]:pb-20 relative z-10"> */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto min-[1700px]:max-w-none justify-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 md:min-w-140">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full-Stack Software Engineer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4 ">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Turning Your <br />
                <span className="text-secondary-foreground glow-text">
                  ideas
                </span>{" "}
                into{" "}
                <span className="inline-span-typewriter-parent">
                  <span className="font-normal text-white inline-span-typewriter-child">
                    code
                  </span>
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Monika Kulig — a software engineer with 1.5+ years of
                experience in coding. I primarly specialize in JavaScript
                technologies such as React, TypeScript and Node.js. I build
                scalable and responsive full-stack web applications with great
                attention to little details.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              {/* Animated SVG Button */}
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                <a href="https://monika-kulig-cv.vercel.app" target="_blank">
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FiGithub, href: "https://github.com/LetItBeMonia" },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/monika-kulig-553737294/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
              {/* <Github /> */}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            {/* <div className="relative max-w-sm min-[1550px]:max-w-md mx-auto"> */}
            <div className="relative max-w-sm lg:max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-full bg-linear-to-br 
              from-primary/20 via-transparent 
              to-primary/5 blur-2xl animate-pulse"
              />
              <div className="relative rounded-full">
                {" "}
                <div className="relative rounded-full">
                  <img
                    src="/profile-photo.jpg"
                    alt="Monika Kulig"
                    className="w-full aspect-4/5 object-cover rounded-full "
                  />

                  {/* Profile Image Inset Shadow */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(252,189,117,0.15)] pointer-events-none" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-1 -left-1 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1.5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-10 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative">
            <div className="flex flex-wrap justify-center">
              {[...skills].map((skill, idx) => (
                <div key={idx} className="relative group shrink-0 px-8 py-4">
                  <span className="text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill.icon}
                  </span>

                  {/* Tooltip */}
                  <span className="absolute left-1/2 bottom-full -translate-x-1/2 mb-2 whitespace-nowrap glass-strong rounded-xl px-4 py-4 text-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div
        className="absolute max-[1280px]:bottom-8 bottom-60 min-[1700px]:bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
