import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-1 flex-row px-[90px] py-[30px]">
      <img src="./logo.svg" alt="logo" className="flex h-[30px] flex-1" />
      <div className="flex w-[900px] flex-1 flex-row justify-between font-light text-black max-md:hidden">
        <p>Depósito</p>
        <p>Dashboard</p>
        <p>Empresa</p>
        <p>Preços</p>
      </div>
    </div>
  );
};

export default Header;
