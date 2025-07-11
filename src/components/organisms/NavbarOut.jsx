import { Link } from 'react-router-dom';
import logo from '../../assets/fauxbnblogo.png'
import BurgerMenu from '../molecules/BurgerMenu';

export default function NavbarOut() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex max-w-7xl mx-auto px-4 py-3 items-center justify-between">
        
        <div className="block md:hidden w-full text-center">
          <Link to="/home">
            <img src={logo} alt="FauxBnb Logo" className="mx-auto w-[180px] md:w-[140px] h-[50px]"/>
          </Link>
        </div>

        <div className="hidden md:flex w-full items-center justify-between">
          <Link to="/home">
            <img
              src={logo}
              alt="FauxBnb Logo"
              className="w-[180px] h-[60px]"
            />
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-700">
            <Link to="/host">
              Host on Fauxbnb
            </Link>
            <span className="cursor-pointer"><BurgerMenu/></span>
          </div>
        </div>

      </div>
    </nav>
  );
}
