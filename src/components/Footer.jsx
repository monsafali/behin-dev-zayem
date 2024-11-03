import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 2H2v20l4-4h16V2zM20 16H6.83L4 18.83V4h16v12z" />
              </svg>
            </span>
            <span>info.behindev@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </span>
            <span>1 Floor, 288 Main St, Lander, WY 82520, USA</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-teal-400">Product</h3>
            <ul className="space-y-2">
              <li>Stories</li>
              <li>Events</li>
              <li>Courses</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-teal-400">Community</h3>
            <ul className="space-y-2">
              <li>Become Contributor</li>
              <li>Community</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-teal-400">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>FAQs</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Media Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-teal-400">Follow us:</h3>
          <div className="flex space-x-4">
            <span className="text-gray-300">{/* Add social icons here */}</span>
            {/* Repeat for each social icon */}
          </div>
          <div className="flex space-x-2 items-center">
            <input
              type="email"
              placeholder="name@email.com"
              className="bg-gray-800 text-gray-400 p-2 rounded-lg w-full focus:outline-none"
            />
            <button className="bg-teal-500 text-gray-900 px-4 py-2 rounded-lg">
              Subscribe for newsletter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
