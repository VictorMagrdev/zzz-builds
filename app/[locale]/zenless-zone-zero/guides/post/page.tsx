import type { Metadata } from "next";
import { bg_blue_30 } from "@/components/tokens";
import { NewArticle } from "@/components/screens/Editor";
import EditFile from "@/components/screens/EditFile/EditFile";

export const metadata: Metadata= {
  title: 'Guides',
  description: 'Guides description',
}

export default function Guides() {
    return (
      <>
        <main
        className={`flex flex-col max-w-5xl mx-auto w-full h-screen overflow-y-auto p-4 mt-4 ${bg_blue_30} rounded-lg`}
      >
        <EditFile/>
      </main>

      </>
      
    );
  }
  