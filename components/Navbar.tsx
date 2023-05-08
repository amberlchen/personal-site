import Link from "next/link";
import { useState } from "react";

import { Gilda_Display, Overpass } from "next/font/google";

const cormorant = Gilda_Display({ weight: "400", subsets: ["latin"] });
const overpass = Overpass({ weight: "600", subsets: ["latin"] });

const MENU_ITEMS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Travel Journal",
    link: "/travel-journal",
  },
];

const CollapsedMenu = () => {
  // TODO: Reset showMenu once screen is resized
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`
        z-10
        visible
        sm:invisible
        ${
          showMenu
            ? "dark:stroke-black dark:fill-black stroke-white fill-white"
            : "dark:stroke-white dark:fill-white stroke-black fill-black"
        }
        absolute top-0 right-0 py-2 px-2`}
        onClick={toggleMenu}
      >
        <svg viewBox="0 0 100 80" width="32" height="32">
          <rect width="100" height="4"></rect>
          <rect y="30" width="100" height="4"></rect>
          <rect y="60" width="100" height="4"></rect>
        </svg>
      </div>

      <div
        className={`
     transition-transform
     transition-opacity
     duration-700
        bg-black
        dark:bg-white
     sm:invisible
     ${showMenu ? "-translate-y-0 " : "-translate-y-150"}

     
     `}
      >
        <nav
          className={`${cormorant.className} ${
            showMenu ? "visible h-screen" : "invisible h-0"
          } text-sm text-white dark:text-black flex-col items-stretch flex justify-center py-8
        `}
        >
          {MENU_ITEMS.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              onClick={toggleMenu}
              className="self-center px-5 py-2 uppercase"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export const Navbar = () => {
  return (
    <>
      <nav
        className={`${cormorant.className} text-sm items-stretch flex justify-center py-8
        hidden
        sm:flex
        text-black dark:text-white
        `}
      >
        {MENU_ITEMS.map((item, idx) =>
          idx !== 1 ? (
            <>
              <Link
                href={item.link}
                key={item.title}
                className="self-center px-5 py-2 uppercase"
              >
                {item.title}
              </Link>
            </>
          ) : (
            <>
              <Link
                href={item.link}
                key={item.title}
                className="self-center px-5 py-2 uppercase"
              >
                {item.title}
              </Link>
              <h3
                className={`${overpass.className} self-center text-4xl px-5 py-2`}
              >
                AMBER CHEN
              </h3>
            </>
          )
        )}
      </nav>

      <CollapsedMenu />
    </>
  );
};
