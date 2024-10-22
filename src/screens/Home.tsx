import React from 'react'
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Trending from 'components/Trending';
import CategoryGrid from 'components/CategoryGrid';
import NFTCollection from 'components/NFTCollection';
import NFTBanner from 'components/NFTBanner';
import InstructionSteps from 'components/InstructionSteps';
import NewsletterSubscription from 'components/NewsletterSubscription';
import Footer from 'components/Footer';

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


