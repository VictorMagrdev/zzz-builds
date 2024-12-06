'use client';
import { useEffect, useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import html2canvas from "html2canvas-pro";
import { ReactSortable } from "react-sortablejs";
import { bg_blue_30, bg_blue_10 } from "../tokens";
import { getAllCharacters, getUserProfile, tierListPost } from "@/libs/api_general";
import { Character } from "@/types/api-general";
import { TierListCard } from "../organisms/tier-list-card";
import useStore from "@/store/useStore";
import { useRouter } from "next/navigation";

interface TierColumn {
  label: string;
  color: string;
  characters: Character[];
}

interface Columns {
  [key: string]: TierColumn;
}

interface FormValues {
  name: string;
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
  const captureRef = useRef<HTMLDivElement>(null);
  const token = useStore((store) => store.token);
  const [profile, setProfile]:any = useState(null);
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter()
  useEffect(() => {
    if (token) {
        const fetchProfile = async () => {
          try {
              let data = await getUserProfile(token);
              setProfile(data.username);
          } catch (error) {
              console.error("Failed to fetch profile:", error);
          }
      };
      fetchProfile()

    }
    getAllCharacters()
      .then((data: Character[]) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Error al consultar la información del API");
        setLoading(false);
      });
  }, [token]);

  const captureImage: SubmitHandler<FormValues> = async (data) => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imgData = canvas.toDataURL("image/png");
  
      const imageBlob = await fetch(imgData)
        .then(res => res.blob());
  
      const formData = new FormData();
      formData.append("image", imageBlob, `${data.name || "tierlist"}.png`);
      formData.append("nombre", data.name);
      formData.append("usuario", profile.username);
      const postStatus = await tierListPost(formData,token);
      if (postStatus == 201) {
        router.push('/zenless-zone-zero/tier-list');
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit(captureImage)} className="flex flex-col justify-center">
      <div className="my-8 flex justify-center space-x-4">
        <input
          {...register("name", { required: true })}
          className={`placeholder:text-slate-500 block ${bg_blue_10} border py-2 pl-9 pr-3 rounded-lg size-8 my-8 w-96 mb-2 focus:outline-none sm:text-sm`}
          placeholder="Nombre de la tier list..."
        />
      </div>

      <div className="space-y-4 flex flex-grow h-4/6">
        <div
          
          className={`grid gap-8 space-y-4 ${bg_blue_30} rounded-lg m-auto w-full max-w-screen-lg p-4 min-h-full`}
        >
          <div className="p-4" ref={captureRef}>
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
                      setColumns((prev) => ({
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
              className="flex flex-wrap gap-4"
            >
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

      <div className="my-8 flex justify-center space-x-4">
        <button
          type="submit"
          className={`rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 ${bg_blue_10}`}
        >
          Publicar
        </button>
        <button
          type="button"
          onClick={() => console.log("Cancelar")}
          className={`rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 ${bg_blue_10}`}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
