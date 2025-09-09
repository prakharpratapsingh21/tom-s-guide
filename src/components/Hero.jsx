import React from 'react'

function Hero() {
  return (
    <>
        <section className='px-6 md:px-12 py-10 bg-blue-50 grid gap-6 md:grid-cols-2 lg:grid-cols-2'>
        {[
          {
            title: "iPhone 17 event countdown live — release date, specs, prices and all the last-minute rumors",
            desc: "The iPhone 17 launch event is drawing ever closer, and we're counting down the days until all the big reveals.",
            img: "https://cdn.mos.cms.futurecdn.net/PkXHk69hWzvPaSPgtb8Wrm-970-80.jpg.webp",
          },
          {
            title: "iPhone 17 Pro's long-awaited charging upgrade could be a huge embarrassment for Google Pixel 10 — here's why",
            desc: "Catch up on all the announcements from Apple's latest event",
            img: "https://images.unsplash.com/photo-1651614423613-47ab0aaf3527?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Best TVs 2024: Top picks for every budget",
            desc: "Find the right TV for gaming, movies, and sports",
            img: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "This $20 plastic wrap storage hack is so genius, I can’t believe I didn’t discover it sooner",
            desc: "Track fitness, health, and more with these picks",
            img: "https://cdn.mos.cms.futurecdn.net/ZKuHP3m3NHL4bCEiVBGEem-840-80.jpg.webp",
          },
        ].map((item,index)=>(
            <div key={index} className='p-4 flex flex-col bg-white rounded-lg items-start shadow-sm hover:shadow-lg transition'>
                <img src={item.img} alt={item.title} className='w-full h-56 object-cover mb-4 rounded-lg'/>
                <div>
                    <h2 className='text-lg font-semibold mb-2'>{item.title}</h2>
                    <p className='text-sm text-gray-600 mb-4'>{item.desc}</p>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>Read More</button>
                </div>
            </div>
        ))}
        </section>
    </>
  )
}

export default Hero