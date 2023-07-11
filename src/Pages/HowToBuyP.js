import React from 'react';
import renk2 from '../App.css';
import renk3 from '../App.css';
import { BiMask } from 'react-icons/bi';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { GiRabbit } from 'react-icons/gi';
import { BsMeta } from 'react-icons/bs';

const HowToBuyP = () => {
  return (
    <div className=" h-screen items-center justify-center space-y-24">
      <div className="text-white text-4xl font-extrabold ml-[500px]">
        How to buy SVT
      </div>
      <div className="h-[500px] w-[1000px] renk2 align-middle items-center justify-center ml-32 grid grid-cols-2 grid-rows-2 gap-4">
        <div class="">
          <div>
            <BiMask size={30} className="text-white mb-3" />
          </div>
          <div className="text-white font-bold"> Get Metamask</div>
          <div>
            {' '}
            <a
              href="https://metamask.io/download/"
              className="renk3 hover:text-green-700"
            >
              Download & install Metamask
            </a>
            <span className="text-white">
              , which is a browser-based crypto wallet (and mobile app) you can
              use to send/receive cryptocurrencies and transact on the Ethereum
              network.
            </span>
          </div>
        </div>

        <div class=" ">
          <div>
            <BsFillCreditCardFill size={30} className="text-white mb-3" />
          </div>
          <div className="text-white font-bold">Balance Wallet</div>
          <div className="text-white">
            Deposit money in your wallet. Buy BNB or BSC (Binance Smart Chain)
            to fund your wallet. These cryptocurrencies are used on the Binance
            Smart Chain.
          </div>
        </div>
        <div class="">
          <div>
            <GiRabbit size={30} className="text-white mb-3" />
          </div>
          <div className="text-white font-bold">
            Visit PancakeSwap & SiriusSwap
          </div>
          <div className="text-white">
            Open your browser. Go to Safari (iPhone only) or your preferred
            browser (Chrome recommended) and visit PancakeSwap.finance Or
            SiriusSwap
          </div>
        </div>
        <div class="0">
          <div>
            <BsMeta size={30} className="text-white mb-3" />
          </div>
          <div className="text-white font-bold">Exchange SVT</div>
          <div className="text-white">
            Exchange it with SVT. PancakeSwap Or SiriusSwap is an exchange
            platform that allows users to exchange BNB for other DeFi tokens.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyP;
