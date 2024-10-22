import React from "react";
import NFTCard from "./NFTCard";
import Button from "./Button";
import HeroStats from "./HeroStats";
import Text from "./Text";
function HeroSection() {
  return (
    <div style={styles.container}>
      <div>
        <Text>Discover digital art & Collect NFTs</Text>
        <div>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </div>
        <Button title={"Get Started"} icon="RocketLaunch" />
        <HeroStats />
      </div>
      <NFTCard />
    </div>
  );
}

export default HeroSection;

const styles = {
  container: {
    padding: "5vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
