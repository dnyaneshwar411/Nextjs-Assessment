"use client";

import { useEffect, useRef, useState } from "react";

import CardDisplay from "./CardDisplay";
import { toggleBodyScroll } from "@/utils/utils";

export default function Card({ card }) {
  const [selected, setSelected] = useState(false);

  const cardContainer = useRef(null);

  function toggleCard() {
    setSelected(prev => !prev);
    const doc = document.documentElement.getBoundingClientRect();
    const rect = cardContainer.current.getBoundingClientRect();
    console.log(window.innerWidth, window.innerHeight)
    console.log("rect- ", rect, "\ndoc- ", doc, "\ny scroll- ", (doc.height / 2) - (rect.top));

    if (!selected) {
      const xcord = `calc(${(doc.width / 2) - (rect.left)}px - 50%)`;
      const ycord = `calc(${(window.innerHeight / 2) - (rect.top)}px - 50vh)`;
      cardContainer.current.style.transform = `translate(${xcord}, ${ycord})`;
    } else {
      cardContainer.current.style.transform = "translate(0px)"
    }
  }

  useEffect(function () {
    toggleBodyScroll(selected)
  }, [selected]);


  return <div className={`!aspect-square md:max-h-[50vh] ${selected ? "relative md:py-[5vh] z-20" : "relative"}`}>
    <div className={`fixed ${selected ? "inset-0 backdrop-blur-xl" : ""}`}></div>
    <div
      ref={cardContainer}
      onClick={toggleCard}
      className={`transition-all origin-center duration-1000 relative overflow-y-auto ${selected ? " h-screen w-screen z-30 md:w-[768px] md:h-[90vh]" : "h-full"} w-full rounded-b-md`}
    >
      <CardDisplay card={card} selected={selected} />
      <div className={`w-full bg-[#1c1c1d] rounded-b-md transition-all origin-center duration-1000 overflow-hidden ${selected ? "px-8 pt-4 pb-8 h-auto" : "h-0 p-0 "}`} dangerouslySetInnerHTML={{ __html: card.description }}></div>
    </div>
  </div >
}