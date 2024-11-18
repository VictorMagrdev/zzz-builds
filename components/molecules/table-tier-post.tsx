'use client';
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { bg_blue_30,bg_blue_10 } from "../tokens";
import { getAllCharacters } from "@/libs/api_general";
import { Character } from "@/types/api-general";
import { TierListCard } from "../organisms/tier-list-card";
import DropDown from "../organisms/drop-down";

interface TierColumn {
  label: string;
  color: string;
  characters: Character[];
}

interface Columns {
  [key: string]: TierColumn;
}

const tierColumns: Columns = {
  SS: { label: "S+", color: 'bg-red-600', characters: [] },
  S: { label: "S", color: 'bg-orange-500', characters: [] },
  A: { label: "A", color: 'bg-orange-400', characters: [] },
  B: { label: "B", color: 'bg-yellow-400', characters: [] },
  C: { label: "C", color: 'bg-green-500', characters: [] },
};

export default function TableTierPost() {
  const [columns, setColumns] = useState<Columns>(tierColumns);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCharacters()
      .then((data: Character[]) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((e) => {
        alert('Error al consultar la información del API');
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex flex-col justify-center' >
      <div className='my-8 flex justify-center space-x-4'>
        <form action="" method="post">
          <input className={` placeholder:text-slate-500 block ${bg_blue_10}  border py-2 pl-9 pr-3 rounded-lg size-8 my-8 w-96 mb-2 focus:outline-none sm:text-sm" placeholder="Name" type="text" name="name`} placeholder='Search...'/>
        </form>
      </div>

      <div className='space-y-4 flex flex-grow h-4/6'>
      <div className={`grid gap-8 space-y-4 ${bg_blue_30} rounded-lg m-auto w-full max-w-screen-lg p-4 min-h-full`}>
            <div className='p-4'>
              {loading ? (
                <div className="text-center">Cargando...</div>
              ) : (
                Object.entries(columns).map(([key, { label, color, characters }]) => (
                  <div key={key} className="flex items-start border border-y-indigo-50 border-x-transparent p-4">
                    <div className={`w-[50px] h-[75px] skew-y-12 transition-all duration-300 ${color} rounded-lg flex justify-center items-center mr-4`}>
                      {label}
                    </div>

                    <ReactSortable
                      list={characters}
                      setList={(newList) => 
                        setColumns(prev => ({
                          ...prev,
                          [key]: { ...prev[key], characters: newList },
                        }))
                      }
                      group="characters"
                      className="min-h-[10px] flex flex-wrap gap-2 flex-grow"
                    >
                      {characters.map((character) => (
                        <TierListCard 
                          key={character.id}
                          character={character}
                        />
                      ))}
                    </ReactSortable>
                  </div>
                ))
              )}
            </div>

            <div className={`border p-4 rounded-lg ${bg_blue_30}`}>
              <h3 className="text-lg font-semibold mb-4">Available characters</h3>
              <ReactSortable 
              list={characters} 
              setList={setCharacters}
              scroll={true} 
              scrollSensitivity={100} 
              scrollSpeed={25} 
              group="characters" 
              className="flex flex-wrap gap-4">
                {characters.map((character) => (
                  <TierListCard 
                    key={character.id}
                    character={character}
                  />
                ))}
              </ReactSortable>
            </div>
          </div>
      </div>

      <div className='my-8 flex justify-center space-x-4'>
      <button className={`rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 ${bg_blue_10}`}>
        publish
      </button>
      <button className={`rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 ${bg_blue_10}`}>
        cancel
      </button>
      </div>
    </div>
  );
}

