import CardHeading from "./CardHeading";
import Provider from "./Provider";

export default function DisplayCard({ card, selected }) {
  return <div className={`w-full pt-4 rounded-xl md:max-h-[50vh] ${selected ? "!aspect-video !rounded-b-none rounded-t-md" : "aspect-video md:aspect-square"} bg-cover bg-center`} style={{ backgroundImage: `url(${card.img})` }}>
    <div className="h-full flex flex-col font-bold">
      <CardHeading title1={card.title1} title2={card.title2} title3={card.title3} />
      {card.provider && <Provider provider={card.provider} />}
    </div>
  </div>
};