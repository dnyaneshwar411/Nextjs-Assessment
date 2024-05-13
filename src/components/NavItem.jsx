import Link from "next/link";

export default function NavItem({ active, Icon, linkTo }) {
  return <Link href="/" className={`${active ? "!text-[#026de1]" : "text-[#929292]"} md:flex gap-2 items-center`}>
    <Icon className="w-6 mx-auto" />
    <span className="text-[10px] md:text-[16px]">{linkTo}</span>
  </Link>
};