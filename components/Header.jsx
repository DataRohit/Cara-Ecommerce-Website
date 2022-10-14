// Importing all the necessary files
import { ShoppingBagIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Writing the custom reusable styles
const navbar_li_style = "py-0 px-[20px] relative";
const navbar_li_a_style =
  "text-base font-bold text-[#1A1A1A] transtion duration-[0.3s] ease hover:text-[#6275D9]";
const navbar_li_a_active_style =
  "text-[#6275D9] after:content-[''] after:w-[30%] after:h-[4px] after:rounded-sm after:bg-[#6275D9] after:absolute after:bottom-[-4px] after:left-[20px]";
const navbar_li_a_hover_active_style =
  "hover:after:content-[''] hover:after:w-[30%] hover:after:h-[4px] hover:after:rounded-sm hover:after:bg-[#6275D9] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-[20px] hover:transtion hover:duration-[0.3s] hover:ease hover:text-[#6275D9]";

// Header Component
const Header = () => {
  // Initializing the nextjs router
  const router = useRouter();

  // Using useState hook to set the currnet page path
  const [pageRoute, setPageRoute] = useState("");

  // Using useEffect hook to get and set the current page path
  useEffect(() => {
    setPageRoute(router.pathname.split("/")[1]);
  });

  // Custom reusable function for navbar list items
  const navbar_li_component = ({ route = "", content = "Home" }) => {
    return (
      <li className={navbar_li_style}>
        <a
          href={`/${route}`}
          className={`${navbar_li_a_style} ${navbar_li_a_hover_active_style} ${
            pageRoute === route && navbar_li_a_active_style
          }`}
        >
          {content}
        </a>
      </li>
    );
  };

  return (
    <section
      id="header"
      className="flex items-center justify-between py-[20px] px-[80px] bg-[#E3E6F3] shadow-header z-50 sticky top-0 left-0"
    >
      <a href="#">
        <img src="/logo.png" alt="Cara" className="logo" />
      </a>
      <div>
        <ul id="navbar" className="flex items-center justify-center ">
          {navbar_li_component({ route: "", content: "Home" })}
          {navbar_li_component({ route: "shop", content: "Shop" })}
          {navbar_li_component({ route: "blog", content: "Blog" })}
          {navbar_li_component({ route: "about", content: "About" })}
          {navbar_li_component({ route: "contact", content: "Contact" })}
          {navbar_li_component({
            route: "cart",
            content: <ShoppingBagIcon className="h-6 w-6 mb-1" />,
          })}
        </ul>
      </div>
    </section>
  );
};

export default Header;
