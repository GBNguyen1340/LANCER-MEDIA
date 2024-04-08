import React from "react";
import cn from "classnames";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "@/lib/defaultNavItems";
import SignOutButton from "./signoutButton";
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}) => {
  
  // 👇 use the correct icon depending on the state.
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={cn({
        "bg-amber-700 text-zinc-50 z-20": true,
        "transition-all duration-300 ease-in-out": true,
        "fixed md:static md:translate-x-0": true,
        "w-[200px]": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={cn({
          "flex flex-col justify-between h-screen md:h-full sticky inset-0": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={cn({
            "flex items-center shadow-sm h-[56px] transition-none": true,
            "p-2 justify-between": !collapsed,
            "py-2 justify-center": collapsed,
          })}
        >
          {!collapsed && (
            <div className="flex flex-row gap-1 items-center">
              <Image
                src="/lancerLogo.jpg"
                alt="Logo"
                className="w-10 h-10 mr-2"
                width={40}
                height={40}
              />
              <span>Lancer Media</span>
            </div>
          )}
          <button
            className={cn({
              "grid place-content-center": true, // position
              "hover:bg-amber-800 ": true, // colors
              "w-8 h-8 rounded-full opacity-0 md:opacity-100": true, // shape
            })}
            // 👇 set the collapsed state on click
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>

        {/* nav items part */}
        <nav className="flex-grow">
          <ul className="my-2 flex flex-col gap-2 items-stretch">
            {navItems.map((item, index) => {
              return (
                <li
                  key={`nav-item-${index}`}
                  className={cn({
                    "text-indigo-100 hover:bg-amber-900 flex cursor-pointer": true,
                    "transition-colors duration-300": true,
                    "rounded-md p-2 mx-3 gap-4": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                  <Link href={item.href} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* profile part ...omitted for brevity */}
        <div className={cn({ "grid place-content-stretch p-4": true })}>
          <SignOutButton collapsed={collapsed}></SignOutButton>
          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <Image
              src={"https://via.placeholder.com/150"}
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-indigo-50 my-0">Tom Cook</span>
                <Link href="/" className="text-indigo-200 text-sm">
                  View profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
