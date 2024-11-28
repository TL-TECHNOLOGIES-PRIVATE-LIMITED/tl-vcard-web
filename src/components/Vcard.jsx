import React from "react";
import logo from "../assets/TL-LOGO.jpg";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

const BusinessCard = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover font-mono bg-black relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg?t=st=1732622332~exp=1732625932~hmac=a9c03c0b1272532d8e8e5948f92aa5f8ef46be6b8946f9b5860edebd4a11d3a0&w=826')",
      }}
    >
      <div className="absolute inset-0 bg-black/10 z-10"></div>
      <div
        className="w-[90%] sm:w-[500px] max-w-[500px] bg-cover bg-center border-stone-300 border h-fit rounded-3xl shadow-lg overflow-hidden p-4 relative"
        style={{
          backgroundImage:
            "url('https://www.ul.com/sites/default/files/styles/hero_boxed_width/public/2020-06/GettyImages-692023989.jpg?itok=ezibfSE6')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 backdrop-blur-xl bg-black/25 z-10"></div>

        {/* Logo and Header */}
        <div className="relative z-20 flex flex-wrap items-center space-x-4">
          <div
            className="md:h-14 md:w-14 w-10 h-10 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg sm:text-2xl text-white">TL Technologies</h1>
            <p className="text-sm sm:text-base text-white">
              Innovative digital solution company
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="relative z-20 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-end mt-6">
          {/* Contact Details */}
          <div className="flex flex-col ">
            <div className="flex items-center gap-2  text-stone-300 p-2 rounded-xl">
              <FaPhone className="text-teal-200" />
              <p className="text-xs sm:text-sm">+91 90614 32814</p>
            </div>
            <div className="flex items-center gap-2  text-stone-300 p-2 rounded-xl">
              <FaLocationDot className="text-teal-200" />
              <p className="text-xs sm:text-sm">Vilame 1st Floor, Laham Commercial Complex, <br /> Pallinada, Kazhakkoottam, Kerala 69558</p>
            </div>
            <div className="flex items-center gap-2  text-stone-300 p-2 rounded-xl">
              <FaGlobe className="text-teal-200" />
              <a href="sangig@tltechnologies.net" target="_blank" className="text-xs sm:text-sm">sangig@tltechnologies.net</a>
            </div>
            <div className="flex items-center gap-2  text-stone-300 p-2 rounded-xl">
              <MdEmail className="text-teal-200" />
              <a href="https://tltechnologies.net" target="_blank" className="text-xs sm:text-sm">www.tltechnologies.net</a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 items-end w-full sm:w-auto">
          <button
  className="flex items-center justify-between gap-2 bg-black/20 text-green-400 border border-transparent hover:border-stone-50 rounded-xl p-2 transition-all duration-300 ease-in-out"
  onClick={() => {
    window.open(
      "https://api.whatsapp.com/send/?text=Here+is+TL+Technologies+Digital+Business+Card.+Save+it+for+quick+access%3A+https%3A%2F%2Ftl-vcard-web.vercel.app%2F&type=custom_url&app_absent=0",
      "_blank"
    );
  }}
>
  <span className="text-stone-200 text-xs sm:text-sm">Share</span>
  <FaShareAlt className="text-base" />
</button>


<button
  className="flex items-center justify-between gap-2 bg-black/20 text-blue-400 border border-transparent hover:border-stone-50 rounded-xl p-2 transition-all duration-300 ease-in-out"
  onClick={() => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Technologies;TL;;;
FN:TL Technologies
ORG:TL Technologies
TITLE:Software Development Company
TEL;type=WORK,VOICE:+91 90614 32814
EMAIL;type=WORK:sangig@tltechnologies.net
URL:https://tltechnologies.net
NOTE:Professional Software Development & Digital Solutions Company
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "TL-Technologies.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <span className="text-stone-200 text-xs sm:text-sm">Save to Contact</span>
  <BiSolidContact className="text-base" />
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
