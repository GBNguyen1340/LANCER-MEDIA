"use client";

import React from "react";
import { LoadingComponent } from "@/components/layout/shared/loadingComponent";
import { useUser } from "@auth0/nextjs-auth0/client";

export const PageLayout = ({ children }) => {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingComponent />
      </div>
    );
  }

  return <div>{children}</div>;
};
