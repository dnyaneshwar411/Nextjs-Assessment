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
    cardContainer.current.scrollTop = 0;
  }

  useEffect(function () {
    toggleBodyScroll(selected)
  }, [selected]);


  return <>
    <div className={`fixed left-0 top-0 ${selected ? "h-screen w-screen backdrop-blur-lg z-30" : "backdrop-blur-none z-[-1]"}`}></div>
    <div
      ref={cardContainer}
      onClick={toggleCard}
      className={`w-full transition-all duration-[380ms] linear ${selected ? "h-[100vh] md:h-[90vh] w-screen md:w-[768px] z-30 overflow-auto" : "overflow-hidden"} h-96 rounded-2xl`}
    >

      <div className={`${selected ? "h-screen" : "h-0"}`}>
        <CardDisplay card={card} selected={selected} />
        <div className="p-8 bg-[#1c1c1d]" dangerouslySetInnerHTML={{ __html: card.description }}></div>
      </div>

    </div >
  </>
}