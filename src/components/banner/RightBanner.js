import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="relative w-[200px] h-[400px] lgl:w-[400px] lgl:h-[400px]">
        {/* Blurred Border */}
        <div className="absolute inset-0 filter blur-md border-4 border-transparent rounded-md z-0" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
          <img
            className="w-full h-full object-cover rounded-md"
            src={bannerImg}
            alt="bannerImg"
            style={{ filter: 'blur(10px)' }}
          />
        </div>
        {/* Main Image */}
        <img
          className="relative w-full h-full object-cover rounded-md z-10"
          src={bannerImg}
          alt="bannerImg"
        />
      </div>
    </div>
  );
}

export default RightBanner;
