import { bg_blue_30 } from "@/components/tokens"
import ZenlessIndex from "../assets/images/ZenlessIndex.jpeg"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className={`flex flex-col max-w-5xl mx-auto h-screen p-4 mt-4 ${bg_blue_30}`}>
        <h1 className="text-2xl font-bold text-white drop-shadow-md">Zenless Zone Zero Guides Community</h1>
        <Image
          src={ZenlessIndex}
          width={800} 
          alt="Zenless main"
          className="mt-2 shadow-lg shadow-blue-500/50 rounded-sm"
        />

    </main>
    </>
  );
}
