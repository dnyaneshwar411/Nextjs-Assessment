import NavItem from "./NavItem";

import { navLinks } from "@/utils/menu";

export default function Menu() {
  return <nav className="w-full bg-[#121212] fixed left-0 border-y-2 border-[#222] px-4 py-4 bottom-0 z-10">
    <div className=" flex justify-between max-w-[1200px] mx-auto">
      {navLinks.map(navLink => <NavItem key={navLink.id} active={navLink.active} Icon={navLink.Icon} linkTo={navLink.linkTo} />)}
    </div>
  </nav>
};