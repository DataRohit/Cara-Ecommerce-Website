import React from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="p-6 md:section-p1 flex flex-wrap justify-between"
    >
      <div className="col">
        <img src="/logo.png" alt="" className="logo mb-[30px]" />
        <h4>Contact</h4>
        <p>
          <span>Address:</span> 562 Wellington Road, Street 32, San Francisco
        </p>
        <p>
          <span>Phone:</span> +01 2222 365 / (+91) 01 2345 6789
        </p>
        <p>
          <span>Hours:</span> 10:00 - 18:00, Mon - Sat
        </p>
        <div className="follow mt-[20px] ">
          <h4>Follow us</h4>
          <div className="icon flex items-center justify-start text-[#465B52] pr-[4px] cursor-pointer">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestP />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link href="/about">About Us</Link>
        <Link href="/cart">Delivery Information</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms & Condition</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <Link href="#">Sign In</Link>
        <Link href="/cart">View Cart</Link>
        <Link href="/cart">My Wishlist</Link>
        <Link href="#">Tract My Order</Link>
        <Link href="#">Help</Link>
      </div>

      <div className="col install ">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <p className="row flex items-center flex-wrap">
          <img
            src="/pay/app.jpg"
            alt=""
            className="border-2 border-solid
          border-[#088178] rounded-md mr-2 mb-2"
          />{" "}
          <img
            src="/pay/play.jpg"
            alt=""
            className="border-2 border-solid
          border-[#088178] rounded-md mr-2"
          />
        </p>
        <p>Secured Payment Gateways</p>
        <img src="/pay/pay.png" alt="" />
      </div>

      <div className="copyright w-full text-center text-sm">
        © 2022 - 23, Ecommerce, Inc. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
