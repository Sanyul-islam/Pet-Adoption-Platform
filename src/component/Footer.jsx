import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LOGO & ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                P
              </div>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Pet Adoption
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Find loving homes for pets and
              adopt your perfect companion
              today.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Contact Information
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                Dhaka,
                Bangladesh
              </li>

              <li>
                
                support@petadoption.com
              </li>

              <li>
                 +880 1234-567890
              </li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white transition"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-700 hover:text-white transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Pet
            Adoption. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}