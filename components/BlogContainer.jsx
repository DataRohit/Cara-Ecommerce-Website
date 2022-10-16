import Link from "next/link";
import React from "react";

const BlogContainer = () => {
  const blogBox = ({ img, h4, p, date }) => {
    return (
      <div className="blog-box flex items-start md:items-center w-full relative pb-[90px] flex-col md:flex-row">
        <div className="blog-img w-full md:w-1/2 mr-10">
          <img src={img} alt="blog" className="w-full h-[350px] object-cover" />
        </div>
        <div className="blog-details w-full md:w-1/2">
          <h4 className="font-bold text-2xl">{h4}</h4>
          <p className="text-lg">{p}</p>
          <Link href="#">
            <a className="text-xs text-black font-bold relative transition-[0.3s] after:content-[''] after:w-[50px] after:h-[2px] after:bg-black after:absolute after:top-1 after:-right-[60px] hover:text-[#088178] hover:after:text-[#088178]">
              CONTINUE READING
            </a>
          </Link>
        </div>
        <h1 className="font-bold absolute top-[-40px] left-0 text-[70px] text-[#C9CBCE] z-[-10]">
          {date}
        </h1>
      </div>
    );
  };

  return (
    <section
      id="blog"
      className="pt-[150px] pr-[40px] md:pr-[80px] lg:pr-[120px] pl-[40px] md:pl-[80px] lg:pl-[120px]"
    >
      {blogBox({
        img: "/blog/b1.jpg",
        h4: "The Cottom-Jersey Zip-Up Hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        date: "13/01",
      })}

      {blogBox({
        img: "/blog/b2.jpg",
        h4: "The Cottom-Jersey Zip-Up Hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        date: "16/01",
      })}

      {blogBox({
        img: "/blog/b3.jpg",
        h4: "The Cottom-Jersey Zip-Up Hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        date: "10/03",
      })}

      {blogBox({
        img: "/blog/b4.jpg",
        h4: "The Cottom-Jersey Zip-Up Hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        date: "03/01",
      })}

      {blogBox({
        img: "/blog/b5.jpg",
        h4: "The Cottom-Jersey Zip-Up Hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        date: "03/01",
      })}

      {blogBox({
        img: "/blog/b6.jpg",
        h4: "The Cottom-Jersey Zip-Up Hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        date: "03/01",
      })}
    </section>
  );
};

export default BlogContainer;
