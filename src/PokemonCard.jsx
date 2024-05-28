// src/PokemonCard.js
import React from 'react';
import { FaBatteryEmpty, FaFistRaised, FaPowerOff, FaStar } from 'react-icons/fa';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className=" bg-[#FAF299] rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl border-[#FED141] border-[20px]">


      
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-full h-32 sm:h-48 object-contain bg-[#FAF299]  p-4"
      />
      <div className="p-4  ">
        <h2 className="text-lg font-bold capitalize flex justify-center  border-b-2 border-black w-full pb-2 ">{pokemon.name}</h2>
        <p className="text-gray-700 flex justify-center mt-2">Height: {pokemon.height}</p>
        <p className="text-gray-700 flex justify-center border-b-2 border-black pb-2 ">Weight: {pokemon.weight}</p>
        <div className="flex flex-wrap mt-2">
          {pokemon.types.map(type => (
            <span
              key={type.slot}
              className="px-2 py-1 mr-2 mb-2 bg-[#E3D48C] rounded-full flex justify-center w-full  text-sm font-semibold text-gray-700"
            >
              {type.type.name}
            </span>
          ))}
          <p className=' flex list-none justify-between w-full'>
            <li>
              weakness
              <FaFistRaised className=' text-red-600  mx-auto'/>
            </li>
            <li>
              resistance
            </li>
            <li>
              retreat cost
              <FaStar className=' text-green-500  mx-auto'/>
            </li>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default PokemonCard;

