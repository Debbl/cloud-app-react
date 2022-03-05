import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-screen h-[80px] bg-zinc-200 drop-shadow-lg">
      <div className="flex justify-between items-center px-2 w-full h-full">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden pr-4 md:flex">
          <button className="mr-4 text-black bg-transparent border-none">
            Sign In
          </button>
          <button className="py-3 px-8">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <XIcon className="w-5" /> : <MenuIcon className="w-5" />}
        </div>
      </div>

      <ul className={nav ? 'absolute px-8 w-full bg-zinc-200' : 'hidden'}>
        <li className="w-full border-b-2 border-zinc-300">Home</li>
        <li className="w-full border-b-2 border-zinc-300">About</li>
        <li className="w-full border-b-2 border-zinc-300">Support</li>
        <li className="w-full border-b-2 border-zinc-300">Platforms</li>
        <li className="w-full border-b-2 border-zinc-300">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="py-3 px-8 mb-4 text-indigo-600 bg-transparent">
            Sign In
          </button>
          <button className="py-3 px-8">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}
