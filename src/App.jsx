import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Latest from './components/Latest'
import Best from './components/Best'
import FooterSection from './components/FooterSection'
function App() {
  return (
    <>
      <div className='min-h-screen bg-white text-gray-900 font-sans flex flex-col'>
        {/* Header Section */}
        <Header/>
        {/* Hero Section */}
        <Hero/>
        {/* Latest News Section */}
        <Latest/>
        {/* Best Picks Section */}
        <Best/>
        {/* Footer Section */}
        <FooterSection/>
      </div>
    </>
  )
}

export default App