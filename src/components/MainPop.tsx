import ArrowWhiteImg from "../assets/arrow-white.svg";
import Astronauta1Img from "../assets/astronauta-1.png";
import Astronauta2Img from "../assets/astronauta-2.png";
import Astronauta3Img from "../assets/astronauta-3.png";
import Astronauta4Img from "../assets/astronauta-4.png";

export function MainPop() {
  return (
    <main className="bg-rocket-background px-20">
      <h1 className="font-bold text-[50px] py-36 ">
        <span className="text-rocket-color_logo">Populares</span> da semana
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-12">
          <ul className="max-w-sm">
            <li className="flex justify-between mb-6">
              <h3 className="font-medium text-2xl">Astronauta 1</h3>
              <img src={ArrowWhiteImg} className="w-2xl" alt="" />
            </li>
            <li className="flex justify-between mb-6">
              <span className="text-rocket-subtitl_color font-semibold">
                Mayk Brito
              </span>
              <span className="text-rocket-color_logo">1.50 RKT</span>
            </li>
            <li>
              <img src={Astronauta1Img} alt="" className="w-[100%]" />
            </li>
          </ul>

          <ul className="max-w-sm">
            <li className="flex justify-between mb-6">
              <h3 className="font-medium text-2xl">Astronauta 3</h3>
              <img src={ArrowWhiteImg} className="w-2xl" alt="" />
            </li>
            <li className="flex justify-between mb-6">
              <span className="text-rocket-subtitl_color font-semibold">
                João Inácio (Biro)
              </span>
              <span className="text-rocket-color_logo">3.75 RKT</span>
            </li>
            <li>
              <img src={Astronauta3Img} alt="" className="w-[100%]" />
            </li>
          </ul>
        </div>

        <span className="border-r border-rocket-subtitl_color"></span>

        <div className="flex flex-col gap-12"> 
          <ul className="max-w-sm">
            <li className="flex justify-between mb-6">
              <h3 className="font-medium text-2xl">Astronauta 2</h3>
              <img src={ArrowWhiteImg} className="w-2xl" alt="" />
            </li>
            <li className="flex justify-between mb-6">
              <span className="text-rocket-subtitl_color font-semibold">
                Jakeliny Gracielly
              </span>
              <span className="text-rocket-color_logo">2.00 RKT</span>
            </li>
            <li>
              <img src={Astronauta2Img} alt="" className="w-[100%]" />
            </li>
          </ul>

          <ul className="max-w-sm">
            <li className="flex justify-between mb-6">
              <h3 className="font-medium text-2xl">Astronauta 4</h3>
              <img src={ArrowWhiteImg} className="w-2xl" alt="" />
            </li>
            <li className="flex justify-between mb-6">
              <span className="text-rocket-subtitl_color font-semibold">
                Tamires Santos
              </span>
              <span className="text-rocket-color_logo">4.30 RKT</span>
            </li>
            <li>
              <img src={Astronauta4Img} alt="" className="w-[100%]" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
