import React from 'react';

const Hero = () => {
  return (
    <div className="px-[150px] py-10">
      <img
        src="./asterics.svg"
        alt="logo"
        className="my-[42px] w-[60px] justify-self-start"
      />
      <h1 className="text-[50px] text-[#1D1D1C]">
        Descomplicando as{' '}
        <h1 className="text-[50px] font-bold text-[#1D1D1C]">experiências </h1>
        na universidade
      </h1>
      <img src="./arrow.svg" alt="arrow" className="my-[30px]" />
      <p className="w-[450px] text-[#1D1D1C]">
        Desde organizar sua agenda até conectar-se com colegas para projetos
        colaborativos, nossa plataforma oferece uma experiência completa e
        intuitiva. Explore novos caminhos de aprendizado, descubra recursos
        úteis e otimize sua rotina universitária conosco. Junte-se a nós e
        liberte todo o potencial da sua jornada acadêmica!
      </p>
      <div className="my-20 flex flex-row">
        <button className="rounded-[100px] bg-[#1D1D1C] px-5 py-3">
          Criar conta
        </button>
        <button className="flex flex-row items-center justify-between rounded-[100px] bg-white px-[15px]">
          <p className="mx-[10px] text-black">Como funciona</p>
          <img src="./arrowbutton.svg" alt="arrowbutton" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
