import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { menu, close, moon, sun } from "../../assets/icons/icons";

interface NavigationProps {
  title: string;
  mail: string;
  socials: Socials;
  bgColor: string;
  toggleDarkMode: () => void;
  sectionRefs: { name: string; ref: React.RefObject<HTMLElement> }[];
}

interface NavigationItemsProps {
  sectionRefs: { name: string; ref: React.RefObject<HTMLElement> }[];
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface MediaProps {
  sectionRefs: { name: string; ref: React.RefObject<HTMLElement> }[];
  socials: { [key: string]: { name: string; image: string; link: string } };
  mail: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}
interface MediaRightProps {
  sectionRefs: { name: string; ref: React.RefObject<HTMLElement> }[];
  mail: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface Socials {
  [key: string]: Platform;
}

interface Platform {
  name: string;
  image: string;
  link: string;
}

export const Navigation: React.FC<NavigationProps> = ({ title, mail, bgColor, socials, toggleDarkMode, sectionRefs, }) => {
  const [activeSection, setActiveSection] = useState<string>(sectionRefs[0]?.name || ""); const [darkMode, setDarkMode] = useState(false);
  const [media, setMedia] = useState<MediaProps | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the matching section in sectionRefs
            const matchingSection = sectionRefs.find(section => section.ref.current === entry.target);

            // If a matching section is found, set activeSection
            if (matchingSection) {
              setActiveSection(matchingSection.name); // Set activeSection to the name of the matching section
            }
          }
        });
      },
      { threshold: 0.7 } // Adjust this value for when to trigger the change
    );

    sectionRefs.forEach((section) => {
      if (section.ref.current) {
        observer.current?.observe(section.ref.current);
      }
    });

    return () => {
      if (observer.current) {
        sectionRefs.forEach((section) => {
          if (section.ref.current) {
            observer.current?.unobserve(section.ref.current);
          }
        });
      }
    };
  }, [sectionRefs]);



  useEffect(() => {
    setMedia({ socials, sectionRefs, mail, activeSection, setActiveSection });
  }, [socials, sectionRefs, mail, activeSection, setActiveSection]);

  const handleActiveSection = (name: string) => {
    setActiveSection(name);
  }



  return (
    <div className={`grid grid-cols-3  p-5 ${bgColor} shadow-main-100 shadow-lg`}    >
      <h2 className="font-DMMono font-black text-xl">{title}</h2>
      <div className="col-span-2 flex flex-row justify-end">
        <NavigationItems sectionRefs={sectionRefs} activeSection={activeSection} setActiveSection={handleActiveSection} />
        <button onClick={() => { toggleDarkMode(); setDarkMode(!darkMode) }}>
          {darkMode ?
            <Image className={`bg-main-25`} src={moon} alt="darkmode" width={26} height={26} /> :
            <Image src={sun} alt="darkmode" width={26} height={26} />}
        </button>
        <Media sectionRefs={sectionRefs} socials={socials} mail={mail} activeSection={activeSection} setActiveSection={handleActiveSection} />
      </div>
    </div >
  );
};

const NavigationItems: React.FC<NavigationItemsProps> = ({ sectionRefs, activeSection, setActiveSection }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = (MenuOpen: boolean) => setMenuIsOpen(MenuOpen);

  const RenderMenu = (menuIsOpen: boolean) => menuIsOpen && (
    <div className="absolute top-20 left-0 grid grid-cols-3 flex-row w-full h-full z-50 border-t-2 border-main-50">
      <div className="col-start-3 bg-main-25 h-2/3  border-l-2 border-main-50 ">
     
        {sectionRefs.map((link, id) => (
          <div className="flex flex-row py-4 border-solid border-b-2 border-main-50 border-collapse" key={id}>
            <li className="inline font-Hack float-right ml-4" onClick={() => {
              const sectionRef = sectionRefs.find(ref => ref.name === link.name);
              if (sectionRef && sectionRef.ref.current) {
                sectionRef.ref.current.scrollIntoView({ behavior: 'smooth' });
              }
            }} key={id} >
              <div className="inline text-accent-25 text-base ">{id}</div>
              <div className="inline text-main-10  ">/{link.name}</div>
            </li>
          </div>
        )).reverse()}

      </div>
    </div>
  );

  return (
    <ul className="md:text-right col-span-2">
      {sectionRefs.map((section, id) => (
        <li
          key={id}
          className={`hidden md:inline font-Hack float-right ml-4 ${activeSection === section.name ? 'bg-main-10' : ''}`}
          onClick={() => {
            setActiveSection(section.name);
            if (section.ref.current) {
              section.ref.current.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {section.name}
        </li>
      )).reverse()
      }
      <div className="float-right ml-4 md:hidden">
        <Image src={menuIsOpen ? close : menu} alt="Menu" width={40} height={40} priority onClick={() => setMenuIsOpen(!menuIsOpen)} />
        {RenderMenu(menuIsOpen)}
      </div>
    </ul >
  );
};



const Media: React.FC<MediaProps> = ({ sectionRefs, socials, mail, activeSection, setActiveSection }) => {
  return (
    <div className=''>
      <MediaLeft socials={socials} />
      <MediaRight sectionRefs={sectionRefs} mail={mail} activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}
function MediaLeft({ socials }: { socials: Socials }) {
  return (
    <div className='hidden md:block fixed w-10 right-auto bottom-0 left-10'>
      <div className='flex flex-col items-center relative'>
        {Object.keys(socials).map((key) => (
          <img key={key} src={socials[key]?.image || ''} className='h-6 m-2 ' alt={key} />
        ))}
        <hr className='h-[8vh] w-[0.2vw] mb-0 m-auto bg-main-10 text-main-10 item-center' />
      </div>
    </div>
  );
}

const MediaRight: React.FC<MediaRightProps> = ({ sectionRefs, mail, activeSection, setActiveSection }) => {
  return (
    <div className='fixed bottom-0 right-10 w-10 left-auto'>
      <div className='flex flex-col items-center h-[45vh]'>
        {sectionRefs.map((section, id) => (
          <div
            key={id}
            className={`h-2 w-2 border-solid border-2 border-main-10 rotate-45 m-2 ${activeSection === section.name ? 'bg-main-10' : ''}`}
            onClick={() => {
              setActiveSection(section.name);
              if (section.ref?.current) {
                section.ref.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        ))}
      </div>
      <div className='flex flex-col item-center vertical-rl w-10'>
        <a className='mt-[-14vh] text-accent-25 font-Hack rotate-90 text-[16px]' href={`mailto:${mail}`}>
          {mail}
        </a>
      </div>
      <hr className='h-[8vh] w-[0.2vw] mb-0 m-auto bg-main-10 text-main-10 item-center' />
    </div>
  );
}