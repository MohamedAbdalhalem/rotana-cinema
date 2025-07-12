import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import { Link, NavLink } from 'react-router';
import { useSelector } from "react-redux"
import { ourStoreType } from "../../lib/store"
import useDarkMood from "../../Hooks/useDarkMood";
import useLogout from "../../Hooks/useLogout";

export function Nav() {
  const {token} = useSelector((state: ourStoreType) => state.authsilce)
  const { isDark, handleDarkMood } = useDarkMood()
  const handleLogout = useLogout()
  return (
    <Navbar  className="rounded-none  z-50 shadow-lg px-5" fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <Link to='/'>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Rotana Cinema</span>
        </Link >
      </NavbarBrand>
      <div className="flex md:order-2 gap-2 cursor-pointer">
        <Dropdown color='alternative' className="md:flex hidden  cursor-pointer" label="Setting">
      <DropdownHeader className="border-b border-gray-100  dark:border-gray-600 ">
        <span className="block font-bold ">3ab7alim</span>
          </DropdownHeader>
          {token ? <DropdownItem onClick={handleLogout}>log-out</DropdownItem> : 
            <>
              <DropdownItem as={NavLink} to="/login">Log-in</DropdownItem>
      <DropdownItem as={NavLink} to="/register">Register</DropdownItem>
            </>}
      
      <DropdownDivider />
          <DropdownItem onClick={handleDarkMood}>{ isDark }</DropdownItem>
    </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {token && <>
          <NavbarLink><NavLink to='/'>Home</NavLink></NavbarLink>
        <NavbarLink>About</NavbarLink>
        <NavbarLink>Services</NavbarLink>
        <NavbarLink>Pricing</NavbarLink>
        <NavbarLink>Contact</NavbarLink>
        </>}
        <Dropdown color='alternative' className="md:hidden z-50 flex mt-2 cursor-pointer" label="Setting">
      <DropdownHeader className="border-b border-gray-100  dark:border-gray-600">
        <span className="block font-bold ">3ab7alim</span>
      </DropdownHeader>
      {token ? <DropdownItem onClick={handleLogout}>log-out</DropdownItem> : 
            <>
              <DropdownItem as={NavLink} to="/login">Log-in</DropdownItem>
      <DropdownItem as={NavLink} to="/register">Register</DropdownItem>
            </>}
      <DropdownDivider />
      <DropdownItem onClick={handleDarkMood}>{ isDark }</DropdownItem>
    </Dropdown>
      </NavbarCollapse>
    </Navbar>
  );
}
