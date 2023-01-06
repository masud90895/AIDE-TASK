import React from 'react';

const Banner = () => {
    return (
        <>
      <div >
        <div className=" bg-white relative  py-7">
          <div className="mx-auto bg-gray-200">
            <div className="lg:flex md:flex block justify-between items-center">
              <div className="md:p-10 p-4">
                <p className="text-base leading-none text-gray-800">
                  Save upto 60%
                </p>
                <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                  Winter Sale
                </p>
                <p className="text-base leading-normal text-gray-600">
                The wait is over! Our big bag sale is here with upto 60% off on all items. <br /> Hurry up and fill your bags with your favorites at amazing prices. Secure Payment Option. Easy Return Policy.
                </p>
              </div>
              <div className="md:p-10 p-4 w-[373px] h-[347px] ">
                <img
                  src="https://images.othoba.com/images/thumbs/0502192_oil_1258.jpeg"
                  className="w-full h-full rounded-lg" alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>

    );
};

export default Banner;