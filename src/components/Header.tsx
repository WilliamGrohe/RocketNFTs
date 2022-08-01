export function Header(){
  return (
    <header className="flex justify-between m-10">
      <strong className="text-4xl">Rocket <span className="text-rocket-color_logo">NFTs</span></strong>
      <div className="nav flex gap-14 items-center">
        <a href="#">Comprar NFT</a>
        <a href="#">Sobre</a>
        <a href="#">FAQ</a>
      </div>
      <button className="bg-rocket-color_iput h-12 p-4 flex items-center border border-red-600">Conectar Carteira</button>
    </header>
  )
}