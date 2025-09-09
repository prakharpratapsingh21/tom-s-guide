import React from 'react'

function Best() {
  return (
    <section className='px-6 md:px-12 py-10 bg-blue-50 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {[
          {
            title: "Best budget office chairs of 2025: Impressive chairs for a much lower price",
            desc: "The best budget office chairs provide you with plenty of comfort and support along with a few more premium features, all without breaking the bank.",
            img: "https://cdn.mos.cms.futurecdn.net/89Y7Kve9PJkqRx7dEgrcHJ-800-80.jpg.webp",
            author: "By Anthony Spadafora Last updated 4 hours ago"
          },
          {
            title: "ChatGPT just quietly rolled out a game-changing upgrade — here’s why I'm already obsessed with it",
            desc: "ChatGPT just released a new feature that lets you branch out into multiple conversations within a single chat. Here's what it is and how to use it.",
            img: "https://cdn.mos.cms.futurecdn.net/jN3EBZbAaLRko8gjF6Uj9h-800-80.jpg.webp",
            author: "By Amanda Caswell Published 3 hours ago"
          },
          {
            title: "7 best shoes for Peloton and indoor cycling 2025: tried and tested by our fitness team",
            desc: "The best shoes for Peloton and home exercise bikes are tried and tested by our in-house Tom's Guide fitness team, including models by Peloton, Rapha and more.",
            img: "https://cdn.mos.cms.futurecdn.net/SGn7hQZNmxQBsCUFcZM6d7-800-80.jpg.webp",
            author: "By Jane McGuire Last updated September 5, 2025"
          },
          {
            title: "This $20 plastic wrap storage hack is so genius, I can’t believe I didn’t discover it sooner",
            desc: "Track fitness, health, and more with these picks",
            img: "https://cdn.mos.cms.futurecdn.net/ZKuHP3m3NHL4bCEiVBGEem-840-80.jpg.webp",
            author: "By Ruth Jones Published yesterday"
          },
          {
            title: "iPhone 17, Air, Pro and Pro Max battery capacities revealed early — here’s what you get",
            desc: "A new leak has revealed the likely iPhone 17 series battery capacities, including models that do not feature a physical SIM tray.",
            img: "https://cdn.mos.cms.futurecdn.net/pqxM2E44C95DBAxbSt5zzC-800-80.jpg.webp",
            author: "By Josh Render Published 31 minutes ago"
          },
          {
            title: "Galaxy S25 FE makes an impressive debut — and it could wind up as the best Samsung phone for most people",
            desc: "The Galaxy S25 FE combines a compelling camera setup, solid AI features and a flagship-beating price tag to make it a Samsung phone worth considering.",
            img: "https://cdn.mos.cms.futurecdn.net/PSjxkYRLoARKk2b4U7mcoF-800-80.jpg.webp",
            author: "By Philip Michaels Published yesterday"
          },
          {
            title: "A Pilates instructor's 8-minute secret to building stronger abs (no gym required)",
            desc: "Build stronger abs in 8 minutes with this beginner Pilates workout",
            img: "https://cdn.mos.cms.futurecdn.net/mCzdr98sHHtNxVFw3FovMD-800-80.jpg.webp",
            author: "By Becks Shepherd Last updated 2 hours ago"
          },
          {
            title: "This new AI voice recorder wants to be your affordable transcription device",
            desc: "The Soundcore Work is an AI voice recorder you'll be able to afford and want to use, offering versatile recording options for an attractive price.",
            img: "https://cdn.mos.cms.futurecdn.net/VYriPsgfDdmrNnxU46wnGU-800-80.jpg.webp",
            author: "By Richard Priday Published 2 days ago"
          },
        ].map((item,index)=>(
            <div key={index} className='p-4 flex flex-col bg-white rounded-lg items-start shadow-sm hover:shadow-lg transition '>
                <img src={item.img} alt={item.title} className='w-full h-56 object-cover mb-4 rounded-lg hover:scale-90 cursor-pointer'/>
                <div>
                    <h2 className='text-lg font-semibold mb-2 cursor-pointer hover:text-blue-500'>{item.title}</h2>
                    <p className='text-sm text-gray-800 mb-4 '>{item.desc}</p>
                    <h4 className='text-xs text-gray-500'>{item.author}</h4>
                    
                </div>
            </div>
        ))}
        </section>
  )
}

export default Best