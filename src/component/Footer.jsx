import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-900 text-gray-100 p-10 grid grid-cols-2 md:grid-cols-6 gap-6">
      <nav>
        <h6 className="footer-title text-lg font-bold text-yellow-400">Games</h6>
        <a>Action</a>
        <a>Adventure</a>
        <a>RPG</a>
        <a>Strategy</a>
      </nav>

      <nav>
        <h6 className="footer-title text-lg font-bold text-yellow-400">Company</h6>
        <a>About Us</a>
        <a>Contact</a>
        <a>Careers</a>
        <a>Press</a>
      </nav>

      <nav>
        <h6 className="footer-title text-lg font-bold text-yellow-400">Support</h6>
        <a>FAQ</a>
        <a>Forums</a>
        <a>Help Center</a>
        <a>Live Chat</a>
      </nav>

      <nav>
        <h6 className="footer-title text-lg font-bold text-yellow-400">Social</h6>
        <a>Discord</a>
        <a>Twitter</a>
        <a>YouTube</a>
        <a>Twitch</a>
      </nav>

      <nav>
        <h6 className="footer-title text-lg font-bold text-yellow-400">Explore</h6>
        <a>New Releases</a>
        <a>Top Charts</a>
        <a>Coming Soon</a>
        <a>Events</a>
      </nav>

      <nav>
        <h6 className="footer-title text-lg font-bold text-yellow-400">Platforms</h6>
        <a>PC</a>
        <a>PlayStation</a>
        <a>Xbox</a>
        <a>Mobile</a>
      </nav>
    </footer>
  );
};

export default Footer;
