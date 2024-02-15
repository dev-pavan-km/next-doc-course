"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RootNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-2 text-blue-500">
        <li>
          <Link className={`${pathname === "/" ? "font-bold" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`${pathname === "/routing" ? "font-bold" : ""}`} href="/routing">
            Routing
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default RootNav;
