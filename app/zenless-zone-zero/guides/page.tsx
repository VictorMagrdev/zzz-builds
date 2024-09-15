import type { Metadata } from "next";
import Header from "@/components/molecules/Header";
import GuideArticle from "@/components/layout/GuideArticle";

export const metadata: Metadata= {
  title: 'Guides',
  description: 'Guides description',
}

export default function Guides() {
    return (
      <>
        <Header/>
        <main className="flex max-w-5xl mx-auto p-4 mt-10 bg-blue-700">
          <div className="w-3/4 space-y-6">
            <section id="filters" className="p-4 bg-blue-900 rounded-lg">
              <fieldset className="flex items-center space-x-3 h-14 rounded-lg bg-blue-950 p-4">
                <label className="text-white">Character:</label>
                <input className="w-1/3 p-2 text-sm text-gray-900 rounded" type="text" id="character-search" placeholder="Search..."/>
                <a href="#" className="text-blue-400 hover:underline">View Characters &gt;&gt;</a>
              </fieldset>
              
              <nav className="mt-4">
                <p className="text-white">Type of guide:</p>
                <ul className="flex space-x-3 mt-2">
                  <li ><button className="px-3 py-1 bg-blue-600 rounded text-white">Characters</button></li>
                  <li ><button className="px-3 py-1 bg-blue-600 rounded text-white">Update</button></li>
                  <li ><button className="px-3 py-1 bg-blue-600 rounded text-white">Mission</button></li>
                  <li ><button className="px-3 py-1 bg-blue-600 rounded text-white">Farming</button></li>
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

            <section id="guide-list" className="space-y-4">
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

          <aside id="news" className="ml-4 w-1/4 p-4 bg-gray-800 rounded-lg">
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
  