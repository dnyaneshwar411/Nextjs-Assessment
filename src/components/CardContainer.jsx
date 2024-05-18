import Card from "./Card";

export default function CardContainer({ cards }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-12 lg:h-[400px]">
    {cards?.map(card => <Card key={card.id} card={card} />)}
  </div>
};