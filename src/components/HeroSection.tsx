import React from 'react'
import NFTCard from './NFTCard';
import Button from './Button';
import HeroStats from './HeroStats';

function HeroSection() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
  }}>
        <div>
            <div>
            Discover digital art & Collect NFTs
            </div>
            <div>
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </div>
            <Button title={"Get Started"} icon="RocketLaunch"/>
            <HeroStats />
        </div>
        <NFTCard />
    </div>
  )
}

export default HeroSection;
