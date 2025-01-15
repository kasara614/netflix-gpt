import React from "react";

const Footer = () => {
  return (
    <div className="h-80 w-full bg-black text-white flex flex-wrap justify-evenly items-center">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl font-bold">Questions?</h1>
      </div>
      <div className="w-full flex justify-evenly flex-wrap gap-y-4">
        <ul className="flex flex-wrap justify-evenly w-9/12 underline cursor-pointer">
          <li>FAQ</li>
          <li>Help Centre</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
