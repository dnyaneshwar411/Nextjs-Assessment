"use client";

import { useEffect, useState } from "react";

import DisplayCard from "./CardDisplay";
import { toggleBodyScroll } from "@/utils/utils";

export default function Card({ card }) {
  const [selected, setSelected] = useState(false);

  useEffect(function () {
    toggleBodyScroll(selected)
  }, [selected]);

  return <div>
    <div onClick={() => setSelected(prev => !prev)} className={`flex flex-col ${selected && "fixed h-full w-full md:max-w-[768px] md:h-[90vh] translate-x-[-50%] translate-y-[-50%] z-10"} left-[50%] top-[50%] overflow-hidden z-20`} >

      {selected && <button className="absolute top-4 right-4 bg-black text-white text-lg px-3 aspect-square rounded-full z-20">&times;</button>}
      <DisplayCard card={card} selected={selected} />
      {selected && <div className="text-[20px] p-6 bg-[#1c1c1d] rounded-b-xl overflow-y-auto" dangerouslySetInnerHTML={{ __html: card.description }}></div>}

    </div>
  </div>
};