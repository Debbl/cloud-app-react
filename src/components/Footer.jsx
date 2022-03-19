import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="py-4 px-2 mt-24 w-full text-gray-300 bg-slate-900">
      <div className="grid grid-cols-2 py-8 mx-auto max-w-[1240px] border-b-2 border-gray-600 md:grid-cols-6">
        <div>
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Date</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="pt-2 font-bold uppercase">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="pt-2 font-bold uppercase">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="pt-2 font-bold uppercase">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <form action="">
            <input
              className="p-2 mr-4 mb-4 w-full rounded-md"
              type="email"
              placeholder="Enter your email"
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex justify-between py-4 px-2 mx-auto max-w-[1240px] text-center sm:flex-row">
        <p>2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between pt-4 text-2xl sm:w-[300px]">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}
