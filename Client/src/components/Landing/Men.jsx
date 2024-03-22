import OneSlider from "../oneslider/OneSlider";
// import nube from "../../img/nube3.png";

const Men = () => {
  return (
    <div className="relative flex flex-col-reverse justify-center gap-x-20 w-screen h-[70vh] content-center items-center 2xl:flex-row font-RedHat">
      <div className="relative z-10">
        <OneSlider gender={"male"} />
      </div>
      <div className="text-center relative z-20">
        <h1 className="text-primary text-2xl tracking-[.25em] font-bold sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl">
          MEN
        </h1>
        <p className="text-xl tracking-[.25em] sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
          COMPLETION
        </p>
      </div>
      {/* <img
        className="absolute top-1/2 transform -translate-y-1/2 z-0"
        src={nube}
        alt=""
        style={{ right: "-5px", maxWidth: "100vw", maxHeight: "100%" }}
      /> */}
    </div>
  );
};

export default Men;
