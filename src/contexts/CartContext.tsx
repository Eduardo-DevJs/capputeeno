import { PropsWithChildren, createContext, useState } from "react";
import { ProductProps } from "../types/product.type";
import { FormatCurrency } from "../utils/FormatCurrency";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
}

interface CartProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imagem?: string;
  amount: number;
  total: number;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: ProductProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      return;
    }

    const data: CartProps = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
    totalCart([...cart, data]);
  }

  function totalCart(items: CartProps[]) {
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    const formatedResult = FormatCurrency(result);

    setTotal(formatedResult);
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem].amount > 1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);

    setCart(removeItem);
    totalCart(removeItem);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        removeItemCart,
        cartAmount: cart.length,
        addItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
