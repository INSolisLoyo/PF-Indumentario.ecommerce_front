import OneSlider from "../oneslider/OneSlider";
// import nube from "../../img/nube4.png";

const Women = () => {
  return (
    <div className="relative flex flex-col justify-center gap-x-20 w-screen h-[70vh] content-center items-center 2xl:flex-row font-RedHat">
      <div className="text-center relative z-20">
        <h1 className="text-primary text-2xl tracking-[.25em] font-bold sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl">
          WOMEN
        </h1>
        <p className="text-xl tracking-[.25em] sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
          Park-Miller
        </p>
        <p className="text-xl tracking-[.25em] sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
          Nuptials
        </p>
      </div>
      <div className="relative z-10">
        <OneSlider gender={"female"} />
      </div>
      {/* <img
        className="absolute top-1/2 transform -translate-y-1/2 z-1"
        src={nube}
        alt=""
        style={{ left: "-5px", maxWidth: "100vw", maxHeight: "100%" }}
      /> */}
    </div>
  );
};

export default Women;
