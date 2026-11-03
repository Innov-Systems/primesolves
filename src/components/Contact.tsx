"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/config/site";
import { products } from "@/data/products";
import s from "./Site.module.css";
export function Contact() {
  const [product, setProduct] = useState<string>();
  useEffect(() => {
    function sync() {
      const name = new URLSearchParams(window.location.hash.split("?")[1]).get(
        "interesse",
      );
      const selected = products.find((p) => p.id === name);
      setProduct(selected?.name);
      if (selected)
        document
          .getElementById("contato")
          ?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
    }
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const whatsapp = whatsappUrl(product);
  return (
    <section className={s.contact} id="contato">
      <div className={`${s.container} ${s.contactGrid}`}>
        <div>
          <span className={s.eyebrow}>VAMOS CONVERSAR</span>
          <h2>
            O próximo passo
            <br />
            começa com uma conversa<span className={s.blue}>.</span>
          </h2>
          <p>
            Conte o que você tem em mente. Vamos entender o seu desafio e
            encontrar o melhor caminho para o seu projeto.
          </p>
        </div>
        <div className={s.contactBox}>
          {product && (
            <p className={s.interest}>
              Seu interesse: <strong>{product}</strong>
            </p>
          )}
          {whatsapp || site.email ? (
            <>
              <h3>Fale com a Prime Solves</h3>
              <p>Escolha o canal que for melhor para você.</p>
              {whatsapp && (
                <a
                  className={s.button}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={19} /> Conversar no WhatsApp{" "}
                  <ArrowUpRight size={18} />
                </a>
              )}
              {site.email && (
                <a
                  className={s.email}
                  href={`mailto:${site.email}${product ? `?subject=${encodeURIComponent(`Interesse no ${product}`)}` : ""}`}
                >
                  <Mail size={18} />
                  {site.email}
                </a>
              )}
            </>
          ) : (
            <>
              <MessageCircle className={s.contactIcon} size={29} />
              <h3>Em breve, mais perto de você.</h3>
              <p>
                Estamos preparando nossos canais de atendimento. Em breve, você
                poderá falar diretamente com a Prime Solves por aqui.
              </p>
              <span className={s.pending}>
                <span /> Canais de contato em preparação
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
