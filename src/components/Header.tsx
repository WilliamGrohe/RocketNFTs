import MetaMaskImg from '../assets/logo_MetaMask.svg'

export function Header(){
  return (
    <header className="flex justify-between m-16">
      <strong className="text-4xl">Rocket <span className="text-rocket-color_logo">NFTs</span></strong>
      <div className="nav flex gap-14 items-center">
        <a href="#">Comprar NFT</a>
        <a href="#">Sobre</a>
        <a href="#">FAQ</a>
      </div>
      <button className="
        bg-rocket-text_color 
        text-rocket-black_text 
          font-bold 
          h-12 p-4 
          flex items-center 
          gap-3 
        ">
        <img src={MetaMaskImg} alt="" />
        Conectar Carteira
      </button>
    </header>
  )
}