import prouct from "../../../public/product1.png";
import trash from "../../assets/imgs/trash.png";

export default function CartItem() {
  return (
    <div className="mt-5 flex flex-col gap-4">
      <div className="flex">
        <img
          className="object-fill rounded-l-md w-[256px] h-[211px]"
          src={prouct}
          alt=""
        />

        <div className="flex flex-col justify-around rounded-md bg-white w-4/5 p-5 shadow-md">
          <header className="flex py-2 items-center justify-between">
            <h2>Caneca de cerâmica rústica</h2>
            <button>
              <img src={trash} alt="Icone de lixeira" />
            </button>
          </header>

          <p className="text-gray-500 leading-normal text-base">
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                -
              </button>
              <span className="text-lg font-semibold">1</span>

              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                +
              </button>
            </div>

            <p className="font-bold text-xl">R$ 40,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
