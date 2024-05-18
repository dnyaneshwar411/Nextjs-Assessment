import CardHeading from "./CardHeading";
import Provider from "./Provider";

export default function DisplayCard({ card, selected }) {
  return <div className={`bg-red-800 w-full pt-4 border-2 rounded-xl ${selected ? "h-[100%] aspect-video !rounded-b-none" : "aspect-video md:aspect-square max-h-[50vh]"} bg-cover bg-center`} style={{ backgroundImage: `url(${card.img})` }}>
    <div className="h-full flex flex-col font-bold">
      <CardHeading title1={card.title1} title2={card.title2} title3={card.title3} />
      {card.provider && <Provider provider={card.provider} />}
    </div>
  </div>
};