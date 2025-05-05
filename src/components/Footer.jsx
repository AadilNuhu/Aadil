import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub,FaPhoneAlt,FaMapPin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold dark:text-white">Aadil Nuhu</h3>
            <p className="text-sm">
              Building amazing digital experiences for our clients since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-blue-600 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-blue-300 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-pink-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-blue-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-black transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="/project" className="hover:text-gray-900 dark:hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-md font-semibold dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">SEO</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold dark:text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="mr-2"><FaMapPin /></span>
                <span>Teshie Nungua Estate<br />Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="mr-2"><FaPhoneAlt /></span>
                <span>+233 (245) 829-714</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="mr-2"><FaMailBulk /></span>
                <span>aadilnuhu122@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Aadil Nuhu. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;