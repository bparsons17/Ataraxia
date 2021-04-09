import React from 'react';

function Features() {
    return (
      <section className="relative">
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20  transform translate-y-1/2"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
   
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="text-2xl text-indigo-600 md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4">Our Features</h2>
              <p className="text-xl text-gray-400">Our platform allows you to set goals, create journals and be apart of a community of people that are dealing with similar issues</p>
            </div>
  
    
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
  
          
              <div className="relative flex flex-col items-center p-6 bg-gray-200 rounded shadow-xl">
             
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Set Goals</h4>
                <p className="text-gray-600 text-center">Set and complete goals to create a clear vision for your future</p>
              </div>
  
         
              <div className="relative flex flex-col items-center p-6 bg-gray-200 rounded shadow-xl">
              
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Journal</h4>
                <p className="text-gray-600 text-center">Make note of any experiences and feelngs that you want to document</p>
              </div>
  
             
              <div className="relative flex flex-col items-center p-6 bg-gray-200 rounded shadow-xl">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Community</h4>
                <p className="text-gray-600 text-center">Connect with other users in a safe space that fosters encouragement</p>
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    );
  }

  export default Features;