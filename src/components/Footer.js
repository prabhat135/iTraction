import React from "react";
import '../index.css';

const Footer = () => {
  return (
    <div className="footer bg-[#232323] rounded-t-[50px] lg:rounded-t-[100px] text-white">
      <div className="footer-container flex flex-col lg:flex-row justify-around pt-14 pb-10">
        <div className="footer-logo flex justify-center items-center">
          <img src="../assets/itraction_logo_blue.png" alt="" className="cursor-pointer"/>
        </div>

        <div className="footer-services justify-around mx-4">
          <h2 className="font-semibold text-[40px] mb-7 text-center">Services</h2>
          <div class="service-table flex flex-wrap text-[16px] text-left">
            <ul class="left-table flex-1 mr-8">
              <li className="leading-8">
                <a
                  href="/"
                  title="Blockchain Development"
                  className="hover:text-[#04abe2]"
                >
                  Blockchain Development
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Ruby on Rails"
                  className="hover:text-[#04abe2]"
                >
                  Ruby on Rails
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Amazon Web Services"
                  className="hover:text-[#04abe2]"
                >
                  Amazon Web Services
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="NodeJS"
                  className="hover:text-[#04abe2]"
                >
                  NodeJS
                </a>
              </li>
            </ul>
            <ul class="right-table">
              <li className="leading-8">
                <a
                  href="/"
                  title="eCommerce Development"
                  className="hover:text-[#04abe2]"
                >
                  eCommerce Development
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Grails"
                  className="hover:text-[#04abe2]"
                >
                  Grails
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Symfony"
                  className="hover:text-[#04abe2]"
                >
                  Symfony
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Selenium Automation"
                  className="hover:text-[#04abe2]"
                >
                  Selenium Automation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-links flex flex-col mx-4 ">
          <h2 className="font-semibold text-[40px] mb-7 text-center">Company</h2>
          <div class="service-table flex flex-wrap text-[16px] text-left">
            <ul class="left-table flex-1 mr-8">
              <li className="leading-8">
                <a
                  href="/"
                  title="About Us"
                  className="hover:text-[#04abe2]"
                >
                  About Us
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Careers"
                  className="hover:text-[#04abe2]"
                >
                  Careers
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Contact Us"
                  className="hover:text-[#04abe2]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <ul class="right-table">
              <li className="leading-8">
                <a
                  href="/"
                  title="Privacy Policy"
                  className="hover:text-[#04abe2]"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Term & Conditions"
                  className="hover:text-[#04abe2]"
                >
                  Term & Conditions
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="/"
                  title="Cookies"
                  className="hover:text-[#04abe2]"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contacts flex flex-col xsm:flex-row lg:flex-col items-center xsm:items-stretch justify-center gap-6 mt-7 lg:mt-0">
          <div className="phone flex items-center w-[200px] xsm:w-auto bg-black rounded-full pl-1 pr-4 py-1 text-white hover:text-black cursor-pointer group transition-colors duration-300">
            <div className="relative">
              <img src="../assets/blue_circle.png" alt="" className="contact-icon" />
              <img src="../assets/phone_icon_black.png" alt="" className="absolute inset-0 m-auto group-hover:opacity-0 transition-opacity duration-300" />
              <img src="../assets/phone_icon_white.png" alt="" className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="phone-text text-left pl-2 sm:pr-8 lg:pr-0 xl:pr-8">
              <p className="text-md font-semibold">PHONE</p>
              <span className="text-sm">+91-9547709021</span>
            </div>
          </div>

          <div className="email flex items-center w-[200px] xsm:w-auto bg-black rounded-full pl-1 pr-4 py-1 text-white hover:text-black cursor-pointer group transition-colors duration-300">
            <div className="relative">
              <img src="../assets/blue_circle.png" alt="" className="contact-icon" />
              <img src="../assets/email_icon_black.png" alt="" className="absolute inset-0 m-auto group-hover:opacity-0 transition-opacity duration-300" />
              <img src="../assets/email_icon_white.png" alt="" className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="email-text text-left pl-2 sm:pr-8 lg:pr-0 xl:pr-8">
              <p className="text-md font-semibold">EMAIL</p>
              <span className="text-sm">sales@traction.com</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="copyright pb-2 text-center">
          <span className="font-bold">A Venture of <a href="https://www.adirayglobal.com/" target="_blank" rel="noreferrer">Adiray</a></span> <br />
          © 2024 <span className="text-[#04abe2]">Traction.</span> All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
