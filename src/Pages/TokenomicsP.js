import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TokenomicsP = () => {
  const data = {
    labels: [
      '20% BURN',
      '10% TEAM',
      '35% LIQUIDITY',
      '5% AIRDROP ',
      '20% MARKETTING',
      '10% GAME',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 10, 35, 5, 20, 10],
        backgroundColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(90, 90, 90, 1)',
          'rgba(11, 11, 170, 1)',
          'rgba(255, 255, 0, 1)',
          'rgba(255, 160, 65, 1)',
          'rgba(0, 255, 0, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(90, 90, 90, 1)',
          'rgba(11, 11, 170, 1)',
          'rgba(255, 255, 0, 1)',
          'rgba(255, 160, 65, 1)',
          'rgba(0, 255, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="text-white  h-screen ">
      <div className="text-5xl flex justify-center pt-10">Tokenomics</div>
      <div className="flex">
        <div className="mt-40 ml-32 ">
          <Pie data={data} />
        </div>
        <div>
          <ul className="ml-[500px] mt-36 ">
            <li className="flex mb-8 ">
              <span className="bg-white w-[30px] h-[28px] rounded-full mr-[10px]"></span>
              <p>20% BURN</p>
              <p>&nbsp;</p>
            </li>
            <li className="flex mb-8">
              <span className="bg-gray-500 w-[30px] h-[28px] rounded-full mr-[10px]"></span>
              <p>10% TEAM</p>
              <p>&nbsp;</p>
            </li>
            <li className="flex mb-8">
              <span className="bg-blue-900 w-[30px] h-[28px] rounded-full mr-[10px]"></span>
              <p>35% LIQUIDITY</p>
              <p>&nbsp;</p>
            </li>
            <li className="flex mb-8">
              <span className="bg-yellow-400 w-[30px] h-[28px] rounded-full mr-[10px]"></span>
              <p>5% AIRDROP</p>
              <p>&nbsp;</p>
            </li>
            <li className="flex mb-8">
              <span className="bg-orange-500 w-[30px] h-[28px] rounded-full mr-[10px]"></span>
              <p>20% MARKETTING</p>
              <p>&nbsp;</p>
            </li>
            <li className="flex mb-8">
              <span className="bg-green-500 w-[30px] h-[28px] rounded-full mr-[10px]"></span>
              <p>10% GAME</p>
              <p>&nbsp;</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsP;
