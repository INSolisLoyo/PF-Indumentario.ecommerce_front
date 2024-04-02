import React from 'react';
import landingImage from '../../img/landing-clothes.jpg';
import nube from '../../img/nube1-sinfondo.png';

export default function Title() {
  return (
    <div className='w-full h-auto flex justify-center items-center' >

      <div className='w-full h-full md:relative flex flex-col gap-4 md:block'>
        <picture className='w-full flex justify-center items-center rounded-xl'>
          <img src="https://cdn.pixabay.com/photo/2017/08/05/12/19/dress-2583113_960_720.jpg" alt="clothes" 
            className='rounded-xl'  
          />
        </picture>
        <div className=' flex flex-col justify-center items-center text-center md:absolute md:top-8 md:inset-x-1/3 text-primary'>
          <h3 className='text-sm lg:text-xl font-semibold tracking-[.25em]' >NOTE TO SELF</h3>
          <div className="subtitle  ">
            <h1 className='text-4xl max-lg:text-[20px] W-5 tracking-[.25em] font-semibold'>TODAY WILL BE</h1>
            <h1 className='text-4xl max-lg:text-[20px] W-5 tracking-[.25em] font-semibold'>A GOOD DAY</h1>
          </div>
        </div>
      </div>
      {/* <div className="texts text-center   ">
        <h3 className='text-sm lg:text-xl font-semibold tracking-[.25em] max-lg:pt-[140px]' >NOTE TO SELF</h3>
        <div className="subtitle  ">
          <h1 className='text-4xl max-lg:text-[20px] W-5 tracking-[.25em] font-semibold'>TODAY WILL BE</h1>
          <h1 className='text-4xl max-lg:text-[20px] W-5 tracking-[.25em] font-semibold'>A GOOD DAY</h1>
        </div>
      </div>
      <div className="image-landing">
        <img className='w-48 rounded lg:w-80 max-lg:m-auto max-lg:mt-[40px] ' src={landingImage} alt="" />
        <img className='w-[750px] absolute top-0 right-1 z-[-1] max-lg:mt-[230px]'  src={nube} alt="" style={{ top: '-45px' }} />
      </div> */}
    </div>
  );
}
