import { Spotlight } from "../ui/Spotlight";
function Hero() {
  return (
    <div>
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h5>Welcome to</h5>
      <h1>SWE SOCIETY</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default Hero;
