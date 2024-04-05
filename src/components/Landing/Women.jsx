import OneSlider from "../Oneslider/OneSlider";

const Women = () => {
  return (
    <div className="relative flex flex-col mt-10 justify-center items-center w-full h-auto md:flex-row md:mt-10 font-RedHat">
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
      <div className="relative z-10 px-8">
        <OneSlider gender={"Women"} />
      </div>
    </div>
  );
};

export default Women;
