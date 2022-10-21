// Importing all the necessary files
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbUserExclamation, TbUserCheck } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

// Writing the custom reusable styles
const navbar_li_style = "py-0 px-[20px] relative mb-[25px] lg:mb-0 list-none";
const navbar_li_a_style =
  "text-base font-bold text-[#1A1A1A] transtion duration-[0.3s] ease hover:text-[#6275D9] text-center";
const navbar_li_a_active_style =
  "text-[#6275D9] after:content-[''] after:w-[30%] after:h-[4px] after:rounded-sm after:bg-[#6275D9] after:absolute after:bottom-[-4px] after:left-[20px] after:bg-transparent lg:bg-inherit";
const navbar_li_a_hover_active_style =
  "hover:after:content-[''] hover:after:w-[30%] hover:after:h-[4px] hover:after:rounded-sm hover:after:bg-[#6275D9] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-[20px] hover:transtion hover:duration-[0.3s] hover:ease hover:text-[#6275D9]";

const navbar_li_a_account_true_style =
  "text-green-600 hover:after:content-[''] hover:after:w-[30%] hover:after:h-[4px] hover:after:rounded-sm hover:after:bg-green-600 hover:after:absolute hover:after:bottom-[-4px] hover:after:left-[20px] hover:transtion hover:duration-[0.3s] hover:ease hover:text-green-600";

const navbar_li_a_account_false_style =
  "text-red-600 hover:after:content-[''] hover:after:w-[30%] hover:after:h-[4px] hover:after:rounded-sm hover:after:bg-red-600 hover:after:absolute hover:after:bottom-[-4px] hover:after:left-[20px] hover:transtion hover:duration-[0.3s] hover:ease hover:text-red-600";

// Header Component
const Header = () => {
  const { data: session } = useSession();

  const items = useSelector(selectItems);

  // Initializing the nextjs router
  const router = useRouter();

  // Using useState hook to set the currnet page path
  const [pageRoute, setPageRoute] = useState("");

  // Using useEffect hook to get and set the current page path
  useEffect(() => {
    setPageRoute(router.pathname.split("/")[1]);
  });

  // Custom reusable function for navbar list items
  const navbar_li_component = ({
    route = "",
    content = "Home",
    account = null,
  }) => {
    return (
      <li className={navbar_li_style}>
        <Link href={`/${route}`}>
          <a
            className={`${navbar_li_a_style} ${
              account === null && navbar_li_a_hover_active_style
            } ${
              pageRoute === route &&
              account === null &&
              navbar_li_a_active_style
            } ${account === true && navbar_li_a_account_true_style} ${
              account === false && navbar_li_a_account_false_style
            }`}
          >
            {content}
          </a>
        </Link>
      </li>
    );
  };

  // Variable to store the state of the navbar
  const [navbarState, setNavbarState] = useState(false);

  return (
    <section
      id="header"
      className="flex items-center justify-between py-[10px] md:py-[20px] px-[30px] md:px-[80px] bg-[#E3E6F3] shadow-header z-50 sticky top-0 left-0"
    >
      <Link href="/">
        <a>
          <img src="/logo.png" alt="Cara" className="logo" />
        </a>
      </Link>
      <div>
        <ul
          id="navbar"
          className={`flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center fixed lg:static top-0  h-screen lg:h-auto w-[300px] lg:w-auto bg-[#E3E6F3] lg:bg-transparent shadow-header2 lg:shadow-transparent pt-[80px] lg:pt-0 pl-[10px] lg:pl-0 transition-[0.3s] duration-300 ${
            navbarState ? "right-0 z-50" : "-right-[300px] z-50"
          }`}
        >
          <FaTimes
            className="h-6 w-6 mb-1 top-[30px] left-[30px] text-[#222] lg:hidden text-2xl absolute"
            onClick={() => setNavbarState(!navbarState)}
          />
          {navbar_li_component({ route: "", content: "Home" })}
          {navbar_li_component({ route: "shop", content: "Shop" })}
          {navbar_li_component({ route: "blog", content: "Blog" })}
          {navbar_li_component({ route: "contact", content: "Contact" })}
          {navbar_li_component({ route: "orders", content: "Orders" })}

          {session
            ? navbar_li_component({
                route: pageRoute,
                content: (
                  <TbUserCheck
                    className="h-6 w-6 mb-1 hidden lg:block"
                    onClick={!session ? signIn : signOut}
                  />
                ),
                account: true,
              })
            : navbar_li_component({
                route: "",
                content: (
                  <TbUserExclamation
                    className="h-6 w-6 mb-1 hidden lg:block"
                    onClick={!session ? signIn : signOut}
                  />
                ),
                account: false,
              })}

          {navbar_li_component({
            route: "cart",
            content: (
              <>
                <ShoppingBagIcon className="h-6 w-6 mb-1 hidden lg:block" />
                <span className="absolute -top-2 right-1 text-center rounded-full text-black text-sm h-4 w-4 hidden lg:block bg-[#95a7ff]">
                  {items?.length}
                </span>
              </>
            ),
          })}
        </ul>
      </div>
      <div
        id="mobile"
        className="flex items-center justify-center lg:hidden text-2xl"
      >
        {session ? (
          <TbUserCheck
            className={`h-6 w-6 mb-1 mr-3 ${navbar_li_a_account_true_style}`}
            onClick={!session ? signIn : signOut}
          />
        ) : (
          <TbUserExclamation
            className={`h-6 w-6 mb-1 mr-3 ${navbar_li_a_account_false_style}`}
            onClick={!session ? signIn : signOut}
          />
        )}
        <Link href={`/cart`}>
          <a className={`relative ${navbar_li_a_style}`}>
            <ShoppingBagIcon className="h-6 w-6 mb-1 mr-3" />
            <span className="absolute -top-2 right-1 text-center rounded-full text-black text-sm bg-[#95a7ff] h-4 w-4">
              {items?.length}
            </span>
          </a>
        </Link>

        <GiHamburgerMenu
          id="bar"
          onClick={() => setNavbarState(!navbarState)}
        />
      </div>
    </section>
  );
};

export default Header;
