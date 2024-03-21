import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-1 flex-row items-center px-10 py-14 max-lg:items-center">
      <img
        src="./logo.jpg"
        alt="logo"
        className="flex h-[60px] flex-1 object-contain"
      />
      <div className="flex w-[900px] flex-1 flex-row justify-between font-light text-black max-lg:hidden">
        <p>Home</p>
        <p>Quem somos</p>
        <p>Termos</p>
        <p>Notícias</p>
      </div>
    </div>
  );
};

export default Header;
