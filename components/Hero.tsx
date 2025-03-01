import Video from "./ui/Video";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <Video />
        <div className="absolute text-lightGreen wrapper inset-0 justify-center flex-col flex lg:items-center  z-20">
          <h1 className=" lg:text-9xl text-6xl font-extrabold">KAIZEN</h1>
          <h3 className="text-xl font-semibold">Physiotherapy & Performance</h3>
          <p className="p-4 animate-pulse flex flex-col  text-lightGreen place-self-center text-sm z-20 absolute bottom-0">
            <span className="animate-pulse mb-10 text-lightGreen place-self-center text-sm z-20 absolute bottom-0">
              ↓
            </span>
            Scroll down
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
