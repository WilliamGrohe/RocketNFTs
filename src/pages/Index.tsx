import { Header } from "../components/Header";
import { MainInfos } from "../components/MainInfos";
import { MainPop } from "../components/MainPop";
import { MainTop } from "../components/MainTop";

export function Index() {
  return(
    <>
      <Header />
      <MainTop />
      <MainInfos />
      <MainPop />
    </>
  )
}