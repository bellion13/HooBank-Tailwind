import React from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import StatsSection from './Components/StatsSection'
import Feature from './Components/Feature'
import PayPal from './Components/PayPal'
import BetterCard from './Components/BetterCard'
import People from './Components/People'
import TrustedBy from './Components/TrustedBy'
import CallToAction from './Components/CallToAction'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="bg-black text-white ">
      <Header />
      <Hero />
      <StatsSection />
      <Feature />
      <PayPal />
      <BetterCard />
      <People />
      <TrustedBy />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App