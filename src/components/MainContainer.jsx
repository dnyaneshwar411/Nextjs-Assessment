import { today, yesterday } from "@/utils/cardInfo";
import CardContainer from "./CardContainer";
import Header from "./Header";
import { getFormatedDate } from "@/utils/utils";

import profile from "./../../public/profile.jpeg";

export default function MainContainer() {
  return <>
    <Header when={0} day="Today" profile={profile} />
    <CardContainer cards={today} />

    <Header when={-1} day="Yesterday" />
    <CardContainer cards={yesterday} />
  </>
};