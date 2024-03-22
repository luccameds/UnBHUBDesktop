import React from 'react';

const Header = () => {
  return (
    <div className="mx-14 flex flex-row items-center py-14 max-lg:items-center">
      <img
        src="./logo.jpg"
        alt="logo"
        className="mx-32 flex h-[60px] object-contain"
      />
      <div className="flex flex-1 flex-row justify-evenly px-10 font-light text-black max-lg:hidden">
        <p>Home</p>
        <p>Quem somos</p>
        <p>Termos</p>
        <p>Notícias</p>
      </div>
    </div>
  );
};

export default Header;
