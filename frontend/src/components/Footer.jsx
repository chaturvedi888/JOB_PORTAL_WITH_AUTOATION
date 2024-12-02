// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.jpg" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Mohaddipur Gorakhpur Uttar Pradesh India</li>
            <li>shreyansh3700@gmail.com</li>
            <li>+91 9369389171</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://x.com/ShreyanshC60428"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shreyansh86453?utm_source=qr&igsh=b2Yyd2k2bzU0Z2tz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@shreyanshchaturvedi816"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shreyansh-chaturvedi-b73100205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By Shreyansh
      </div>
    </>
  );
};

export default Footer;
