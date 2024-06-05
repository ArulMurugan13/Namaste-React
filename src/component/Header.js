import AppLogo from "../../utils/AppLogo.jpg"

const Header = () => {
  return (
    
      <div className="h-20 max-w-7xl fixed top-0 left-0 right-0  flex px-28 justify-between items-center border-b-2 border-black">
        <div className="p-1 overflow-hidden">
          <img className="w-16 h-16 " src={AppLogo} />
        </div>
        <div className="">
          <ul className="flex gap-10 ">
            <li>Search</li>
            <li>Offers</li>
            <li>Sign In</li>
            <li>Cart</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
  );
};

export default Header;
