import React from 'react';
import imageLanding from '../../img/landing-bee.jpg'


export default function Title() {
  return (
    <section className='w-full flex justify-center items-center' >


      <div className="w-11/12 bg-left rounded-xl flex items-center bg-blend-overlay bg-fixed bg-landing-banner bg-no-repeat bg-cover lg:bg-center" >

        <div className="text-center text-white mx-auto font-RedHat py-20">
          <h1 className="px-4 text-3xl md:px-0 lg:text-5xl font-semibold">Discover clothes from all seasons</h1>
          <p className="font-semibold text-2xl mt-5">Be comfy, be free.</p>
          <a className="px-5 py-2 inline-block bg-primary/70 text-white rounded-xl hover:bg-primary transition-colors mt-10" href="/cards">Get Started</a>
        </div>

      </div>

    </section>
  );
}
