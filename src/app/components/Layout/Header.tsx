"use client";

import React, { useState, useEffect } from "react";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [activePath, setActivePath] = useState<string>("/");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<{ id: number; title: string }[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Mock posts data for demonstration
  const posts = [
    { id: 1, title: "Getting Started with React" },
    { id: 2, title: "Advanced JavaScript Concepts" },
    { id: 3, title: "CSS Grid Layout Tutorial" },
    { id: 4, title: "Building Modern Web Applications" },
    { id: 5, title: "Understanding React Hooks" },
  ];

  const pathname = activePath;
  const searchHidden = pathname === "/contact" || pathname === "/about";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredResults([]);
      setShowDropdown(false);
      return;
    }

    const matches = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredResults(matches);
    setShowDropdown(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("#search-container")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => activePath === path;

  const handleNavClick = (path: string) => {
    setActivePath(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#232536] sticky top-0 z-50 w-full shadow-lg">
      <div
        className={`w-full py-4 px-6 xl:px-14 flex items-center justify-between gap-4 flex-wrap transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 group cursor-pointer transform transition-all duration-300 hover:scale-105"
          onClick={() => handleNavClick("/")}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-[#FFD6D6] rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded-full transform group-hover:rotate-180 transition-transform duration-500"></div>
          </div>
          <span className="text-white font-bold text-base sm:text-lg md:text-xl group-hover:text-[#FFD6D6] transition-colors duration-300">
            LOGO
          </span>
        </Link>

        {/* Navigation and Subscribe */}
        <div className="flex items-center justify-end gap-8 xl:gap-10 w-[50%] lg:w-[75%] xl:w-[55%]">
          {/* Search input in center */}
          {!searchHidden && (
            <div
              id="search-container"
              className="relative flex flex-1 max-w-[70%] lg:w-full w-full"
            >
              <div className="relative w-full">
                <Search
                  size={18}
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ${
                    isSearchFocused ? "text-blue-500 scale-110" : ""
                  }`}
                />
                <input
                  type="text"
                  placeholder={loading ? "Loading posts..." : "Search by title..."}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  disabled={loading}
                  className={`w-full pl-10 pr-4 py-2 bg-white text-slate-900 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-300 transform ${
                    isSearchFocused ? "scale-105 shadow-lg" : "hover:shadow-md"
                  }`}
                />
              </div>

              {/* Search Dropdown */}
              <div
                className={`absolute top-full mt-2 w-full bg-white shadow-xl rounded-lg z-50 max-h-60 overflow-y-auto transform transition-all duration-300 origin-top ${
                  showDropdown ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
              >
                {filteredResults.length > 0 ? (
                  filteredResults.map((post, index) => (
                    <a
                      key={post.id}
                      href={`/posts/${post.id}`}
                      className="block px-4 py-3 hover:bg-gray-100 text-slate-900 transition-colors duration-200 transform hover:translate-x-2"
                      onClick={() => setShowDropdown(false)}
                      style={
                        {
                          animationDelay: `${index * 50}ms`,
                        } as React.CSSProperties
                      }
                    >
                      {post.title}
                    </a>
                  ))
                ) : (
                  !loading && (
                    <span className="block px-4 py-3 text-slate-500">
                      No results found
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/blogs", label: "Blogs" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }, index) => (
              <a
                key={href}
                href={href}
                onClick={() => handleNavClick(href)}
                className={`relative group hover:text-white transition-all duration-300 text-lg transform hover:-translate-y-1 ${
                  isActive(href) ? "text-white" : "text-gray-300"
                }`}
                style={
                  {
                    animationDelay: `${index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                    isActive(href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Subscribe Button */}
          <button className="hidden lg:block bg-white text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1">
            Subscribe
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[300px] bg-slate-800 border-l border-slate-700 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 mt-20 px-6">
          {[
            { href: "/", label: "Home" },
            { href: "/blogs", label: "Blogs" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact Us" },
          ].map(({ href, label }, index) => (
            <a
              key={href}
              href={href}
              onClick={() => handleNavClick(href)}
              className={`text-lg hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
                isActive(href) ? "text-white" : "text-gray-300"
              }`}
              style={
                {
                  animationDelay: `${index * 100}ms`,
                  transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease-out ${index * 100}ms`,
                } as React.CSSProperties
              }
            >
              {label}
            </a>
          ))}
          <button
            className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 text-left transform hover:scale-105 hover:shadow-lg"
            style={
              {
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: "all 0.3s ease-out 500ms",
              } as React.CSSProperties
            }
          >
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
