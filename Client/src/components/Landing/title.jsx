import React from 'react';
import landingImage from '../../img/landing-clothes.jpg';
import nube from '../../img/nube1-sinfondo.png';

export default function Title() {
  return (
    <div className='w-full h-screen lg:flex items-center justify-around mb-[50px] ' >
      <div className="texts text-center   ">
        <h3 className='text-sm lg:text-xl font-semibold tracking-[.25em] max-lg:pt-[140px]' >NOTE TO SELF</h3>
        <div className="subtitle  ">
          <h1 className='text-4xl max-lg:text-[20px] W-5 tracking-[.25em] font-semibold'>TODAY WILL BE</h1>
          <h1 className='text-4xl max-lg:text-[20px] W-5 tracking-[.25em] font-semibold'>A GOOD DAY</h1>
        </div>
      </div>
      <div className="image-landing">
        <img className='w-48 rounded lg:w-80 max-lg:m-auto max-lg:mt-[30px] m-[90px] ' src={landingImage} alt="" />
        <img className='w-[750px] absolute top-0 right-1 z-[-1] max-lg:mt-[230px]'  src={nube} alt="" style={{ top: '-45px' }} />
      </div>
    </div>
  );
}
