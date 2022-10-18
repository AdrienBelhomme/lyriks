import React from 'react';

import loader from '../assets/loader.svg';

const Loader = () => {
  return (
  //   <div className="w-full flex justify-center items-center flex-col">
  //     <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
  //     <h1 className="font-bold text-2xl text-white mt-2">{title || 'Loading'}</h1>
  //   </div>
    <div>
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;