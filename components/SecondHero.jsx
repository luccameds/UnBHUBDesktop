import React from 'react';

const SecondHero = () => {
  return (
    <div className="h-screen flex-1 bg-gradient-to-r from-[#b5cae6] to-[#fdeee8] max-lg:hidden">
      <div className="my-10 flex flex-1 flex-row justify-center px-32">
        <button className="mx-10 w-64 rounded-[100px] bg-[#1D1D1C] py-3">
          Criar conta
        </button>
        <button className="flex flex-row items-center justify-between rounded-[100px] bg-white px-5">
          <p className="mx-5 text-black">Entrar</p>
          <img src="./arrowbutton.svg" alt="arrowbutton" />
        </button>
      </div>
      <div className="flex justify-center py-20">
        <img src="./stars.svg" alt="stars" className="absolute z-0" />
        <img src="./hand.svg" alt="hand" className="absolute z-0 h-[650px]" />
      </div>
    </div>
  );
};

export default SecondHero;
