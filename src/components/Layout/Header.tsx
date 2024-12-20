import React from 'react';

const Header = () => {
  return (
    <header className="w-full backdrop-saturate-[180%] backdrop-blur-[20px] overflow-hidden before:absolute before:inset-0 before:w-full before:h-full before:bg-bg-surface-subdued flex flex-col shadow-md sticky z-20 before:opacity-80 before:z-[-1]">
      <div className="w-full flex flex-col max-w-full self-center space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-0 py-0 sm:py-0 md:py-0 lg:py-0 px-0 sm:px-0 md:px-0 lg:px-0">
        <div>
          <a className="cursor-pointer rounded-base transition duration-200 focus:outline-none focus-visible:ring relative flex flex-col sm:flex-row gap-3 p-4 shadow-card text-content-subdued bg-surface-subdued border-line-subdued justify-center rounded-none">
            <div className="min-w-0 grow space-y-1 text-center">
              <h3 className="text-sm font-medium break-words text-content-subdued">
                This basic sample template is yours to help you build your
                community smoothly. Edit anything and make it your own. 👉
                Download Design Assets Style Guide in Figma →
              </h3>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-full md:max-w-8xl container self-center space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5 mx-auto">
          <div className="max-w-full md:max-w-8xl self-center space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5">
            <div className="flex h-16 items-center gap-x-2 sm:gap-x-8">
              <div className="hidden sm:block">
                <a className="cursor-pointer rounded-none transition duration-200 focus:outline-none focus-visible:ring block logo max-w-[var(--c-header-logo-max-width)]">
                  <div className='hidden sm:block'>
                    <img className="object-contain w-[121px] h-[40px]" src="https://tribe-s3-production.imgix.net/iVJhvNPqCR2kC2x36JTrp?fit=max&w=1000&auto=compress,format" />
                  </div>
                </a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
