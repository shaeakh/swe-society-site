import { Spotlight } from "../ui/Spotlight";
import { GlobeDemo } from "./Globe_demo";
function Hero() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      
    <div className='p-4 relative z-10 w-full text-center'>
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
      {/* <h1 className='mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Welcome to SWE SOCIETY</h1>
      <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    
      </p> */}
      <div className='mt-4 flex flex-col items-center justify-center gap-4 md:
      flex-row md:gap-8 md:justify-start md:items-start'>
      <GlobeDemo/>
      </div>

    </div>
   
  </div>
  );
}

export default Hero;


