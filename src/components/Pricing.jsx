import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';

export default function Pricing() {
  return (
    <div name="pricing" className="my-24 w-full text-white">
      <div className="absolute w-full h-[800px] bg-slate-900 mix-blend-overlay"></div>
      <div className="py-12 mx-auto max-w-[1240px]">
        <div className="py-8 text-center text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="py-8 text-5xl font-bold text-white">
            The right price for your research
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            debitis excepturi repellendus perspiciatis laborum hic veniam alias
            eius nisi voluptatibus harum ea est obcaecati ipsam explicabo
            quisquam, neque dignissimos facilis.
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="relative p-8 m-4 text-slate-900 bg-white rounded-xl shadow-2xl">
            <span className="py-1 px-3 text-sm text-indigo-900 uppercase bg-indigo-200 rounded-2xl">
              Standard
            </span>
            <div>
              <p className="py-4 text-6xl font-bold">
                $49
                <span className="text-xl text-slate-500">/mo</span>
              </p>
            </div>
            <p className="py-8 text-2xl text-slate-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="text-2xl">
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <button className="py-4 my-4 w-full">Get Started</button>
            </div>
          </div>
          <div className="relative p-8 m-4 text-slate-900 bg-white rounded-xl shadow-2xl">
            <span className="py-1 px-3 text-sm text-indigo-900 uppercase bg-indigo-200 rounded-2xl">
              Premium
            </span>
            <div>
              <p className="py-4 text-6xl font-bold">
                $99<span className="text-xl text-slate-500">/mo</span>
              </p>
            </div>
            <p className="py-8 text-2xl text-slate-500">
              Lorem ipsum dolor sit amet.
            </p>
            <div className="text-2xl">
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="py-4">
                <CheckIcon className="inline-block mr-5 w-8 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <button className="py-4 my-4 w-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
