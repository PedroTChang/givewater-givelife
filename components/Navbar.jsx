import React, {useState} from 'react';
import { Transition } from "@headlessui/react"; // for smooth transition between tabs
import { Link } from "react-scroll"; // Alternate for a tag. In Next js we use Link for ref.
import Image from "next/image";
// import Logo from "../public/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        {/* for Main Navcontainer */}
      <nav className="shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            {/* first block section outer */}
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center iterms-center flex-shrink-0">
                <h1 className="font-regular text-xl cursor-pointer">
                  logo
                </h1>
              </div>
                {/* for small screen we do not show tabs */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      activeClass="home"
                      to="home"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                    >
                      Home
                  </Link>
                  <Link
                      activeClass="about"
                      to="about"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About 
                  </Link>
                  <Link
                      activeClass="projects"
                      to="Projects"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Projects
                  </Link>
                  <Link
                      activeClass="donations"
                      to="donations"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                     Donations
                  </Link>
                  <Link
                      activeClass="contact"
                      to="contact"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer bg-blue-600 text-white hover:text-white px-3 py-2 hover:bg-black rounded-md text-sm font-medium"
                    >
                      Contact 
                  </Link>
                </div>
              </div>
            </div>
            {/* Now we work on mobile responsive */}
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* basically takin the menu icon from w3 website. */}
                {/* here d is the shape code. */}
                {!isOpen ? (
                  <svg 
                    className="block h6 w-g" 
                    xmlns="http:www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColors" 
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  </svg>
                ) : ( 
                  <svg 
                      className="block h6 w-g" 
                      xmlns="http:www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColors" 
                      aria-hidden="true"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M6 18L18 6M6 6l12 12" // for cross shape
                      />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
          {/* we include transition from headlessui for smoothness in mobile experience */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duratio-75 transform"
            leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-3 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link href="/home"
                    activeClass="home"
                    to="home" 
                    smooth={true} 
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

