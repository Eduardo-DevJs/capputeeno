export default function ResumeCart() {
  return (
    <div className="bg-white h-fit p-3 shadow-md space-y-3 rounded-md">
      <h1 className="uppercase font-bold text-xl text-[#41414D]">
        Resumo do pedido
      </h1>
      <div className="flex items-center justify-between">
        <h2>Subtotal de produtos</h2>
        <span>R$ 161,00</span>
      </div>
      <div className="flex items-center justify-between">
        <h2>Entrega</h2>
        <span>R$ 40,00</span>
      </div>
      <div className="h-px bg-gray-200"></div>
      <div className="font-bold flex items-center justify-between">
        <h2>Total</h2>
        <span>R$ 201,00</span>
      </div>
      <button className="p-2 rounded-md w-full bg-[#51B853] font-bold text-white uppercase">
        Finalizar a compra
      </button>
    </div>
  );
}
