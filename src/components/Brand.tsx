import Image from "next/image";
import { site } from "@/config/site";
import s from "./Site.module.css";
export function Brand() {
  return (
    <a href="#inicio" className={s.brand} aria-label="Prime Solves — início">
      {site.logo ? (
        <Image
          src={site.logo}
          alt="Prime Solves"
          width={176}
          height={44}
          priority
        />
      ) : (
        <span>
          prime<span className={s.brandLight}>solves</span>
          <span className={s.brandDot}>.</span>
        </span>
      )}
    </a>
  );
}
