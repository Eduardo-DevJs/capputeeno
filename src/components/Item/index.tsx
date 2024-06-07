import { FormatCurrency } from "../../utils/FormatCurrency";

interface ProductItemProps {
  image: string;
  price: number;
  title: string;
}

export default function Item({ image, price, title }: ProductItemProps) {
  return (
    <li className="flex bg-white rounded-md flex-col gap-3">
      <img className="rounded-t-md" src={image} alt={title} />
      <div className="p-2 space-y-2">
        <h1 className="text-xl text-[#41414D]">{title}</h1>
        <div className="h-px bg-gray-200"></div>
        <p className="text-[#09090A] font-bold">{FormatCurrency(price)}</p>
      </div>
    </li>
  );
}
