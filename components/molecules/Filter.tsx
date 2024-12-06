'use client';
import React from 'react'
import { bg_blue_30 } from "@/components/tokens";
import { bg_blue_60 } from "@/components/tokens";
import FilterButton from '../atoms/FilterButton';



const handleFilterClick = (filterType: String) => {
    console.log(`Filter applied: ${filterType}`);
  };

export default function Filter() {
  return (
    <section id="filters" className={`p-4 ${bg_blue_60} rounded-lg p-4`}>
    <fieldset className={`flex flex-col sm:flex-row items-center space-y-3 sm:space-x-3 sm:space-y-0 h-auto sm:h-14 rounded-lg ${bg_blue_30} p-4`}>
      <label className="text-white">Character:</label>
      <input
        className="w-full sm:w-1/3 p-2 text-sm text-gray-900 rounded"
        type="text"
        id="character-search"
        placeholder="Search..."
      />
      <a href="#" className="text-blue-400 hover:underline mt-2 sm:mt-0">View Characters: &gt;&gt;</a>
    </fieldset>
  
    <nav className={`flex flex-col sm:flex-row items-center space-y-3 sm:space-x-3 sm:space-y-0 h-auto sm:h-14 rounded-lg ${bg_blue_30} p-4 mt-4`}>
      <p className="text-white">Type of guide:</p>
      <ul className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-3 mt-2 sm:mt-0 justify-start sm:justify-start">
        <li>
          <FilterButton label="Characters" onClick={() => handleFilterClick('Characters')} />
        </li>
        <li>
          <FilterButton label="Update" onClick={() => handleFilterClick('Update')} />
        </li>
        <li>
          <FilterButton label="Mission" onClick={() => handleFilterClick('Mission')} />
        </li>
        <li>
          <FilterButton label="Farming" onClick={() => handleFilterClick('Farming')} />
        </li>
      </ul>
    </nav>
  
    <section className={`flex flex-col sm:flex-row items-center space-y-3 sm:space-x-3 sm:space-y-0 h-auto sm:h-14 rounded-lg ${bg_blue_30} p-4 mt-4`}>
      <p className="text-white">Sort:</p>
      <ul className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-3 mt-2 sm:mt-0 justify-start sm:justify-start">
        <li>
          <FilterButton label="Newest" onClick={() => handleFilterClick('Newest')} />
        </li>
        <li>
          <FilterButton label="Top Rated" onClick={() => handleFilterClick('Top Rated')} />
        </li>
      </ul>
    </section>
  </section>
  
  )
}
