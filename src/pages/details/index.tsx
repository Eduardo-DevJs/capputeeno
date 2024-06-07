import { Link, useParams } from "react-router-dom";
import backHome from "../../assets/imgs/voltar.png";
import Container from "../../components/container";
import cart from "../../assets/imgs/shopping-bag2.png";
import { useEffect, useState } from "react";
import { ProductProps } from "../../types/product.type";
import { products } from "../../data/products";
import { FormatCurrency } from "../../utils/FormatCurrency";

export default function DetailProduct() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<ProductProps | null>(null);

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    setProductDetails(product || null);
  }, [id]);

  return (
    <main>
      <Container>
        {productDetails ? (
          <section className="mt-5">
            <div className="flex items-center gap-2">
              <img src={backHome} alt="Botao para voltar" />
              <Link to={"/"}>Voltar</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
              <img
                className="object-cover w-[640px] h-[580px] rounded-md"
                src={productDetails.image}
                alt={productDetails.title}
              />

              <div className="flex flex-col justify-between">

                <div className="flex flex-col gap-14">
                  <div className="space-y-3">
                    <h1 className="text-3xl text-[#41414D]">
                      {productDetails.title}
                    </h1>
                    <p className="font-bold text-xl">
                      {FormatCurrency(productDetails.price)}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h2 className="uppercase text-xl text-[#41414D] font-semibold">
                      Descrição
                    </h2>
                    <p className="leading-normal text-base">
                      {productDetails.description}
                    </p>
                  </div>
                </div>

                <button className="flex items-center mt-4 md:mt-0 gap-5 justify-center p-3 rounded-md text-xl font-bold bg-[#115D8C] text-white">
                  <img src={cart} alt="icone carrinho de compras" />
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div>
            <h1 className="text-4xl text-center mt-10">
              Produto não encontrado
            </h1>
          </div>
        )}
      </Container>
    </main>
  );
}
