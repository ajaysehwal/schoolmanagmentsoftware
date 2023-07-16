// import React from 'react';
// import Hero from '../components/hero'
import Hero from '../components/hero';
import AppNav from '../components/Navbar';
import Features from '../components/features';
import Stats from '../components/stats';
import Footer from "../components/footer";
export default function Home() {
  return (
    <body style={{background:"white"}}>

      <AppNav />
      <Hero />

      <Features />

      <Stats />
      <Footer/>
    </body>
  );
}
