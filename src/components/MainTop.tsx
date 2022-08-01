import BadgeImg from "../assets/badge.svg";
import AvatarsImg from "../assets/group-avarts.png";

import Galeria1 from "../assets/galeria-1.png";
import Galeria2 from "../assets/galeria-2.png";
import Galeria3 from "../assets/galeria-3.png";
import Galeria4 from "../assets/galeria-4.png";
import Galeria5 from "../assets/galeria-5.png";
import Galeria6 from "../assets/galeria-6.png";
import Galeria7 from "../assets/galeria-7.png";
import Galeria8 from "../assets/galeria-8.png";

export function MainTop() {
  return (
    <>
      <main className=" flex justify-between m-auto w-11/12 items-center">
        <div className="max-w-[400px] mr-6">
          <p className="text-lg">
            Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você.
          </p>
          <div className="flex items-end mt-14">
            <img src={AvatarsImg} alt="" />
            <p>
              <strong>+10</strong> <br /> artistas relacionados
            </p>
          </div>
        </div>

        <div className="w-[596px] font-bold text-[50px]">
          <p>
            Descubra a verdadeira arte digital e colecione diversas{" "}
            <span className="text-rocket-color_logo">NFTs</span>
          </p>
        </div>

        <div className="">
          <img src={BadgeImg} alt="" className="w-52" />
        </div>
      </main>
      <div className="gap-4 columns-4 colum m-14">
        <img src={Galeria1} alt="Foto da galeria de nfts numeero 1" className="border border-rocket-text_color"/>
        <img src={Galeria2} alt="Foto da galeria de nfts numeero 2" className="border border-rocket-text_color"/>
        <img src={Galeria3} alt="Foto da galeria de nfts numeero 3" className="border border-rocket-text_color"/>
        <img src={Galeria4} alt="Foto da galeria de nfts numeero 4" className="border border-rocket-text_color"/>
      </div>
      <div className="gap-4 columns-4 colum mx-14">
        <img src={Galeria5} alt="Foto da galeria de nfts numeero 5" className="border border-rocket-text_color"/>
        <img src={Galeria6} alt="Foto da galeria de nfts numeero 6" className="border border-rocket-text_color"/>
        <img src={Galeria7} alt="Foto da galeria de nfts numeero 7" className="border border-rocket-text_color"/>
        <img src={Galeria8} alt="Foto da galeria de nfts numeero 8" className="border border-rocket-text_color"/>
      </div>
    </>
  );
}
