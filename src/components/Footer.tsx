import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center ">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="Logo"
          className="w-16 mb-4"
        />

        <nav className="mb-4 text-customgray">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                License
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Contribute
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        {/* Hak Cipta */}
        <p className="text-center text-sm text-customgray">
          &copy; {new Date().getFullYear()} Hmps Pendidikan Informatika
        </p>
      </div>
    </footer>
  );
};

export default Footer;
