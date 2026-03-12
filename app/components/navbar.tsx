'use client'; // Needed for interactive features like state/event listeners

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to check the current path for active links

export default function Navbar() {
  const pathname = usePathname(); // Get current path for styling active link

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="container lg:w-1/2 md:w-full mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          GOT API
        </Link>
        <div>
          <Link
            href="/"
            className={`mr-4 ${pathname === '/' ? 'text-blue-400' : 'text-white'}`}
          >
            Home
          </Link>
          <Link
            href="/characters"
            className={`mr-4 ${pathname === '/characters' ? 'text-blue-400' : 'text-white'}`}
          >
            Characters
          </Link>
          <Link
            href="/continents"
            className={`mr-4 ${pathname === '/continents' ? 'text-blue-400' : 'text-white'}`}
          >
            Continents
          </Link>
          <Link
            href="/houses"
            className={`${pathname === '/houses' ? 'text-blue-400' : 'text-white'}`}
          >
            Houses
          </Link>
        </div>
      </div>
    </nav>
  );
}
