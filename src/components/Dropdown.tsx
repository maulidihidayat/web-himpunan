import React, { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <svg
            className="-mr-1 h-5 w-5 text-customPink"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-customPink hover:text-white"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
              onClick={closeDropdown}
            >
              Edit
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-customPink hover:text-white"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
              onClick={closeDropdown}
            >
              Duplicate
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-customPink hover:text-white"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
              onClick={closeDropdown}
            >
              Archive
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-customPink hover:text-white"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-3"
              onClick={closeDropdown}
            >
              Move
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-customPink hover:text-white"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-4"
              onClick={closeDropdown}
            >
              Share
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-customPink hover:text-white"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-5"
              onClick={closeDropdown}
            >
              Add to favorites
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-customPink hover:text-white"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-6"
              onClick={closeDropdown}
            >
              Delete
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
