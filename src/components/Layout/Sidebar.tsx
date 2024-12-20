import React, { ReactNode } from "react";
import { FaHome, FaRegCheckCircle } from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";
import { GrAnnounce } from "react-icons/gr";
import { GoDiscussionClosed } from "react-icons/go";
import useCollection from "hooks/useCollection";
import { Link } from "react-router-dom";

const icon: Record<string, ReactNode> = {
  'icon/check-circle-broken': <FaRegCheckCircle className="text-lg text-content-on-background-pressed mr-2 items-center justify-center shrink-0 h-[1.25em] w-[1.25em]" />,
  'icon/announcement-01': <GrAnnounce className="text-lg text-content-on-background-pressed mr-2 items-center justify-center shrink-0 h-[1.25em] w-[1.25em]" />,
  'icon/message-chat-square': <GoDiscussionClosed className="text-lg text-content-on-background-pressed mr-2 items-center justify-center shrink-0 h-[1.25em] w-[1.25em]" />,
};

const Sidebar = () => {
  const { collections } = useCollection();

  return (
    <aside className="w-full flex flex-col col-span-1 sm:col-span-2 max-w-full md:max-w-sm justify-self-center space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-0 hidden md:hidden lg:block shrink-0 sticky scrollbar-hide overscroll-contain">
      <div className="w-full flex flex-col max-w-full md:max-w-sm self-center space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5 py-3 sm:py-3.5 md:py-4 lg:py-5">
        <nav className="flex flex-col space-y-8 isolate text-label-md w-full block-link-menu">
          <Link to="/" className="cursor-pointer group flex items-center rounded-base w-full transition duration-200 bg-background text-content-on-background-subdued hover:bg-background-hovered hover:text-content-on-background-hovered focus:outline-none focus-visible:ring ring-inset ring-offset-0 px-3 py-2">
            <FaHome className="text-lg text-content-on-background-pressed mr-2 items-center justify-center shrink-0 h-[1.25em] w-[1.25em]" />
            <span className="truncate">Home</span>
          </Link>
        </nav>
        <nav className="flex flex-col my-2 text-label-md w-full block-link-menu">
          {collections.map((item) => (
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="text-sm text-left font-semibold text-content-on-background-subdued">{item.name}</div>
                <div className="space-y-1 pb-3" role="group">
                  {item.spaces.edges?.map((edge) => (
                    <Link to="/" className="cursor-pointer group flex items-center rounded-base w-full transition duration-200 bg-background text-content-on-background-subdued hover:bg-background-hovered hover:text-content-on-background-hovered focus:outline-none focus-visible:ring ring-inset ring-offset-0 px-3 py-2">
                      {icon[edge.node.imageId]}
                      <span className="truncate">{edge.node.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        <nav className="flex flex-col space-y-8 isolate text-label-md w-full">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-content-on-background-subdued text-left">Your Turn</div>
            <Link to="/" className="cursor-pointer group flex items-center rounded-base w-full transition duration-200 bg-background text-content-on-background-subdued hover:bg-background-hovered hover:text-content-on-background-hovered focus:outline-none focus-visible:ring ring-inset ring-offset-0 px-3 py-2">
              <FiPlus className="text-lg text-content-on-background-pressed mr-2 items-center justify-center shrink-0 h-[1.25em] w-[1.25em]" />
              <span className="truncate">Create your first space</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
