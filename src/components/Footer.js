import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-[#232323] rounded-t-[100px] text-white">
      <div className="footer-container flex justify-around pt-14 pb-10">
        <div className="footer-logo">
          <img src="../assets/itraction_logo_blue.png" alt="" className="cursor-pointer"/>
        </div>

        <div className="footer-services">
          <h2 className="font-semibold text-[40px] mb-7 text-center">Services</h2>
          <div class="service-table flex text-[16px] text-left">
            <ul class="left-table flex-1 mr-20">
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Blockchain Development"
                  className="hover:text-[#04abe2]"
                >
                  Blockchain Development
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Ruby on Rails"
                  className="hover:text-[#04abe2]"
                >
                  Ruby on Rails
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Amazon Web Services"
                  className="hover:text-[#04abe2]"
                >
                  Amazon Web Services
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
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
                  href="javascript:void(0)"
                  title="eCommerce Development"
                  className="hover:text-[#04abe2]"
                >
                  eCommerce Development
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Grails"
                  className="hover:text-[#04abe2]"
                >
                  Grails
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Symfony"
                  className="hover:text-[#04abe2]"
                >
                  Symfony
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Selenium Automation"
                  className="hover:text-[#04abe2]"
                >
                  Selenium Automation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-links">
          <h2 className="font-semibold text-[40px] mb-7 text-center">Company</h2>
          <div class="service-table flex text-[16px] text-left">
            <ul class="left-table flex-1 mr-20">
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="About Us"
                  className="hover:text-[#04abe2]"
                >
                  About Us
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Careers"
                  className="hover:text-[#04abe2]"
                >
                  Careers
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
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
                  href="javascript:void(0)"
                  title="Privacy Policy"
                  className="hover:text-[#04abe2]"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Term & Conditions"
                  className="hover:text-[#04abe2]"
                >
                  Term & Conditions
                </a>
              </li>
              <li className="leading-8">
                <a
                  href="javascript:void(0)"
                  title="Cookies"
                  className="hover:text-[#04abe2]"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contacts flex flex-col justify-center gap-6">
          <div className="phone flex just bg-white rounded-full pl-1 pr-4 py-1">
            <div className="relative">
              <img src="../assets/blue_circle.png" alt="" />
              <img
                src="../assets/phone_icon.png"
                alt=""
                className="absolute inset-0 m-auto"
              />
            </div>
            <div className="phone-text text-left pl-2 pr-8">
              <p className="text-md font-medium text-black">PHONE</p>
              <span className="text-sm text-[#777777]">91-8302378068</span>
            </div>
          </div>

          <div className="email flex bg-white rounded-full pl-1 pr-4 py-1">
            <div className="relative">
              <img src="../assets/blue_circle.png" alt="" />
              <img
                src="../assets/email_icon.png"
                alt=""
                className="absolute inset-0 m-auto"
              />
            </div>
            <div className="email-text text-left pl-2 pr-8">
              <p className="text-md font-medium text-black ">EMAIL</p>
              <span className="text-sm text-[#777777]">sales@traction.com</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="copyright pb-2 text-center">
          © 2024 <span className="text-[#04abe2]">Traction.</span> All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
