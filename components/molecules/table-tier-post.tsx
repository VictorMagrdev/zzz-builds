'use client';
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { bg_blue_30 } from "../tokens";
import { getAllCharacters } from "@/libs/api_general";
import { Character } from "@/types/api-general";
import { TierListCard } from "../organisms/tier-list-card";

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
    <div className={`grid gap-8 space-y-4 ${bg_blue_30} rounded-lg mx-auto max-h-lvh w-full max-w-screen-lg my-auto p-4`}>
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
  );
}