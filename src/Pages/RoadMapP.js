import React from 'react';
import butonYaziRengi2 from '../App.css';
const RoadMapP = () => {
  return (
    <div className=" py-8">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl font-extrabold mb-8 text-white">Roadmap</h1>
          <div className=" ">
            <p className="font-normal text-lg pb-5 text-white">
              THE SIRIUSVERSE TOKEN WILL BE LAUNCHED ON THE BSC NETWORK. IT WILL
              BE AVAILABLE THROUGH PANCAKESWAP OR SIRIUSSWAP
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
          <div className=" rounded-lg shadow-md p-6 text-right border-">
            <h2 className="text-xl font-semibold mb-4">Q1-2022</h2>
            Monthly Airdrop <br /> Website v1.0 <br /> 2,000 Telegram Members{' '}
            <br /> Presale <br /> Launch <br /> Nft Launch <br /> Cmc, Gecko,
            nomics, Blockfolio listing <br /> Community Marketing Fund <br />{' '}
            Logo (trust, poocoin, pancake)
          </div>

          <div className=" rounded-lg shadow-md p-6  sm:mt-0 mt-32">
            <h2 className="text-xl font-semibold mb-4">Q2-2022-2023</h2>
            Monthly Airdrop <br /> 10,000 Telegram Members <br /> 10,000 Holders{' '}
            <br /> Website update v1.1 (Activate swap) <br /> Smart contract
            Auditing (Solidity) <br />
            Mobile (wallet) application <br /> 20,000 Holders <br /> Website
            update v1.2 (NFT MARKET)
          </div>

          <div className="col-span-2 mt-8">
            {/*<div className="h-4 bg-gray-300 w-full "></div>*/}
          </div>

          <div className=" rounded-lg shadow-md p-6 text-right">
            <h2 className="text-xl font-semibold mb-4">Q3-2023</h2>
            Monthly Airdrop <br /> Game first look <br /> Finding funding <br />{' '}
            Making a global event <br /> Big ads To World <br /> 30,000 Telegram
            Members <br /> 30,000 Holders <br />
            International get-together <br /> New marketing <br /> Game Beta
            launch
          </div>

          <div className=" rounded-lg shadow-md p-6 mt-4 sm:mt-0">
            <h2 className="text-xl font-semibold mb-4">Q4-2023</h2>
            Monthly Airdrop <br /> Giveway Holder <br /> 50,000 Holders <br />{' '}
            Create New Roadmap <br />
            Purchasing and selling lands in Siriusverse <br /> city plan and
            navigation map <br /> Siviusverse customized interior and exterior
            design <br /> Indoor and outdoor display advertising tools <br />{' '}
            Siriusverse avatars and special Siriusverse rooms will also be with
            you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapP;
