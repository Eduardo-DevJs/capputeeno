import { Link } from "react-router-dom";
import Item from "../../components/Item";
import Container from "../../components/container";
import { products } from "../../data/products";

export default function Home() {
  return (
    <div className="mt-5 pb-10">
      <Container>
        <div className="flex items-center flex-col gap-3 md:flex-row md:gap-0 justify-between">
          <nav>
            <ul className="flex items-center gap-5">
              <li className="uppercase cursor-pointer text-[#41414D] font-bold text-sm md:text-xl">
                Todos os produtos
              </li>
              <li className="uppercase cursor-pointer text-[#41414D] font-bold text-sm md:text-xl">
                Camisetas
              </li>
              <li className="uppercase cursor-pointer text-[#41414D] font-bold text-sm md:text-xl">
                Canecas
              </li>
            </ul>
          </nav>
          <select
            className="outline-none text-[#737380] text-base items-end md:text-xl bg-transparent p-2"
            name="options"
          >
            <option value="for">Organizar por:</option>
            <option value="maior">Preço: Maior - menor</option>
            <option value="menor">Preço: Menor - maior</option>
          </select>
        </div>

        <section>
          <ul className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3">
            {products.map((product) => (
              <>
                <Link to={`/details/${product.id}`}>
                  <Item
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                </Link>
              </>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}
