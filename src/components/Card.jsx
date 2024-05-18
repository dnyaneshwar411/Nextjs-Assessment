"use client";

import { useEffect, useRef, useState } from "react";

import DisplayCard from "./CardDisplay";
import { toggleBodyScroll } from "@/utils/utils";

export default function Card({ card }) {
  const [selected, setSelected] = useState(false);

  const cardContainer = useRef(null);

  function toggleCard() {
    setSelected(prev => !prev);
    const doc = document.documentElement.getBoundingClientRect();
    const rect = cardContainer.current.getBoundingClientRect();

    if (!selected) {
      const xcord = `calc(${(doc.width / 2) - (rect.left)}px - 50%)`;
      const ycord = `calc(${(doc.height / 2) - (rect.top)}px - 100%)`;
      cardContainer.current.style.transform = `translate(${xcord}, ${ycord})`;
    } else {
      cardContainer.current.style.transform = "translate(0px)"
    }
  }

  useEffect(function () {
    toggleBodyScroll(selected)
  }, [selected]);


  return <div className={`aspect-square ${selected ? "relative" : "static"}`}>
    <div className={`fixed ${selected ? "inset-0 backdrop-blur-xl" : ""} z-20`}></div>
    <div
      ref={cardContainer}
      onClick={toggleCard}
      className={`h-full transition-all origin-center duration-750 relative oveflow-y-scroll ${selected && "z-30 md:w-[768px]"} w-full`}
    >
      <DisplayCard card={card} selected={selected} />
      <div className={`${selected && "h-[40vh]"} bg-red-400 overflow-y-scroll`}>
        {selected && <button className="absolute top-4 right-4 bg-black text-white text-lg px-3 aspect-square rounded-full z-20">&times;</button>}
        {selected && <div className="text-[20px] p-6 bg-[#1c1c1d] rounded-b-xl overflow-y-auto" dangerouslySetInnerHTML={{ __html: card.description }}></div>}
      </div>
    </div>

    {/* <div onClick={() => setSelected(prev => !prev)} className={`flex flex-col ${selected && "fixed h-full w-full md:max-w-[768px] md:h-[90vh] translate-x-[-50%] translate-y-[-50%] z-10"} left-[50%] top-[50%] overflow-hidden z-20 transition-all bg-red`} >
      <div>
        {selected && <button className="absolute top-4 right-4 bg-black text-white text-lg px-3 aspect-square rounded-full z-20">&times;</button>}
        {selected && <div className="text-[20px] p-6 bg-[#1c1c1d] rounded-b-xl overflow-y-auto" dangerouslySetInnerHTML={{ __html: card.description }}></div>}

      </div>
    </div> */}
  </div >
}