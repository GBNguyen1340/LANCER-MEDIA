"use client";

import classNames from "classnames";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoginExpired from "@/app/loginExpired";
import { LoadingComponent } from "@/components/layout/shared/loadingComponent";

const MainLayout = (props) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const { user, error, isLoading } = useUser();

  if (isLoading) return <LoadingComponent />;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div
        className={classNames({
          "grid min-h-screen": true,
          "grid-cols-sidebar": !collapsed,
          "grid-cols-sidebar-collapsed": collapsed,
          "transition-[grid-template-columns] duration-300 ease-in-out": true,
        })}
      >
        {/* sidebar */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          shown={showSidebar}
        ></Sidebar>
        <div className="">
          <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
          <div className="mx-auto p-4">{props.children}</div>
        </div>
      </div>
    );
  }
  return <LoginExpired></LoginExpired>;
};
export default MainLayout;
