import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Advantages from '../components/Advantages'
import Popular from '../components/Popular'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Hero />
        <NavBar />
        <Advantages />
        <Popular />
        <Footer />
    </div>
  )
}
