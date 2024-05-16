export type Tab = {
  id: string;
  label: string;
  isActive: boolean;
};
export const tabs: Tab[] = [
  { id: "orders", label: "შეკვეთები", isActive: true },
  { id: "addresses", label: "მისამართები", isActive: false },
  { id: "accountDetails", label: "ანგარიშის დეტალები", isActive: false },
  { id: "logout", label: "გამოსვლა", isActive: false },
];
