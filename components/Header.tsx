import Link from "next/link";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { Logo } from "./common/Logo";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="header absolute left-0 top-0 right-0 w-full z-50 h-32 md:h-48 px-4 md:px-6 py-4 md:py-6">
      <div className="grid mx-auto w-full max-w-6xl grid-cols-[auto_auto] gap-6 md:grid-cols-[1fr_auto_1fr] items-center">
        <Link href={"/"} className="justify-self-start">
          <Logo className="text-brand-purple h-12 md:h-20" />
        </Link>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1 justify-self-center w-full"
        >
          <ul className="flex items-center w-full justify-around gap-8 flex-wrap">
            <li>
              <Link href={"/about"}>Boards</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
        <div className="justify-self-end">
          <Button
            className="z-10 mt-2 block"
            color="purple"
            icon="cart"
            aria-label="View Cart"
          >
            <span className="md:hidden">(1)</span>
            <span className="hidden md:inline">Cart (1)</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
