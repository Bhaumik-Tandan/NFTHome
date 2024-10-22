import React, { CSSProperties } from "react";
import heroData from "constants/heroData";
import Text from "./Text";
function HeroStats() {
  return (
    <Text style={styles.container}>
      {heroData.map((data, index) => (
        <div
          key={`hero-stat-${data.title}-${index}`}
          style={styles.statContainer}
        >
          <span style={styles.value}>{data.value}</span>
          <span style={styles.title}>{data.title}</span>
        </div>
      ))}
    </Text>
  );
}

const styles:Record<string,CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  statContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100px",
  },
  value: {
    fontSize: "28px",
    fontWeight: 700,
  },
  title: {
    fontSize: "20px", // Fixed the typo from "20x"
    fontWeight: 400,
  },
};

export default HeroStats;
