import Link from 'next/link';
import { useState } from 'react';

import { Gilda_Display , Overpass } from 'next/font/google';

const cormorant = Gilda_Display({ weight: '400', subsets: ['latin']});
const overpass = Overpass({ weight: "600", subsets: ['latin']});

const CollapsedMenu = () => {
    // TODO: Reset showMenu once screen is resized
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <div className='visible
        z-10
        sm:invisible absolute top-0 right-0 py-2 px-2' onClick={() => setShowMenu(!showMenu)}><svg viewBox="0 0 100 80" width="32" height="32">
        <rect width="100" height="4"></rect>
        <rect y="30" width="100" height="4"></rect>
        <rect y="60" width="100" height="4"></rect>
      </svg>
      </div>
     <div className={`${showMenu ? 'visible h-screen' : 'h-0'}  sm:invisible bg-white delay-75 opacity-${showMenu ? '100' : '0'}  transition-opacity`}>


     <nav className={`${cormorant.className} text-sm flex-col items-stretch flex justify-center py-8
        `}>
            <Link href="/" className="self-center px-5 py-2">
                HOME
            </Link>
            <Link href="/about" className="self-center px-5 py-2">
                ABOUT
            </Link>
          
            <Link href="/gallery" className="self-center px-5 py-2">
                GALLERY 
            </Link>
            <Link href="/about" className="self-center px-5 py-2">
                CONTACT 
            </Link>
        </nav>

     </div>
      </>

    );
}

export const Navbar = () => {
    return (
        <>
                <nav className={`${cormorant.className} text-sm  items-stretch flex justify-center py-8
        hidden
        sm:flex
        `}>
            <Link href="/" className="self-center px-5 py-2">
                HOME
            </Link>
            <Link href="/about" className="self-center px-5 py-2">
                ABOUT
            </Link>
            <h3 className={`${overpass.className} self-center text-4xl px-5 py-2`}>
                AMBER CHEN
            </h3>
            <Link href="/gallery" className="self-center px-5 py-2">
                GALLERY 
            </Link>
            <Link href="/about" className="self-center px-5 py-2">
                CONTACT 
            </Link>
        </nav>

   <CollapsedMenu />
        </>


    );
};