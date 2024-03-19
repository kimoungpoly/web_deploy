"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const pathname = usePathname();
  if (pathname.includes("/dashboard")) return null;
  else
    return (
      <Navbar className="bg-blue-200">
        <NavbarBrand>
          <Image width={40} height={40} src={"/assets/pic.jpg"} alt={""} />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              href="/"
              className={`${pathname === "/" && "font-bold"}`}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${
                pathname === "/about-us" && "font-bold text-blue-800"
              }`}
              href={"./about-us"}
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/product">
              Products
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/dashboard" variant="flat">
              Dashboard
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
}
