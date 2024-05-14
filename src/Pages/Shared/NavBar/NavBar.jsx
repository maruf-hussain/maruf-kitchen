

const NavBar = () => {
    const navOptins = <>
        <li><a>Home</a></li>
      <li>
        <details>
          <summary>Our Menu</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact Us</a></li>
    </>
    return (
        <>
           <div className="navbar max-w-7xl  fixed z-10 bg-opacity-10 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navOptins}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl text-yellow-400 font-extrabold font-serif">Maruf's <span className="text-white">Kitchen</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
   {navOptins}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> 
        </>
    );
};

export default NavBar;