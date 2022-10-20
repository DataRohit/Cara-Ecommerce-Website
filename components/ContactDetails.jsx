import { MapIcon, InboxIcon } from "@heroicons/react/outline";
import React from "react";
import { FaClock, FaEnvelope, FaMap, FaPhoneAlt } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <section
      id="contact-details"
      className="p-[40px] md:section-p1 flex flex-col lg:flex-row items-center justify-between "
    >
      <div className="details w-full lg:w-[40%]">
        <span className="font-semibold text-sm">GET IN TOUCH</span>
        <h2 className="font-bold leading-[35px] py-[20px] text-3xl">
          Visit one of our agency locations or contact us today
        </h2>
        <h3 className="font-bold text-base pb-[15px]">Head Office</h3>
        <div>
          <li className="list-none flex py-[10px]">
            <FaMap className="text-sm" />
            <p className="p-0 text-sm m-0 pl-[22px]">
              56 Glassford Street Glasgow G1 1UL New York
            </p>
          </li>
          <li className="list-none flex py-[10px]">
            <FaEnvelope className="text-sm" />
            <p className="p-0 text-sm m-0 pl-[22px]">contact@gmail.com</p>
          </li>
          <li className="list-none flex py-[10px]">
            <FaPhoneAlt className="text-sm" />
            <p className="p-0 text-sm m-0 pl-[22px]">
              +01 2222 365 / (+91) 01 2345 6789
            </p>
          </li>
          <li className="list-none flex py-[10px]">
            <FaClock className="text-sm" />
            <p className="p-0 text-sm m-0 pl-[22px]">
              Monday to Saturday: 9.00 am to 16:00 pm
            </p>
          </li>
        </div>
      </div>
      <div className="map w-full lg:w-[55%] h-[300px] lg:h-[400px] mt-[30px] lg:mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14888.734079617625!2d79.0034903!3d21.1052484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4fd4cb2d05b49c7d!2sG.%20H.%20Raisoni%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1666265711507!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactDetails;
