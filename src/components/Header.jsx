import Image from "next/image";

import { getFormatedDate } from "@/utils/utils";

export default function Header({ when, day, profile }) {
  const date = getFormatedDate(when);

  return <header className="flex items-end justify-between my-8">

    <div className="font-bold">
      <span className="text-[#929292] text-[13px] uppercase">
        {date}
      </span>
      <h2 className="text-[32px]">{day}</h2>
    </div>

    {profile && <Image
      src={profile}
      alt="profile image"
      className="w-10 aspect-square rounded-full"
    />}
  </header>
};