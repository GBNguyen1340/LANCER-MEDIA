// components/Navbar.tsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "../../button/logoutButton";

const Navbar = (props) => {
  const { user } = useUser();

  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex flex-grow items-center justify-between": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[56px] top-0 ": true, //positioning & styling
      })}
    >
      <div className="font-bold text-lg">Trang quản lý Lancer Media</div>
      <DropdownMenu className="flex flex-row items-center gap-3 2xsm:gap-7 pr-4 mr-4">
        <DropdownMenuTrigger>
          <div>
            {user?.picture && (
              <Image
                src={user.picture}
                alt="Profile"
                className="rounded-full"
                width={40}
                height={40}
              />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <div className="xs:hidden">{user.email}</div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/account">Tài khoản của tôi</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton></LogoutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
export default Navbar;
