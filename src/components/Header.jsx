import React, { useState } from "react";
import { IoBarbell, IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [country, setCountry] = useState("India");
  const [query, setQuery] = useState("");

  const menus = [
    { name: "Phones", links: ["iPhone", "Samsung", "OnePlus"] },
    { name: "TV & Audio", links: ["Smart TVs", "Speakers", "Soundbars"] },
    { name: "AI", links: ["ChatGPT", "Google Gemini", "AI Tools"] },
    { name: "Wellness", links: ["PC Gaming", "Consoles", "Accessories"] },
    { name: "Gaming", links: ["Fitness", "Sleep", "Diet"] },
    { name: "More", links: ["News", "Reviews", "Guides"] },
  ];
  const countries = ["India", "USA", "UK", "Canada"];

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`Searching for: ${query}`); // Replace this with your actual search logic
    }
  };

  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow-xl sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-blue-600 text-2xl font-bold hover:text-blue-700">
        <a href="">tom's guide</a>
      </h1>

      {/* Location and Newsletters */}
      <div className="flex gap-5">
        <div className="location">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded px-1 py-1 text-sm outline-none focus:ring-2 border-[1px] focus:ring-blue-500"
          >
            {countries.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="newsletter">
          <h2 className="flex justify-center items-center gap-2 text-sm">
            <span className="bg-sky-500 p-1 rounded-full text-white"><IoMail /></span>
            <a href="">Newsletters</a>
          </h2>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center items-center text-gray-800 text-sm font-medium gap-5 relative cursor-pointer">
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
                    className="block px-3 py-1 text-sm hover:bg-gray-100 rounded"
                  >
                    {link}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Sign in Button and Notifications */}
      <div className="flex justify-center items-center gap-4">
        <button className="text-sm"><a href="">Sign In</a></button>

        <button><FaBell/></button>
      </div>

      {/* Search + Hamburger */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="border-[1px] rounded pl-6 outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
            <IoSearch />
          </button>
        </form>

        {/* Hamburger Menu */}
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
