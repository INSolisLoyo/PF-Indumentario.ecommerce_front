import OneSlider from "../Oneslider/OneSlider";

const Men = () => {
  return (
    <div className="relative flex flex-col-reverse justify-center gap-x-20 w-screen h-[70vh] content-center items-center 2xl:flex-row font-RedHat">
      <div className="relative z-10">
        <OneSlider category={"Men"} />
      </div>
      <div className="text-center relative z-20">
        <h1 className="text-primary text-2xl tracking-[.25em] font-bold sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl">
          MEN
        </h1>
        <p className="text-xl tracking-[.25em] sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
          COMPLETION
        </p>
      </div>
    </div>
  );
};

export default Men;
