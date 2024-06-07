import Container from "../../components/container";
import backHome from "../../assets/imgs/voltar.png";
import { Link } from "react-router-dom";
import ResumeCart from "../../components/cartResume";
import CartItem from "../../components/itemCart";

export default function Cart() {
  return (
    <div>
      <Container>
        <section className="mt-5">
          <div className="flex items-center gap-2">
            <img src={backHome} alt="Botao para voltar" />
            <Link to={"/"}>Voltar</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-y-5 md:gap-5">
            <div className="col-span-2">
              <div className="space-y-2">
                <h1 className="uppercase text-[#41414D] text-2xl font-semibold">
                  seu carrinho
                </h1>
                <p className="text-xl font-normal">
                  Total (3 produtos){" "}
                  <span className="font-bold">R$ 161,00</span>
                </p>
              </div>

              <CartItem />
            </div>

            <ResumeCart />
          </div>
        </section>
      </Container>
    </div>
  );
}
