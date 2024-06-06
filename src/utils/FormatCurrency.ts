export const FormatCurrency = (currency: number) => {
  const conversionCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currency);
  return conversionCurrency;
};
