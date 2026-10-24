import React, { ReactNode } from "react";

interface RoutesData {
  children: ReactNode;
  conversation: ReactNode;
  peoples: ReactNode;
}

const Layout = ({ children, conversation, peoples }: RoutesData) => {
  return (
    <div>
      {children}
      <div className="flex gap-10">
        {peoples}
        {conversation}
      </div>
    </div>
  );
};

export default Layout;
