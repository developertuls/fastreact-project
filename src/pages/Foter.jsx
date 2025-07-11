
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-[#0c0e12] text-gray-300 px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        
        {/* Logo & Description */}
        <div>
         <Link to='/'> <h2 className="logo text-2xl font-medium text-white mb-2">
            LUXU<span className="text-[#c4f131]">RyziP</span>
          </h2></Link>
          <p className="text-sm">
            Drive the dream. <br /> Live the luxury lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#c4f131]">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#c4f131]">Shop</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-[#c4f131]">About Us</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-[#c4f131]">Blogs</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-[#c4f131]">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Info</h4>
          <ul className="text-sm space-y-1">
            <li>📞 +880 1XXXXXXXXX</li>
            <li>✉️ info@luxuryp.com</li>
            <li>🏢 Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Stay Connected</h4>
          
          <div className="flex gap-4 text-xl mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#c4f131]"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#c4f131]"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#c4f131]"><FaYoutube /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#c4f131]"><FaTwitter /></a>
          </div>

          <form className=" flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 text-white text-sm w-full sm:w-auto"
            />
            <button
              className="py-2 px-3  font-medium  mt-3 block bg-[#25CCF7] text-black  rounded text-sm hover:bg-[#58B19F] transition w-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} LUXURyziP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
