import Image from "next/image";
import { Box } from "lucide-react";
import { site } from "@/config/site";
import s from "./Site.module.css";
export function Brand({ showIcon = false }: { showIcon?: boolean }) {
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
        <>
          {showIcon && (
            <Box
              className={s.brandIcon}
              size={30}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          )}
          <span>
            Prime<span className={s.brandLight}>Solves</span>
            <span className={s.brandDot}>.</span>
          </span>
        </>
      )}
    </a>
  );
}
