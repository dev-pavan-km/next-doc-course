"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RoutingNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-2 text-blue-500">
        <li>
          <Link className={`${pathname === "/routing" ? "font-bold" : ""}`} href="/routing">
            Routing
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/routing/linking-and-navigating" ? "font-bold" : ""}`}
            href="/routing/linking-and-navigating">
            Linking & Navigating
          </Link>
        </li>
        <li>
          <Link className={`${pathname === "/routing/error" ? "font-bold" : ""}`} href="/routing/error">
            Error
          </Link>
        </li>
        <li>
          <Link className={`${pathname === "/routing/redirecting" ? "font-bold" : ""}`} href="/routing/redirecting">
            Redirecting
          </Link>
        </li>
        <li>
          <Link className={`${pathname === "/routing/dynamic-routes" ? "font-bold" : ""}`} href="/routing/dynamic-routes">
            Dynamic Routes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default RoutingNav;
