import { SiGithub, SiLinkedin, SiPlatzi, SiTwitter } from "react-icons/si";

import { Particles } from "@/components/particles";
import { Link } from "@/components/link";

export interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <>
      <Particles />
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
                  <SiGithub className="text-stone-200 w-6 h-6 cursor-pointer" />
                </Link>
                <Link newTab url="https://www.linkedin.com/in/eduardo-hdr/">
                  <SiLinkedin className="text-stone-200 w-6 h-6 cursor-pointer" />
                </Link>
                <Link newTab url="https://twitter.com/EduardoHidalgo0">
                  <SiTwitter className="text-stone-200 w-6 h-6 cursor-pointer" />
                </Link>
                <Link newTab url="https://platzi.com/p/EduardoHidalgo/">
                  <SiPlatzi className="text-stone-200 w-6 h-6 cursor-pointer" />
                </Link>
              </div>
              {/* Divider Inverted */}
              <div className="xl:h-48 lg:h-48 md:h-32 xs:h-24 sm:h-16 h-16 w-1 bg-stone-200" />
            </div>
          </div>
          {/* Content */}
          <div className="grow h-full w-full xl:ml-32 lg:ml-28 md:ml-16 mx-4 flex flex-col items-start justify-center">
            <p
              data-nosnippet
              className="md:text-lg text-lg text-white pb-2 tracking-widest"
            >
              Hi, my name is
            </p>
            <h1 className="md:text-6xl text-5xl font-bold text-stone-200 pb-2">
              Eduardo Hidalgo Díaz Rugama.
            </h1>
            <h1
              data-nosnippet
              className="md:text-7xl text-xl text-stone-400 md:pb-8 pb-12"
            >
              I transform ideas into technology.
            </h1>
            <p className="md:text-xl text-lg text-stone-300 md:w-3/5 w-full">
              I'm a Software Engineer passionate about collaborating and
              building technology products using engineering and creativity. My
              vision is to improve the world through the impact of technology,
              digital transformation and the empowerment of high impact talent.
            </p>
            <div className="md:text-lg text-lg text-white pb-2 tracking-widest gap-3 flex flex-row pt-4">
              CV's:
              <Link
                newTab
                url="https://docs.google.com/document/d/16DE9mg7s8_bQhA5p--NhJ_K4JJGENseVdjSUF7c0Wac/pub"
                className="underline decoration-2 text-blue-400 underline-offset-2"
              >
                English
              </Link>
            </div>
          </div>
          {/* Menu */}
          <div className="md:flex md:w-24 md:h-full md:mr-8 hidden flex-col items-start justify-center "></div>
        </div>
      </main>
    </>
  );
};
