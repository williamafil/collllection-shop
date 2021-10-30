import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as InstagramIcon } from "../images/instagram.svg";
import { ReactComponent as PinterestIcon } from "../images/pinterest.svg";
import { ReactComponent as HeartIcon } from "../images/heart.svg";

import style from "./Footer.module.css";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/checkout" ? (
        <footer className="px-5 pt-24 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-14 flex lg:flex-col justify-between">
                <a
                  href="/"
                  className="h-full flex flex-col text-center justify-center lg:block pt-2"
                >
                  <h2 className="uppercase text-2xl leading-5">collllect</h2>
                  <h2 className="text-2xs">Mine & Yours</h2>
                </a>
                <div className="flex space-x-8">
                  <FacebookIcon className="w-5" />
                  <InstagramIcon className="w-5" />
                  <PinterestIcon className="w-5" />
                </div>
              </div>

              <div className="mb-14 lg:pl-14 lg:w-4/12 ">
                <p className="pb-4 text-sm leading-7 tracking-wide">
                  Receive special offers and first look at new products.
                </p>
                <form className=" w-full flex">
                  <input
                    className=" w-full py-2.5 px-5 bg-transparent border border-black tracking-wide"
                    placeholder="Enter email"
                  />
                  <span className="pl-4">
                    <button className="h-full inline-block w-28 bg-black text-white hover:bg-lightOrange-800 hover:text-black">
                      Subscribe
                    </button>
                  </span>
                </form>
              </div>

              <div className="mb-14 lg:pl-14 lg:w-4/12">
                <h2 className="font-bold tracking-wider">Collllect Shop</h2>
                <p className="tracking-wider">12345 Granville Street</p>
                <p className="tracking-wider">Vancouver, BC</p>
                <p className="tracking-wider">A2B 3C4</p>
                <p className="py-4">TELEPHONE: (604)543-0987</p>
                <p className="text-sm tracking-wider">hello@foobar.com</p>
              </div>

              <div className="mb-14 lg:pl-14 lg:w-4/12 flex">
                <ul className="w-1/2 space-y-5 text-sm">
                  <li>
                    <a href="#" className={style.footer__link_item}>
                      MAIN
                    </a>
                  </li>
                  <li>
                    <a href="#" className={style.footer__link_item}>
                      SHOP
                    </a>
                  </li>
                  <li>
                    <a href="#" className={style.footer__link_item}>
                      INFO
                    </a>
                  </li>
                </ul>

                <ul className="w-1/2 space-y-5 text-sm">
                  <li>
                    <a href="#" className={style.footer__link_item}>
                      Search
                    </a>
                  </li>
                  <li>
                    <a href="#" className={style.footer__link_item}>
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="text-sm flex">
              Developed with{" "}
              <HeartIcon className="w-4 text-red-400 mx-1 pb-2.5" /> in
              Vancouver
            </h3>
          </div>
        </footer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;
