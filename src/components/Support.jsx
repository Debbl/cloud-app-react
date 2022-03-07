import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

import supportImg from '../assets/support.jpg';

export default function Support() {
  return (
    <div name="support" className="mt-2 w-full">
      <div className="absolute w-full h-[700px] bg-gray-900/90">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] text-white">
        {/* Support */}
        <div className="py-12 px-4">
          <h2 className="pt-8 text-3xl text-center text-slate-300 uppercase">
            Support
          </h2>
          <h3 className="py-6 text-5xl font-bold text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            quam vitae iusto molestias beatae? Quae quibusdam provident enim
            praesentium fuga voluptate eveniet numquam suscipit a! Delectus,
            voluptas accusantium? Accusamus, earum.
          </p>
        </div>

        <div className="grid relative grid-cols-1 gap-x-8 gap-y-16 px-4 pt-12 text-black sm:pt-20 lg:grid-cols-3">
          {/* Sales */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="p-4 mt-[-4rem] w-16 text-white bg-indigo-600 rounded-lg" />
              <h3 className="my-6 text-2xl font-bold">Sales</h3>
              <p className="h-60 text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto quibusdam obcaecati voluptas accusamus eos aspernatur
                aliquam blanditiis. At rem quis natus molestiae ipsa possimus
                fuga facilis nemo. Voluptatem, quasi dolore.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact US <ArrowSmRightIcon className="ml-2 w-5" />
              </p>
            </div>
          </div>
          {/* Technical Support */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="p-4 mt-[-4rem] w-16 text-white bg-indigo-600 rounded-lg" />
              <h3 className="my-6 text-2xl font-bold">Technical Support</h3>
              <p className="h-60 text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt laboriosam quibusdam porro quod! Eveniet necessitatibus
                mollitia ratione ad laudantium aspernatur corporis, sequi
                tempora, excepturi quod facere consequuntur dolores vitae
                voluptas?
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact US
                <ArrowSmRightIcon className="ml-2 w-5" />
              </p>
            </div>
          </div>
          {/* Media Inquires */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="p-4 mt-[-4rem] w-16 text-white bg-indigo-600 rounded-lg" />
              <h3 className="my-6 text-2xl font-bold">Media Inquiries</h3>
              <p className="h-60 text-xl text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                dignissimos velit iure incidunt eaque blanditiis tenetur quo
                perferendis, reprehenderit ab recusandae rem inventore natus sed
                cupiditate unde consequatur officia explicabo!
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact US
                <ArrowSmRightIcon className="ml-2 w-5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
