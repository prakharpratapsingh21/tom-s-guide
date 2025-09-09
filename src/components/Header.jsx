import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const menus = [
    { name: "Phones", links: ["iPhone", "Samsung", "OnePlus"] },
    { name: "TV & Audio", links: ["Smart TVs", "Speakers", "Soundbars"] },
    { name: "AI", links: ["ChatGPT", "Google Gemini", "AI Tools"] },
    { name: "Wellness", links: ["PC Gaming", "Consoles", "Accessories"] },
    { name: "Gaming", links: ["Fitness", "Sleep", "Diet"] },
    { name: "More", links: ["News", "Reviews", "Guides"] },
  ];

  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow-xl sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-blue-600 text-2xl font-bold hover:text-blue-700"><a href="">tom's guide</a></h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center items-center text-gray-800 text-sm font-medium gap-8 relative cursor-pointer">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              className={`hover:text-blue-600 ${
                activeMenu === index ? "text-blue-600" : ""
              }`}
            >
              {menu.name}
            </button>

            {/* Dropdown */}
            {activeMenu === index && (
              <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg w-40 p-2 z-40 cursor-pointer">
                {menu.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    {link}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Search + Hamburger (mobile) */}
      <div className="flex items-center gap-4">
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-1 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        <button
          className="text-lg font-semibold cursor-pointer hover:text-blue-500"
          onClick={() => setShowSearch(!showSearch)}
        >
          <IoSearch />
        </button>
        <button
          className="text-2xl md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          {menus.map((menu, index) => (
            <div key={index} className="border-b px-6 py-3">
              <p className="font-medium text-gray-800">{menu.name}</p>
              <div className="ml-4 mt-2 space-y-1">
                {menu.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
