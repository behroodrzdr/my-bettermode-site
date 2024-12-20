import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col max-w-full self-center space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-0 bg-background min-h-screen transition duration-200">
      {/* Header */}
      <Header />

      {/* Sidebar and Main Content */}
      <div className="w-full flex flex-col max-w-full self-center space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-0 sm:px-3.5 md:px-4 lg:px-5 flex-1">
        <div className="w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 max-w-full md:max-w-8xl self-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-5 flex-1">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="w-full flex flex-col col-span-1 md:col-span-6 max-w-full md:max-w-5xl justify-self-center space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
