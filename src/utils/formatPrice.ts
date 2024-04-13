export function formatToGeorgianLari(amount: number) {
  const formattedAmount = amount.toLocaleString("ka-GE", {
    style: "currency",
    currency: "GEL",
  });
  return formattedAmount.replace("GEL", "") + "₾";
}
