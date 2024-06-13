import { Link } from "react-router-dom";
import AppLogo from "../utils/AppLogo.jpg"

const Header = () => {
  return (
    
      <div className="h-20 max-w-7xl flex px-28 justify-between items-center border-b-2 border-black">
        <div className="p-1 overflow-hidden">
          <img className="w-16 h-16  " src={AppLogo} />
        </div>
        <div className="">
          <ul className="flex gap-10 ">
            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
            <li><Link to="/about" className="hover:text-orange-600">Sign In</Link></li>
            <li><Link to="/about" className="hover:text-orange-600">Contact</Link></li>
          </ul>
        </div>
      </div>
  );
};

export default Header;
