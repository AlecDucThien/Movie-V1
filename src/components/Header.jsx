import { useState } from "react";

const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState('')
  return (
    <div className="p-4 bg-black flex items-center justify-between fixed w-full top-0 z-100">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] font-bold uppercase text-red-700">Movie</h1>
        <nav className="flex items-center space-x-4 ">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="p-3 text-black bg-white rounded-sm"
          placeholder="Search"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button 
          className="py-2 px-3 text-white bg-red-600 rounded-sm"
          onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
