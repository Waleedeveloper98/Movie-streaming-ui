import React from "react";
import Card from "../../GeneralComponents/Card";
import bg1 from "../../assets/images/card1.webp";
import bg2 from "../../assets/images/card2.webp";
import bg3 from "../../assets/images/card6.webp";
import bg4 from "../../assets/images/card4.webp";
import bg5 from "../../assets/images/card5.webp";

const CardsSection = () => {
  const showsData = [
    {
      bannerImg: bg1,
      title: "The Glow of the Lost Trail",
      episode: "S1, E3",
      time: "30min 45sec",
      width: 42,
    },
    {
      bannerImg: bg2,
      title: "When the Magic Awoke",
      episode: "S2, E1",
      time: "45min 10sec",
      width: 67,
    },
    {
      bannerImg: bg3,
      title: "The Girl Who Woke the Magic",
      episode: "S1, E7",
      time: "28min 59sec",
      width: 18,
    },
    {
      bannerImg: bg4,
      title: "Rise of the Last Guardian",
      episode: "S3, E4",
      time: "52min 30sec",
      width: 81,
    },
    {
      bannerImg: bg5,
      title: "The Path We Didn’t Plan",
      episode: "S2, E9",
      time: "33min 20sec",
      width: 55,
    },
  ];

  return (
    <div
      id="cardsSection"
      className="overflow-auto py-6 md:py-4 flex items-center gap-6 
      [mask-image:linear-gradient(to_left,transparent_0%,black_5%,black_95%,transparent_100%)]
      "
    >
      {showsData.map((show, idx) => (
        <Card key={idx} show={show} />
      ))}
    </div>
  );
};

export default CardsSection;
