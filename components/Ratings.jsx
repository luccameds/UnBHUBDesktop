import React from 'react';

const Ratings = () => {
  return (
    <div className="my-[90px] flex flex-1 flex-row justify-between">
      <div>
        <h3 className="text-[#1D1D1C]">Active users</h3>
        <h2 className="font-bold text-[#1D1D1C]">5000+</h2>
      </div>
      <div>
        <h3 className="text-[#1D1D1C]">Download</h3>
        <h2 className="font-bold text-[#1D1D1C]">30.3k</h2>
      </div>
      <div>
        <h3 className="text-[#1D1D1C]">Reviews</h3>
        <h2 className="font-bold text-[#1D1D1C]">1200+</h2>
      </div>
    </div>
  );
};

export default Ratings;
