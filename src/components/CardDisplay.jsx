import CardHeading from "./CardHeading";
import Provider from "./Provider";

export default function DisplayCard({ card, selected }) {
  return <div className={`w-full pt-4 rounded-xl flex flex-col h-96 ${selected && "!rounded-b-none rounded-t-md"} bg-cover bg-center`} style={{ backgroundImage: `url(${card.img})` }}>
    <CardHeading title1={card.title1} title2={card.title2} title3={card.title3} />
    {card.provider && <Provider provider={card.provider} />}
  </div>
};