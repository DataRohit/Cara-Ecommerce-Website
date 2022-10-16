import React from "react";
import Typewriter from "typewriter-effect";

const BlogBanner1 = () => {
  return (
    <section
      id="page-header"
      className="bg-blog-page-header bg-cover w-full h-[40vh] flex justify-center text-center flex-col p-[14px]"
    >
      <h2 className="font-bold text-4xl md:text-6xl pb-[15px] text-white">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: ["#readmore"],
          }}
        />
      </h2>
      <p className="text-base md:text-xl font-medium text-white">
        Read all cause studies about our products!
      </p>
    </section>
  );
};

export default BlogBanner1;
