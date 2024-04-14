import OneSlider from "../Oneslider/OneSlider";

const Women = () => {
  return (
    <div className="relative flex flex-col  justify-center  items-center w-full h-auto md:flex-row md:mt-2 font-RedHat">
      <div className="text-center relative z-20">
        <h1 className="text-primary text-2xl font-bold sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
          WOMEN
        </h1>
      </div>
      <div className="relative z-10 px-8">
        <OneSlider gender={"Women"} />
      </div>
    </div>
  );
};

export default Women;
