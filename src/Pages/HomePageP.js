import React from 'react';

import Homemodal from './HomePageP/Homemodal';

const HomePageP = () => {
  return (
    <div className="text-white flex h-screen pt-[100px] grid-cols-2">
      <div className="w-1/2 bg">
        <h1 className="text-5xl font-black"> SIRIUSVERSE TOKEN</h1>
        <p className="space-x-3  text-sm pt-5">
          The metaverse universe of Sirius is waiting for you <br />
          <br />
          Play with and against thousands of real players in an online action
          space game.
          <br />
          <br /> The game is in the Sirius universe where players and artificial
          intelligence control the spaceship. Be a space pilot and fight as you
          navigate your chosen spaceship.
          <br />
          <br /> Collect points by shooting asteroids. Beginners or who lost
          their spaceship or those who want to switch to high-level spaceships
          can use these points and they can switch to different planets by
          leveling up with the points and prizes they earned. <br />
          <br /> As you can play Siriusverse with VR glasses, you can also play
          online with your computer. <br /> <br /> Be more powerful by
          purchasing the spacecraft you want from the NFT market or by modifying
          your own spaceship. <br />
          <br /> Siriusverse is also offering the opportunity to meet new people
          and chat with you while playing games
        </p>
        <div className="flex mt-5">
          <button className="bg-green-500 rounded-full mr-7 butonYaziRengi2 h-10 w-60 text-white">
            Download White Paper
          </button>
          <button
            onClick={Homemodal}
            className="bg-white butonYaziRengi rounded-full font-extrabold w-40 "
          >
            Contact Adress
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <img
          src="https://siriusversetoken.com/storage/settings/August2022/TfnqTS1vRN0ltBqYKlPV.gif"
          width="500px"
          height="500px"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
  );
};

export default HomePageP;
