import { ClipboardIcon, PuzzlePieceIcon, MagnifyingGlassIcon, RocketLaunchIcon, ServerStackIcon } from "@heroicons/react/24/solid";

export const navLinks = [
  {
    id: 1,
    Icon: ClipboardIcon, active: true, linkTo: "Today"
  },
  {
    id: 2, Icon: RocketLaunchIcon, linkTo: "Games"
  },
  {
    id: 3, Icon: ServerStackIcon, linkTo: "Apps"
  },
  {
    id: 4, Icon: PuzzlePieceIcon, linkTo: "Arcade"
  },
  {
    id: 5, Icon: MagnifyingGlassIcon, linkTo: "Search"
  },
];