import type { Metadata } from "next";
import GuideArticle from "@/components/molecules/GuideArticle";
import { bg_blue_30 } from "@/components/tokens";
import { bg_blue_60 } from "@/components/tokens";
import Filter from "@/components/molecules/Filter";
import ButtonCreation from "@/components/atoms/button";

export const metadata: Metadata= {
  title: 'Guides',
  description: 'Guides description',
}

export default function Guides() {
    return (
      <>
        <main
            className={`flex flex-col md:flex-row max-w-5xl mx-auto h-auto md:h-screen p-4 mt-4 ${bg_blue_30}`}
          >
      <div className="w-full md:w-3/4 space-y-6">
              <Filter />
              <section
                id="guide-list"
                className="space-y-5"
              >
                <GuideArticle title="Ellen Joe Guide" author="Shark" />
                <GuideArticle title="Jane Doe Guide" author="Rat" />
                <GuideArticle title="Koleda Guide" author="Koala" />
                <GuideArticle title="Bear Guide" author="Bear" />
              </section>
            </div>

            <aside
              id="news"
              className={`w-full md:w-1/4 mt-6 md:mt-0 p-4 m-4 ${bg_blue_60} rounded-lg max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh]`}
            >
              <h2 className="text-white text-xl mb-4">NEWS</h2>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <p>New Version 1.2 - Release Date Revealed!!</p>
                </li>
                <li>
                  <p>New Character arrived to New Eridu - Meet Jade Doe</p>
                </li>
                <li>
                  <p>Claim x50 Bangboos - Just use the code ...</p>
                </li>
              </ul>
            </aside>

            <ButtonCreation ruta="/zenless-zone-zero/guides/post" />
          </main>

      </>
      
    );
  }
  