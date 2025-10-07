import React from 'react';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import { Header } from './components/NavigationBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';




export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <Hero/>
      <About/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Footer/>
    </main>


  );
}