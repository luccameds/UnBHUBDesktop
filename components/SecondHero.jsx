import React from 'react';

const SecondHero = () => {
  return (
    <div className="h-screen flex-1 bg-gradient-to-r from-[#b5cae6] to-[#fdeee8] max-lg:hidden">
      <div className="my-[58px] flex flex-1 flex-row justify-center">
        <button className="mx-[39px] rounded-[100px] bg-[#1D1D1C] px-5 py-3">
          Criar conta
        </button>
        <button className="flex flex-row items-center justify-between rounded-[100px] bg-white px-5">
          <p className="mx-[10px] text-black">Entrar</p>
          <img src="./arrowbutton.svg" alt="arrowbutton" />
        </button>
      </div>
      <div className="flex justify-center py-[90px]">
        <img src="./stars.svg" alt="stars" className="absolute z-0" />
        <img src="./hand.svg" alt="hand" className="absolute z-0 h-[650px]" />
      </div>
    </div>
  );
};

export default SecondHero;
