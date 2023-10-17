import {
  Brand,
  Guides,
  PageContaier,
  SectionHeading,
  Text,
  ZStack,
} from "@/lib/ui";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="border-b backdrop-blur-lg bg-white/70 sticky top-0 z-50">
        <PageContaier className="h-20 grid grid-cols-5">
          <div className="col-span-4 md:col-span-1 flex flex-row items-center justify-start">
            <Link href="/">
              <Brand />
            </Link>
          </div>
          <div className="hidden md:col-span-3 md:flex flex-row items-center justify-center">
            <nav className="">
              <ul className="flex flex-row gap-12 text-sm font-bold uppercase text-neutral-500">
                {NAV_LINKS.map((o, i) => (
                  <li key={i}>
                    <Link className="py-4" href={o.href}>
                      {o.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-span-1 flex flex-row items-center justify-end">
            <button className="border border-blue-950 hover:bg-blue-950 hover:text-white text-blue-950 bg-white h-10 px-4 flex items-center justify-center text-sm uppercase font-bold shadow-md">
              Get&nbsp;a&nbsp;Quote
            </button>
          </div>
        </PageContaier>
      </header>

      {/* MAIN */}
      <main className="bg-slate-100">
        {/* HERO */}
        <ZStack>
          <PageContaier className="h-full">
            <Guides />
          </PageContaier>
          <PageContaier className="hidden xl:flex items-center justify-end h-full">
            <Image src="/img/hero-1.png" height="570" width="570" alt="" />
          </PageContaier>
          <PageContaier className="py-24 md:pt-40 md:pb-56">
            <div className="border-l-4 border-l-blue-950 border-black pl-4 md:pl-8 flex flex-col items-start justify-center">
              <Text className="text-slate-400 text-md font-extrabold uppercase">
                We are netra construction
              </Text>
              <Text
                as="h1"
                className="mt-4 text-blue-950 text-4xl md:text-6xl font-black uppercase"
              >
                We build Homes, <br />
                Offices and Spaces.
              </Text>
              <Text className="mt-4 text-md md:w-3/5">
                Witness the evolution of an empty place into a majestic
                masterpiece as our construction professionals blend expertise,
                materials, and innovation to create architectural marvels.
              </Text>
              <div className="mt-12 flex flex-row gap-8">
                {/* <button className="border border-black bg-black text-white h-10 px-4 flex items-center justify-center text-sm uppercase font-bold shadow-md">Get a Quote</button> */}
                <button className="border border-blue-950 hover:bg-blue-950 hover:text-white text-blue-950 bg-white h-10 px-4 flex flex-row gap-3 items-center justify-center text-base uppercase font-bold shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="animate-bounce mt-1 w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Book a Call
                </button>
              </div>
            </div>
          </PageContaier>
        </ZStack>

        <div className="w-full border">
          <PageContaier>
            <div
              id="projects"
              className="scroll-mt-20 bg-white shadow-2xl w-full"
            >
              {/* PROJECTS */}
              <SectionHeading
                title="OUR PROJECTS"
                subtitle="We are done and dusted with"
              />
              <div className="grid grid-cols-1 md:grid-cols-4 pb-32">
                {PROJECTS.map((project, index) => (
                  <div key={index} className="h-96 border">
                    <Image
                      className="h-full object-cover"
                      alt="portrait"
                      src={project.src}
                      width={800}
                      height={1200}
                    />
                  </div>
                ))}
              </div>

              {/* ABOUT */}
              <SectionHeading
                title="OUR SERVICES"
                subtitle="We provide the following services"
              />
              <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-16 gap-8 pb-32">
                {SERVICES.map((service, index) => (
                  <div key={index} className="border p-6">
                    <Text className="font-semibold text-lg">
                      {service.title}
                    </Text>
                    <Text className="mt-2 text-sm">{service.desc}</Text>
                  </div>
                ))}
              </div>

              {/* ABOUT */}
              <SectionHeading id="about" title="OUR TEAM" subtitle="We comprise of talented individuals" />
              <div className="px-4 md:px-16 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
                <div className="border p-4 md:p-8">
                  <Image
                    className="h-[40rem] object-cover grayscale"
                    alt="portrait"
                    src="/img/portrait.avif"
                    width={800}
                    height={1200}
                  />
                </div>
                <div className="md:px-8">
                  <Text className="text-lg font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </Text>
                  <br />
                  <Text className="text-md text-neutral-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </Text>
                </div>
              </div>
            </div>
          </PageContaier>
        </div>

        <ZStack id="contact">
          <PageContaier className="h-full">
            <Guides />
          </PageContaier>
          <PageContaier className="py-24 md:py-48">
            <div className="border-l-4 border-l-blue-950 border-black pl-4 md:pl-8 flex flex-col gap-8 items-start justify-center">
              <Text className="text-blue-950 text-4xl md:text-6xl font-black uppercase">
                GET IN TOUCH
              </Text>
              <Text className="text-md w-2/3">
                Witness the evolution of an empty place into a majestic
                masterpiece as our construction professionals blend expertise,
                materials, and innovation to create architectural marvels.
              </Text>
              <div className="flex flex-row gap-8">
                <button className="border border-blue-950 hover:bg-blue-950 hover:text-white text-blue-950 bg-white h-10 px-4 flex flex-row gap-3 items-center justify-center text-base uppercase font-bold shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="animate-bounce mt-1 w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Book a Call
                </button>
              </div>
            </div>
          </PageContaier>
        </ZStack>

        {/*  */}
      </main>

      {/* CTA SECTION */}

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <PageContaier className="py-8 flex flex-row items-center justify-between">
          <Link href="/">
            <Brand />
          </Link>
        </PageContaier>
        <PageContaier className="">
          <div className="border-t mt-20 h-20 flex flex-col gap-2 md:flex-row md:items-center justify-center md:justify-between">
            <p className="text-xs md:text-sm text-neutral-500">
              © 2023{" "}
              <span className="text-black font-medium">Netra Construction</span>{" "}
              Pvt. Ltd. All Rights Reserved.
            </p>
            <p className="text-xs md:text-sm leading-loose text-neutral-500">
              Designed &amp; Developed by{" "}
              <a
                href="https://www.honeyhexa.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-blue-500"
              >
                Honey Hexa
              </a>
              .
            </p>
          </div>
        </PageContaier>
      </footer>
    </>
  );
}

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Design & Build",
    desc: "Integrated approach from initial design and planning to construction, offering clients a streamlined and efficient approach to project delivery.",
    src: "/img/portrait.avif",
  },
  {
    title: "Project Management",
    desc: "Ensure scheduling, budgeting, quality control, and risk management, are efficiently managed to achieve successful project completion.",
    src: "/img/portrait.avif",
  },
  {
    title: "Consultancy",
    desc: "Services in the construction industry are essential for providing expertise, guidance, and advice to clients, project teams, and stakeholders.",
    src: "/img/portrait.avif",
  },
  {
    title: "Contracting",
    desc: "Responsible for hiring subcontractors, coordinating the work, obtaining permits, and ensuring the project is completed on time and within budget.",
    src: "/img/portrait.avif",
  },
];

const PROJECTS = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    src: "/img/project-1.avif",
  },
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    src: "/img/project-2.avif",
  },
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    src: "/img/project-3.avif",
  },
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    src: "/img/project-4.avif",
  },
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    src: "/img/project-5.avif",
  },
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    src: "/img/project-6.avif",
  },
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    src: "/img/project-7.avif",
  },
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    src: "/img/project-8.avif",
  },
];
