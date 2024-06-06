import { Link } from "react-router-dom";
import cart from "../../assets/imgs/shopping-bag.png";
import Container from "../container";
export default function Header() {
  return (
    <header className="bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h1 className="text-[2.5rem] text-[#5D5D6D] font-bold">
              capputeeno
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <div className="w-[352px]">
              <input
                className="w-full outline-none px-4 py-2 bg-[#F3F5F6] text-[##737380] rounded-lg text-base"
                type="text"
                placeholder="Procurando por algo específico?"
              />
            </div>

            <div className="relative">
              <Link to={"/cart"}>
                <img src={cart} alt="Carrinho de compras" />
              </Link>
              <div className="absolute flex items-center justify-center bg-red-500 -right-2 -bottom-3 rounded-full w-5 h-5 text-white font-bold">
                1
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
