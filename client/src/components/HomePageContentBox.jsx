import React from 'react';

const HomePageContentBox = ({ title, body, image }) => {
  return (
    <div className="rounded-md bg-gray-100 shadow-xl p-10 mb-10"> 
      {image && <img src={image} alt={title} className="mb-4 rounded-lg max-w-32 h-auto mx-auto" />} 
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">{title}</h3> 
      <hr className="border-black my-2" /> 
      <p className="text-lg text-gray-700 text-center">{body}</p> 
    </div>
  );
};

export default HomePageContentBox;
