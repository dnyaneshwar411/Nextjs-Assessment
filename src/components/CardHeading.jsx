export default function CardHeading({ title1, title2, title3 }) {
  return <>
    <h3 className="uppercase text-[#929292] px-10">{title3}</h3>
    <h2 className="text-[28px] text-black px-10">{title2}</h2>
    <h1 className="max-w-[10ch] mt-auto text-[48px] px-10 leading-[1]">{title1}</h1>
  </>
};
