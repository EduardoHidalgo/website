import { SiGithub, SiLinkedin, SiPlatzi, SiTwitter } from "react-icons/si";

import { Particles } from "@/components/particles";
import { Link } from "@/components/link";

export interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <>
      <main className="flex min-h-full min-w-full h-screen w-screen bg-gray-900">
        <div className="pt-8 px-8 flex h-screen w-screen flex-row items-center">
          <div className="w-24 h-full ml-8 flex flex-col justify-between items-center">
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
              <div className="h-48 w-1 bg-gray-200" />
            </div>
          </div>
          {/* Content */}
          <div className="grow h-full ml-32 flex flex-col items-start justify-center">
            <p className="text-lg text-white pb-2 tracking-widest">
              Hi, my name is
            </p>
            <h1 className="text-7xl font-bold text-gray-200 pb-2">
              Eduardo Hidalgo Díaz Rugama.
            </h1>
            <h1 className="text-7xl text-gray-400 pb-8">
              I transform ideas into technology.
            </h1>
            <p className="text-xl text-gray-500 w-3/5">
              I'm a Software Engineer passionate about collaborating and
              building technology products using engineering and creativity. My
              vision is to improve the world through the impact of technology,
              digital transformation and the empowerment of high impact talent.
              Currently focused on build great products with{" "}
              <span className="text-white">
                <Link>MisFans.</Link>
              </span>
            </p>
          </div>
          {/* Menu */}
          <div className="w-24 h-full mr-8 flex flex-col items-start justify-center "></div>
        </div>
      </main>
      <Particles />
    </>
  );
};
