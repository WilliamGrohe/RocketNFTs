import BannerImg from "../assets/banner.png";

export function MainInfos() {
  return (
    <main className="bg-rocket-background">
      <div className="flex border-b border-rocket-subtitl_color">
        <div className="flex flex-col m-auto p-16 text-center border-r border-rocket-subtitl_color">
          <span className="pb-10">
            <strong className="text-[50px]">10K+</strong>
            <br />
            Artes
          </span>

          <span className="pb-10">
            <strong className="text-[50px]">200+</strong>
            <br />
            Vendas
          </span>

          <span className="pb-10">
            <strong className="text-[50px]">20</strong>
            <br />
            Artistas
          </span>
        </div>
        <div className="mt-14">
          <div id="textos" className="flex font-normal">
            <div className="m-10">
              <p className="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id potenti diam et cras odio
                viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
                nunc semper.
              </p>
              <a href="#" className="">
                Lorem Ipsum
              </a>
            </div>

            <div className="m-10">
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id potenti diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>

            <a href="#" className="mt-10">Lorem Ipsum</a>
            </div>
          </div>
          <img
            src={BannerImg}
            alt="Banner 1 de um homem usando óculos"
            className="bottom-0 left-0"
          />
        </div>
      </div>
    </main>
  );
}
