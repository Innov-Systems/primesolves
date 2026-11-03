export const projects: {
  title: string;
  description: string;
  category: string;
  visual: "leisure" | "auto" | "store";
  url?: string;
  image?: string;
}[] = [
  {
    title: "Área de Lazer",
    description: "Landing page com sistema de reservas.",
    category: "EXPERIÊNCIA & RESERVAS",
    visual: "leisure",
  },
  {
    title: "Serviços Automotivos",
    description:
      "Landing page com sistema de agendamento para instalação de insulfilm.",
    category: "SERVIÇOS & AGENDAMENTOS",
    visual: "auto",
  },
  {
    title: "Distribuidora de Bebidas",
    description: "Catálogo digital com sistema de pedidos.",
    category: "CATÁLOGO & PEDIDOS",
    visual: "store",
  },
];
export function validProjectUrl(value?: string) {
  if (!value) return false;
  try {
    return ["https:", "http:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}
