import React from 'react'
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import Trending from 'components/HomePage/Trending';
import CategoryGrid from 'components/HomePage/CategoryGrid';
import NFTCollection from 'components/HomePage/NFTCollection';
import NFTBanner from 'components/HomePage/NFTBanner';
import InstructionSteps from 'components/HomePage/InstructionSteps';
import NewsletterSubscription from 'components/HomePage/NewsletterSubscription';
import Footer from 'components/HomePage/Footer';

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

