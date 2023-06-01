import React from 'react';

const Hero = () => {
  return (
    <div className="px-[150px] py-[80px]">
      <img
        src="./asterics.svg"
        alt="logo"
        className="my-[42px] w-[60px] justify-self-start"
      />
      <h1 className="text-[50px] text-[#1D1D1C]">
        Todas as{' '}
        <h1 className="text-[50px] font-bold text-[#1D1D1C]">experiências </h1>
        no novo cartão de crédito
      </h1>
      <img src="./arrow.svg" alt="arrow" className="my-[60px]" />
      <p className="w-[450px] text-[#1D1D1C]">
        Transferências simples, pagamentos de contas de serviços públicos,
        extrato funcional, configurações do cartão, para as quais costumava ser
        necessário ir até a agência ou acessar o banco online.
      </p>
      <div className="my-[30px] flex flex-row">
        <button className="mx-[39px] h-[33px] w-[167px] rounded-[100px] bg-[#11253E]">
          Solicitar um Cartão
        </button>
        <button className="flex h-[33px] flex-row items-center justify-between rounded-[100px] bg-white px-[15px]">
          <p className="mx-[10px] text-black">Como funciona</p>
          <img src="./arrowbutton.svg" alt="arrowbutton" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
