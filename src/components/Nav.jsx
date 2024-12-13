import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [token, setToken] = useState(null);
  const isAuth = token !== null;
  return (
    <header className=' sticky top-0 padding-x py-8  z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            className='m-0 w-[85px] h-[85px] sm:w-[70px] sm:h-[70px] md:w-[60px] md:h-[60px] lg:w-[50px] lg:h-[50px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
        {!isAuth && (
            <>
            {/* <Link to="login" className='flex items-center gap-2'> */}
             Login
            {/* </Link> */}
            <span>/</span>
            {/* <Link to="signup" className='flex items-center gap-2'> */}
              SignUp
            {/* </Link> */}
          </>
          )}
        </div>

        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
