import React from 'react'
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import Trending from 'HomePage/Trending';
import CategoryGrid from 'HomePage/CategoryGrid';
import NFTCollection from 'HomePage/NFTCollection';
import NFTBanner from 'HomePage/NFTBanner';
import InstructionSteps from 'HomePage/InstructionSteps';
import NewsletterSubscription from 'HomePage/NewsletterSubscription';
import Footer from 'HomePage/Footer';

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Trending />
      <CategoryGrid />
      <NFTCollection />
      <NFTBanner />
      <InstructionSteps />
      <NewsletterSubscription />
      <Footer />
    </div>
  )
}

export default Home;


