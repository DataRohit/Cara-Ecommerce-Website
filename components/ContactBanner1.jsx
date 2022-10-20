import React from "react";
import Typewriter from "typewriter-effect";

const ContactBanner1 = () => {
  return (
    <section
      id="page-header"
      className="bg-contact-page-header bg-cover w-full h-[40vh] flex justify-center text-center flex-col p-[14px]"
    >
      <h2 className="font-bold text-4xl md:text-6xl pb-[15px] text-white">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: ["#ContactUs"],
          }}
        />
      </h2>
      <p className="text-base md:text-xl font-medium text-white">
        Want to get in touch with us? We would love to hear from you.
      </p>
    </section>
  );
};

export default ContactBanner1;
