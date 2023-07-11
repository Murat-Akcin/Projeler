import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';

const ContactP = () => {
  return (
    <div className="text-white h-96 ">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold">Follow Social Medias </div>
        <div className="mt-10">Line Connect About Token</div>
      </div>
      <div className="flex items-center justify-center mt-14 cursor-pointer ">
        <div className=" w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center mr-2 hover:bg-slate-700">
          <AiFillYoutube size={30} />
        </div>
        <div className=" w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center mr-2 hover:bg-slate-700">
          <FiTwitter size={30} />
        </div>
        <div className=" w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center mr-2 hover:bg-slate-700">
          <BsInstagram size={30} />
        </div>
        <div className=" w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center hover:bg-slate-700">
          <AiFillLinkedin size={30} />
        </div>
      </div>
      <div className="border border-gray-300 mt-5"></div>
      <div>
        Deserunt proident sint aute duis <br /> voluptate elit incididunt duis
        aute. Amet ea fugiat culpa <br /> sunt aliquip ullamco elit pariatur.{' '}
      </div>
    </div>
  );
};

export default ContactP;
