import React from 'react';
import video from './/resim/1.mp4';
const FaqP = () => {
  return (
    <div className="col col-span-full">
      <div>
        <div>
          <div className=" text-white z-20">Hello</div>
          <video className="hesp" src={video} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
};
export default FaqP;
