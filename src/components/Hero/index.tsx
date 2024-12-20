const Hero = () => (
  <div className="relative rounded-base overflow-hidden shadow-card screen-rounded-none border-base border-card screen-border-x-0">
    <div className="w-full flex flex-col justify-center relative inset-0 z-10 text-start items-start text-black px-6 xl:px-16 5xl:px-48 py-[3rem] 3xl:py-[4rem] 5xl:py-[8rem]">
      <div className="font-semibold text-heading-2xs xl:text-heading-xs">Hey buddy 👋 </div>
      <h2 className="font-bold text-heading-md xl:text-heading-xl">
              Welcome to your new community
      </h2>
      <div className="text-md opacity-95 w-full mt-3">
        <article>
          <p>
            <strong>This is the Basic, </strong>
                  starter kit that provides pre-built spaces and customizable components to get you started quickly. Everything—content, layout, and components—is fully editable, and just for your jumpstart, so you can tailor it to your unique vision.
            <br />
            <br />
            <strong>Get started building your community from basic.</strong>
          </p>
        </article>
      </div>
    </div>
    <div className="w-full h-full absolute inset-0 z-0">
      <img src="https://tribe-s3-production.imgix.net/mZsl3jtoyp6wyVR5gyn7D?w=2000&auto=compress,format&dl" className="w-full h-full object-cover object-center" />
      <div className="w-full h-full absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}/>
    </div>
  </div>
);

export default Hero;