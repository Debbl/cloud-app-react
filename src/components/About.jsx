import React from 'react';

export default function About() {
  return (
    <div name="about" className="my-32 w-full">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="py-6 text-3xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quod sunt, ad eum dolor, quaerat soluta nulla omnis accusamus
            provident sit similique ducimus architecto facere quia dolorum quam
            deleniti officia.
          </p>
        </div>

        <div className="grid gap-1 px-2 text-center md:grid-cols-3">
          <div className="py-8 rounded-xl border shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="mt-2 text-gray-400">Completion</p>
          </div>
          <div className="py-8 rounded-xl border shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="mt-2 text-gray-400">Delivery</p>
          </div>
          <div className="py-8 rounded-xl border shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100k</p>
            <p className="mt-2 text-gray-400">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
