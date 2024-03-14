import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { MyLogo } from "./AcmeLogo.jsx";

export default function App() {
  const menuItems = [
    "Accueil",
    "Services",
    "Developpeurs",
    "Contact",

  ];

  return (
    <Navbar disableAnimation
      style={{
        backgroundColor: "transparent", // Définit un arrière-plan transparent
      }}
    >



      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <MyLogo />
          {/* <p className="font-bold text-inherit">JP-Developpement</p> */}
        </NavbarBrand>
      </NavbarContent>


      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>



      <NavbarContent className="hidden sm:flex gap-4" >
        <NavbarBrand className="flex justify-start">
          <MyLogo />
          {/* <p className="font-bold text-inherit">JP-Developpement</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link color="foreground" href="/">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/developer">
            Developpeurs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>



      <NavbarMenu>
        <NavbarMenuItem className="mt-5">
          <Link color="foreground" href="/">
            Accueil
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="mt-5">
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="mt-5">
          <Link color="foreground" href="/developer">
            Developpeurs
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="mt-5">
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
