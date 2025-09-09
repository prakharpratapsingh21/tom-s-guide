import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 px-6 md:px-12 py-10 mt-auto text-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto '>
            <div>
                <h3 className=' font-bold mb-2'>About Us</h3>
                <p className='text-justify px-10 text-sm'>Tom's Guide is your trusted source for tech news, reviews, and buying advice.</p>
            </div>
            
            <div>
                <h3 className='font-bold mb-2'>Categories</h3>
                <ul>
                    {['Phones','TV & Audio','AI', 'Gaming', 'Wellness'].map((item,index)=>(
                        <li key={index} className='text-sm hover:text-gray-400'><a href="">{item}</a></li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className=' font-bold mb-2'>Quick Links</h3>
                <ul>
                    {['About','Contact','Privacy Policy', 'Terms ofService'].map((item,index)=>(
                        <li key={index} className='text-sm hover:text-gray-400'><a href="">{item}</a></li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='font-bold mb-2'>Follow Us</h3>
                <ul>
                    {['Twitter','Facebook','Instagram','You Tube'].map((item,index)=>(
                        <li key={index} className='text-sm hover:text-gray-400'><a href="">{item}</a></li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">© 2024 Tom's Guide. All rights reserved.</div>
    </footer>
  )
}

export default Footer