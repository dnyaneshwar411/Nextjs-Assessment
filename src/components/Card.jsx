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
      const ycord = `calc(${(window.innerHeight / 2) - (rect.top)}px - 50%)`;
      cardContainer.current.style.transform = `translate(${xcord}, ${ycord})`;
    } else {
      cardContainer.current.style.transform = "translate(0px)"
    }
  }

  useEffect(function () {
    toggleBodyScroll(selected)
  }, [selected]);


  return <div
    ref={cardContainer}
    onClick={toggleCard}
    className={`w-full transition-all duration-[400ms] linear ${selected ? "h-[100vh] md:h-[90vh] w-screen md:w-[768px] relative border-2 z-20 overflow-auto" : "relative overflow-hidden"} h-96 rounded-2xl border-2 `}
  >

    <div className={`${selected ? "h-screen" : "h-0"}`}>
      <CardDisplay card={card} selected={selected} />
      <div className="p-0 bg-[#1c1c1d]" dangerouslySetInnerHTML={{ __html: card.description }}></div>
    </div>

  </div >
}