import React from 'react';
import { MenuIcon, XIicon } from '@heroicons/react/outline';

export default function Navbar() {
  return (
    <div className="fixed w-screen h-[80px] bg-zinc-200 drop-shadow-lg">
      <div className="flex justify-between items-center px-2 w-full h-full">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">BRAND.</h1>
        </div>
      </div>
      <MenuIcon className="w-5" />
    </div>
  );
}
