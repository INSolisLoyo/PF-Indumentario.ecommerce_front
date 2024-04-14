import OneSlider from "../Oneslider/OneSlider";

const Men = () => {
  return (
    <div className="relative flex flex-col-reverse mt-10 justify-center items-center w-full h-auto md:flex-row font-RedHat">
      <div className="relative z-10 px-8">
        <OneSlider gender={"Men"} />
      </div>
      <div className="text-center relative z-20">
        <h1 className="text-primary text-2xl font-bold sm:text-3xl md:text-3xl lg:ml-[90px] lg:text-5xl xl:text-5xl">
          MEN
        </h1>
      </div>
    </div>
  );
};

export default Men;
