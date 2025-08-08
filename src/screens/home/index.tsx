"use client";
import { Contact } from "@/components/sections/contact";
import { FeaturesSection } from "@/components/sections/features";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { VortexBackground } from "@/components/ui/vortex";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  return (
<<<<<<< Updated upstream
    <>
      <main className="flex min-h-full min-w-full h-screen w-screen bg-stone-900">
        <div className="md:pt-8 pt-4 xl:px-8 lg:px-8 px-2 flex h-screen w-screen flex-row items-center">
          <div className="md:w-20 w-12 h-full xl:ml-8 lg:ml-8 md:ml-4 flex flex-col justify-between items-center">
            {/* Icon */}
            <Link>
              <img src="logo.png" className="cursor-pointer" />
            </Link>
            <div className="w-full flex flex-col items-center">
              {/* Social Medias */}
              <div className="flex flex-col gap-8 mb-8">
                <Link newTab url="https://github.com/EduardoHidalgo">
                  <SiGithub className="text-gray-200 w-6 h-6 cursor-pointer" />
                </Link>
                <Link newTab url="https://www.linkedin.com/in/eduardo-hdr/">
                  <SiLinkedin className="text-gray-200 w-6 h-6 cursor-pointer" />
                </Link>
                <Link newTab url="https://twitter.com/EduardoHidalgo0">
                  <SiTwitter className="text-gray-200 w-6 h-6 cursor-pointer" />
                </Link>
                <Link newTab url="https://platzi.com/p/EduardoHidalgo/">
                  <SiPlatzi className="text-gray-200 w-6 h-6 cursor-pointer" />
                </Link>
              </div>
              {/* Divider Inverted */}
              <div className="xl:h-48 lg:h-48 md:h-32 xs:h-24 sm:h-16 h-16 w-1 bg-gray-200" />
            </div>
          </div>
          {/* Content */}
          <div className="grow h-full w-full xl:ml-32 lg:ml-28 md:ml-16 ml-2 flex flex-col items-start justify-center">
            <p
              data-nosnippet
              className="md:text-lg text-lg text-white pb-2 tracking-widest"
            >
              Hi, my name is
            </p>
            <h1 className="md:text-6xl text-5xl font-bold text-gray-200 pb-2">
              Eduardo Hidalgo Díaz Rugama.
            </h1>
            <h1
              data-nosnippet
              className="md:text-7xl text-xl text-gray-400 md:pb-8 pb-12"
            >
              I transform ideas into technology.
            </h1>
            <p className="md:text-xl text-lg text-gray-500 md:w-3/5 w-full">
              I'm a Software Engineer passionate about collaborating and
              building technology products using engineering and creativity. My
              vision is to improve the world through the impact of technology,
              digital transformation and the empowerment of high impact talent.
            </p>
          </div>
          {/* Menu */}
          <div className="md:flex md:w-24 md:h-full md:mr-8 hidden flex-col items-start justify-center "></div>
        </div>
      </main>
      <Particles />
    </>
=======
    <main className="min-h-screen bg-black text-white">
      <VortexBackground
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={220}
        className="fixed inset-0 w-full h-screen"
      />
      <div className="relative z-10 min-h-screen w-full">
        {/* Hero Section */}
        <div className="flex items-center flex-col justify-center min-h-screen">
          <h1
            className={cn(
              "text-5xl md:text-7xl font-bold pb-8",
              "bg-clip-text text-transparent text-center",
              "bg-gradient-to-r from-white to-purple-500"
            )}
          >
            Fullstack Cloud Engineer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            11+ years of transforming business challenges into elegant technical
            solutions
          </p>
          <Button
            size="lg"
            variant="outline"
            className={cn(
              "border-purple-500 text-purple-500",
              "hover:bg-purple-500 hover:text-white transition-all"
            )}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Let's Build Something Amazing
          </Button>
        </div>
        {/* Capabilities Section */}
        <section className="py-20 px-4">
          <FeaturesSection />
        </section>
        {/* Work Showcase Section */}
        <section className="py-20 bg-gray-900">
          <div className="w-full">
            <Timeline data={projects} />
          </div>
        </section>
        {/* Contact Section */}
        <Contact />
      </div>
    </main>
>>>>>>> Stashed changes
  );
};
