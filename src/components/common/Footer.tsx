"use client";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
// import DribbbleIcon from "@mui/icons-material/dribb";
// import DiscordIcon from "@mui/icons-material/Discord";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: "Get To Know Us ",
      subitems: [
        { id: 1, title: "About us", link: "#" },
        { id: 2, title: "Careers", link: "#" },
        { id: 3, title: "Press Release", link: "#" },
        { id: 4, title: "Services", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Useful Links",
      subitems: [
        { id: 1, title: "Cart", link: "#" },
        { id: 2, title: "My Account", link: "#" },
        { id: 3, title: "Wishlist", link: "#" },
        { id: 4, title: "Order Tracking", link: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, url: "#" },
    { icon: <InstagramIcon />, url: "#" },
    { icon: <PinterestIcon />, url: "#" },
    { icon: <TwitterIcon />, url: "#" },
    { icon: <GitHubIcon />, url: "#" },
    // { icon: <DiscordIcon />, url: "#" },
    // { icon: <DribbbleIcon />, url: "#" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Left */}
          <div className="mb-6 md:mb-0 flex flex-col">
            <Link href="/" className="text-white text-2xl font-bold mb-5">
              Fashnest.
            </Link>
            <span className="max-w-lg text-gray-500 hover:text-white ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              sapiente. Eaque distinctio nihil, asperiores earum laudantium eum
              eligendi commodi blanditiis delectus atque optio deserunt,
              laboriosam odio consequuntur numquam, placeat aspernatur!
            </span>
          </div>
          {/* Right */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            {footerLinks.map((link, index) => (
              <div key={link.id}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {link.title}
                </h2>
                {link.subitems.map((subitem) => (
                  <ul
                    key={subitem.id}
                    className="text-gray-500 dark:text-gray-400 font-medium"
                  >
                    <li className="mb-4">
                      <Link href={subitem.link} className="hover:text-white">
                        {subitem.title}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            ))}

            {/* Legal Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Separator */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Fashnest™
            </Link>
            . All Rights Reserved.
          </span>
          {/* Social Links */}
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                {social.icon}
                <span className="sr-only">Social link</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
