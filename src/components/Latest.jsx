import React from 'react'
import { FaStar } from 'react-icons/fa'
function Latest() {
  return (
    <section className='px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 flex-1'>
        <div className='md:col-span-2'>
            <h3 className='text-xl font-bold mb-6'>Latest Reviews</h3>

            <div className='space-y-6 grid grid-cols-1 '>
                {[
                    {
                        img:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fHww",
                        title:"iPhone 15 vs. iPhone 15 Pro: Which should you buy?",
                        stars: 4
                    },
                    {
                        img:"https://cdn.mos.cms.futurecdn.net/mxMC9NqqbrQT4wykfK5u28-450-80.jpg.webp",
                        title:"5 hidden ChatGPT-5 settings you should enable right now",
                        stars: 5
                    },
                    {
                        img:"https://cdn.mos.cms.futurecdn.net/TjxqCHyUzkecFZqs48bhSe-450-80.png.webp",
                        title:"iPhone 17 price rumors — here's what you could pay for all four models",
                        stars: 3
                    },{
                        img:"https://cdn.mos.cms.futurecdn.net/DCTPmGj44Rci8thyGgJWTW-450-80.jpg.webp",
                        title:"New releases on Netflix: 7 must-watch shows and movies this week",
                        stars: 4
                    }
                ].map((item,index)=>(
                    <div className='w-full flex gap-10 bg-white border-[1px] shadow-lg hover:shadow-xl rounded-lg p-4' key={index}>
                        <img src={item.img} alt={item.title} className='w-[150px] h-[150px] rounded-lg' />
                        <div className='px-10'>
                            <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                            <p className='flex text-amber-500'>{[...Array(item.stars)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className='w-full bg-sky-500 mt-6 text-white py-1 rounded-2xl cursor-pointer hover:bg-sky-600'>{'More>>'}</button>
        </div>

         {/* Trending Sidebar */}
        <aside className="bg-gray-100 p-10 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold mb-4">Trending</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">iPhone 17 event countdown live — release date, specs, prices and all the last-minute rumors</li>
            <li className="hover:text-blue-600 cursor-pointer">Want to keep Windows 10? Here’s the one thing you must do before the October deadline</li>
            <li className="hover:text-blue-600 cursor-pointer">Prime Video top 10 movies — here’s the 3 I’m adding to my watchlist this week</li>
            <li className="hover:text-blue-600 cursor-pointer">iPhone 17 vs iPhone 17 Air vs iPhone 17 Pro vs 17 Pro Max rumored specs: Here's what you need to know</li>
            <li className="hover:text-blue-600 cursor-pointer">Best laptops under $1000</li>
            <li className="hover:text-blue-600 cursor-pointer">5 top new shows to stream this week on Netflix, Hulu and more (Sept. 8-14)</li>
            <li className="hover:text-blue-600 cursor-pointer">Cloud Gaming Just KILLED the Console! Nvidia GeForce Now RTX 5080 Hands-on</li>
            <li className="hover:text-blue-600 cursor-pointer">I Replaced My iPhone and iPad Mini with the Galaxy Z Fold 7: Worth It?!</li>
          </ul>
        </aside>
    </section>
  )
}

export default Latest