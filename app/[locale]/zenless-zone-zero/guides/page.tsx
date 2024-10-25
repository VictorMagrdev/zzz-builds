import type { Metadata } from "next";
import GuideArticle from "@/components/molecules/GuideArticle";
import { bg_blue_30 } from "@/components/tokens";
import { bg_blue_60 } from "@/components/tokens";
import Filter from "@/components/molecules/Filter";

export const metadata: Metadata= {
  title: 'Guides',
  description: 'Guides description',
}

export default function Guides() {
    return (
      <>
        <main className={`flex max-w-5xl mx-auto h-screen p-4 mt-4 ${bg_blue_30}`}>
          <div className="w-3/4 space-y-6">
            <Filter/>
            <section id="guide-list" className="space-y-5">
              <GuideArticle
                title="Ellen Joe Guide"
                author="Shark"
              />
              <GuideArticle
                title="Jane doe Guide"
                author="Rat"
              />
              <GuideArticle
                title="Koleda guide"
                author="Koala"
              />
              <GuideArticle
                title="Bear Guide"
                author="Bear"
              />
            </section>
          </div>

          <aside id="news" className={`ml-4 w-1/4 p-4 ${bg_blue_60} rounded-lg max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh]`}>
            <h2 className="text-white text-xl mb-4">NEWS</h2>
            <ul className="space-y-4 text-gray-300">
              <li><p>New Version 1.2 - Release Date Revealed!!</p></li>
              <li><p>New Character arrived to New Eridu - Meet Jade Doe</p></li>
              <li><p>Claim x50 Bangboos - Just use the code ...</p></li>
            </ul>
          </aside>
        </main>
      </>
      
    );
  }
  