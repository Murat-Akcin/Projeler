import React from 'react';
import { AiOutlineApple } from 'react-icons/ai';
import { RiGooglePlayFill } from 'react-icons/ri';
import { AiFillWindows } from 'react-icons/ai';

const GameP = () => {
  return (
    <div className="text-white  h-screen col-md-6">
      <div className="">
        <div className="grid">
          <span className="text-blue-400 text-3xl font-extrabold pt-9">
            DOWNLOAD OUR GAME
          </span>

          <span className="text-5xl mt-4">Download Our App</span>
          <span className="mt-7 font-semibold">
            Coming Soon Sirius Game And Wallet Application
          </span>
        </div>
        <div className="flex">
          <div className="">
            <img
              className="h-[500px] w-auto"
              src="https://siriusversetoken.com/storage/settings/August2022/AQ3obY91bGZJzHyBPC1Z.png"
              alt=""
            />
          </div>
          <div
            id="download"
            className="flex items-center space-x-6 pr-3 mt-52 cursor-pointer"
          >
            <div className="flex items-center ">
              <AiOutlineApple size={30} className="mr-1" />
              <div className="text-2xl">App Store</div>
            </div>
            <div className="flex items-center space-x-1">
              <RiGooglePlayFill size={30} />
              <div className="text-2xl">Play Store</div>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <AiFillWindows size={30} />

                <div className="text-2xl">Windows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameP;
