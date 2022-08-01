import { Header } from "../components/Header";
import { MainInfos } from "../components/MainInfos";
import { MainTop } from "../components/MainTop";

export function Index() {
  return(
    <>
      <Header />
      <MainTop />
      <MainInfos />
    </>
  )
}