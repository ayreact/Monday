// src/components/TopNav.tsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowUpRightFromSquare, 
  faBars, 
  faSearch, 
  faPenToSquare, 
  faBell 
} from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  return (
    <main>
      {/* Mobile Top Nav */}
      <div className="md:hidden">
        <div className="flex justify-center border-b border-gray-200 p-1 items-center text-gray-600 text-sm">
          <Link to="#">
            Open in app 
            <FontAwesomeIcon 
              icon={faArrowUpRightFromSquare} 
              className="text-sm mx-2" 
            />
          </Link>
        </div>
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon 
              icon={faBars} 
              className="text-sm mx-2 text-gray-400 hover:text-gray-700 cursor-pointer transition-colors" 
            />
            <span className="text-2xl font-bold">Medium</span>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faSearch} className="text-lg" />
            <div className="w-8 h-8 rounded-full bg-black"></div>
          </div>
        </div>
      </div>

      {/* Desktop Top Nav */}
      <nav className="hidden md:flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon 
              icon={faBars} 
              className="text-md mx-2 text-gray-400 hover:text-gray-700 cursor-pointer transition-colors" 
            />
            <span className="text-2xl font-bold">Medium</span>
          </div>
          <div className="relative border-none">
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" 
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-12 pr-4 py-3 rounded-full focus:outline-none w-64 bg-gray-50 text-gray-500 placeholder-gray-400 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-gray-400 hover:text-gray-700 cursor-pointer transition-colors">
            <FontAwesomeIcon icon={faPenToSquare} className="mr-2 text-2xl" />
            <span>Write</span>
          </button>
          <FontAwesomeIcon 
            icon={faBell} 
            className="text-xl text-gray-400 hover:text-gray-700 cursor-pointer transition-colors" 
          />
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-black cursor-pointer"></div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default TopNav;
