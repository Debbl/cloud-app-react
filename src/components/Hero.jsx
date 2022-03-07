import React from 'react';
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid';

import bgImg from '../assets/cyber-bg.png';

export default function Hero() {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-screen bg-zinc-200"
    >
      <div className="grid m-auto max-w-[1240px] md:grid-cols-2">
        <div className="flex flex-col justify-center py-8 px-2 w-full md:items-start">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-4xl font-bold md:text-7xl">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 my-4 sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div className="flex absolute bottom-[5%] flex-col py-8 mx-1 text-center bg-zinc-200 rounded-xl border border-slate-300 shadow-xl md:left-1/2 md:min-w-[760px] md:-translate-x-1/2">
          <p>Data Services</p>
          <div className="flex flex-wrap justify-between px-4">
            <p className="flex py-2 px-4 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-600" />
              App Security
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" />
              App Dashboard Design
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" />
              App Cloud Data
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" />
              App API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
