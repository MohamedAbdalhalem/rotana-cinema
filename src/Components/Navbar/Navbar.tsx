import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router';
export function Nav() {
  const [isDark,setIsDark] = useState('Light-mood')
  function handleDarkMood() {
    if (localStorage.getItem('theme') === 'light-mood') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark-mood')
      setIsDark('Dark-mood')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light-mood')
      setIsDark('Light-mood')
    }
  }
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark-mood') {
      document.documentElement.classList.add('dark')
      setIsDark('Dark-mood')
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark('Light-mood')
    }
  },[])
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
      <DropdownItem as={NavLink} to="/login">Log-in</DropdownItem>
      <DropdownItem as={NavLink} to="/register">Register</DropdownItem>
      <DropdownItem>log-out</DropdownItem>
      <DropdownDivider />
          <DropdownItem onClick={handleDarkMood}>{ isDark }</DropdownItem>
    </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink>Home</NavbarLink>
        <NavbarLink>About</NavbarLink>
        <NavbarLink>Services</NavbarLink>
        <NavbarLink>Pricing</NavbarLink>
        <NavbarLink>Contact</NavbarLink>
        <Dropdown className="md:hidden z-50 flex mt-2 cursor-pointer" label="Setting">
      <DropdownHeader className="border-b border-gray-100  dark:border-gray-600">
        <span className="block font-bold ">3ab7alim</span>
      </DropdownHeader>
      <DropdownItem as={NavLink} to="/login">Log-in</DropdownItem>
      <DropdownItem as={NavLink} to="/register">Register</DropdownItem>
      <DropdownItem>log-out</DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={handleDarkMood}>{ isDark }</DropdownItem>
    </Dropdown>
      </NavbarCollapse>
    </Navbar>
  );
}
