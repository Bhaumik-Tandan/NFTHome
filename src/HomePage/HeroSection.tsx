import React from "react";
import NFTCard from "../components/NFTCard";
import Button from "../components/Button";
import HeroStats from "../components/HeroStats";
import Text from "../components/Text";
import { CSSProperties } from 'react';
function HeroSection() {
  return (
    <div style={styles.container}>
      <div>
        <Text style={{
          fontSize: "67px",
          fontWeight: 600,
        }}>
          Discover digital art & Collect NFTs
          </Text>
        <Text style={{
          fontSize: "22px",
          fontWeight: 400,
        }}>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </Text>
        <Button title={"Get Started"} icon="RocketLaunch" />
        <HeroStats />
      </div>
      <NFTCard />
    </div>
  );
}

export default HeroSection;

const styles :Record<string, CSSProperties>= {
  container: {
    padding: "5vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
