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
        <section id="filters" className={`p-4 ${bg_blue_60} rounded-lg`}>
            <fieldset className={`flex items-center space-x-3 h-14 rounded-lg ${bg_blue_30} p-4`}>
            <label className="text-white">Character:</label>
            <input className="w-1/3 p-2 text-sm text-gray-900 rounded" type="text" id="character-search" placeholder="Search..."/>
            <a href="#" className="text-blue-400 hover:underline">View Characters: &gt;&gt;</a>
            </fieldset>
            
            <nav className="mt-4">
            <p className="text-white">Type of guide:</p>
            <ul className="flex space-x-3 mt-2">
                <li >
                    <FilterButton label="Characters" onClick={() => handleFilterClick('Characters')}/>
                </li>
                <li >
                    <FilterButton label="Update" onClick={() => handleFilterClick('Update')}/>
                </li>
                <li >
                    <FilterButton label="Mission" onClick={() => handleFilterClick('Mission')}/>
                </li>
                <li >
                    <FilterButton label="Farming" onClick={() => handleFilterClick('Farming')}/>
                </li>
            </ul>
            </nav>

            <section className="mt-4">
            <p className="text-white">Sort:</p>
            <ul className="flex space-x-3 mt-2">
                <li><button className="px-3 py-1 bg-blue-600 rounded text-white">Newest</button></li>
                <li><button className="px-3 py-1 bg-gray-600 rounded text-white">Top Rated</button></li>
            </ul>
            </section>
        </section>
  )
}
