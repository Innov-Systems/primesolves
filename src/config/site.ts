function validUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.origin : undefined;
  } catch {
    return undefined;
  }
}
const phone = process.env.NEXT_PUBLIC_WHATSAPP?.trim();
const email = process.env.NEXT_PUBLIC_EMAIL?.trim();
export const site = {
  name: "Prime Solves",
  description:
    "Desenvolvemos sistemas sob medida, sites profissionais e soluções digitais para empresas. Conheça a Prime Solves.",
  url: validUrl(process.env.NEXT_PUBLIC_SITE_URL),
  whatsapp: phone && /^[1-9]\d{9,14}$/.test(phone) ? phone : undefined,
  email: email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined,
  // Adicione o arquivo original em public/brand e informe o caminho abaixo.
  logo: undefined as string | undefined,
  social: [] as { label: string; url: string }[],
};
export function whatsappUrl(product?: string) {
  return site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(product ? `Olá! Tenho interesse no ${product}. Gostaria de saber mais.` : "Olá! Gostaria de conversar sobre um projeto com a Prime Solves.")}`
    : undefined;
}
