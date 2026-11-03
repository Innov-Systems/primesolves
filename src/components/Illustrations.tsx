import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CodeXml,
  LayoutDashboard,
  Layers3,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import s from "./Site.module.css";
export function HeroVisual() {
  return (
    <div
      className={s.heroVisual}
      role="img"
      aria-label="Composição conceitual de módulos de software conectados: gestão, agendamentos e integrações"
    >
      <div className={s.orbit} />
      <div className={s.orbitSmall} />
      <div className={s.visualTop}>
        <span className={s.tinyDot} /> IDEIAS CONECTADAS. POSSIBILIDADES REAIS.
      </div>
      <div className={s.dashboard}>
        <div className={s.windowBar}>
          <span />
          <span />
          <span />
          <small>Seu próximo projeto</small>
          <CodeXml size={13} />
        </div>
        <div className={s.dashBody}>
          <aside>
            <div className={s.dashLogo}>
              p<span>.</span>
            </div>
            <LayoutDashboard />
            <Layers3 />
            <CalendarDays />
            <Workflow />
          </aside>
          <div className={s.dashContent}>
            <div className={s.dashHeading}>
              <div>
                <small>VISÃO GERAL</small>
                <strong>Seu negócio, conectado.</strong>
              </div>
              <span>
                <ArrowUpRight size={16} />
              </span>
            </div>
            <div className={s.dashStats}>
              <div>
                <Layers3 size={15} />
                <span>Processos</span>
                <b>Organizados</b>
              </div>
              <div>
                <Workflow size={15} />
                <span>Operações</span>
                <b>Integradas</b>
              </div>
            </div>
            <div className={s.chart}>
              <div className={s.chartTitle}>
                Uma nova perspectiva <span>EVOLUÇÃO</span>
              </div>
              <svg viewBox="0 0 320 100" aria-hidden="true">
                <defs>
                  <linearGradient id="chartfill" x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="#168bff" stopOpacity=".28" />
                    <stop offset="1" stopColor="#168bff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 85 C30 85 35 60 60 64 S95 78 120 49 S155 60 180 34 S220 44 250 22 S285 30 320 6 V100 H0Z"
                  fill="url(#chartfill)"
                />
                <path
                  d="M0 85 C30 85 35 60 60 64 S95 78 120 49 S155 60 180 34 S220 44 250 22 S285 30 320 6"
                  fill="none"
                  stroke="#39b9ff"
                  strokeWidth="2.5"
                />
              </svg>
              <div className={s.chartAxis}>
                <span>IDEIA</span>
                <span>DESENVOLVIMENTO</span>
                <span>EVOLUÇÃO</span>
              </div>
            </div>
            <div className={s.dashBottom}>
              <span>
                <i /> Construído para o seu negócio
              </span>
              <Check size={14} />
            </div>
          </div>
        </div>
      </div>
      <div className={s.floatCode}>
        <CodeXml size={20} />
        <div>
          <b>Feito sob medida</b>
          <span>Do desafio à solução.</span>
        </div>
        <span className={s.floatCheck}>
          <Check size={13} />
        </span>
      </div>
      <div className={s.floatModule}>
        <div>
          <Layers3 size={19} />
        </div>
        <span>
          Soluções que
          <br />
          <b>se conectam.</b>
        </span>
      </div>
      <span className={s.visualCaption}>
        INTERFACE CONCEITUAL · PRIME SOLVES
      </span>
    </div>
  );
}
export function ProductVisual({ type }: { type: string }) {
  const agenda = type === "agenda";
  return (
    <div
      className={`${s.productVisual} ${agenda ? s.agendaVisual : s.ordersVisual}`}
      role="img"
      aria-label={`Prévia conceitual do ${agenda ? "Prime Agenda" : "Prime Pedidos"}, produto em desenvolvimento`}
    >
      <div className={s.productWindow}>
        <div className={s.productWindowHead}>
          <span>
            {agenda ? <CalendarDays size={16} /> : <ShoppingBag size={16} />}{" "}
            {agenda ? "prime agenda" : "prime pedidos"}
          </span>
          <span>•••</span>
        </div>
        {agenda ? (
          <>
            <div className={s.calendarHeading}>
              <b>Sua semana, organizada.</b>
              <small>Visão de agenda</small>
            </div>
            <div className={s.calendarDays}>
              {["SEG", "TER", "QUA", "QUI", "SEX"].map((d, i) => (
                <div key={d}>
                  <small>{d}</small>
                  <b className={i === 2 ? s.selectedDay : ""}>{12 + i}</b>
                </div>
              ))}
            </div>
            <div className={s.calendarSlots}>
              <div>
                <small>09:00</small>
                <span>
                  Atendimento <i>Confirmado</i>
                </span>
              </div>
              <div>
                <small>10:00</small>
                <span>
                  Horário disponível <i>Reservar</i>
                </span>
              </div>
              <div>
                <small>11:00</small>
                <span>
                  Atendimento <i>Confirmado</i>
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={s.calendarHeading}>
              <b>Uma vitrine de possibilidades.</b>
              <small>Seu catálogo digital</small>
            </div>
            <div className={s.catalog}>
              {["#efcba9", "#c6dfda", "#dfd0f0"].map((c, i) => (
                <div key={c}>
                  <div style={{ background: c }}>
                    <span
                      className={`${s.bottle} ${i === 1 ? s.bottleWide : ""}`}
                    />
                  </div>
                  <span>Produto {String(i + 1).padStart(2, "0")}</span>
                  <small>Seu catálogo</small>
                </div>
              ))}
            </div>
            <div className={s.catalogBottom}>
              <ShoppingBag size={14} />
              <span>Pedidos em um só lugar</span>
              <ArrowUpRight size={14} />
            </div>
          </>
        )}
      </div>
      <span className={s.mockLabel}>PRÉVIA CONCEITUAL</span>
    </div>
  );
}
export function ProjectVisual({ type }: { type: string }) {
  return (
    <div
      className={`${s.projectVisual} ${s[type]}`}
      role="img"
      aria-label="Representação ilustrativa do projeto; imagem real ainda não disponibilizada"
    >
      <div className={s.projectBrowser}>
        <div className={s.projectBrowserBar}>
          <i />
          <i />
          <i />
          <span>PRÉVIA DO PROJETO</span>
        </div>
        <div className={s.projectScene}>
          <div className={s.projectSceneNav}>
            <span>
              {type === "leisure"
                ? "ESPAÇO & LAZER"
                : type === "auto"
                  ? "AUTOMOTIVO"
                  : "CATÁLOGO DIGITAL"}
            </span>
            <span>☰</span>
          </div>
          <strong>
            {type === "leisure" ? (
              <>
                Bons momentos
                <br />
                começam aqui.
              </>
            ) : type === "auto" ? (
              <>
                Cuidado em
                <br />
                cada detalhe.
              </>
            ) : (
              <>
                Seu próximo pedido,
                <br />
                mais simples.
              </>
            )}
          </strong>
          <span className={s.fakeCta}>
            {type === "leisure"
              ? "Conheça o espaço"
              : type === "auto"
                ? "Nossos serviços"
                : "Explore o catálogo"}{" "}
            <ArrowUpRight size={10} />
          </span>
          <div className={s.sceneArt}>
            {type === "leisure" ? (
              <>
                <div className={s.sun} />
                <div className={s.pool} />
              </>
            ) : type === "auto" ? (
              <svg viewBox="0 0 280 110">
                <path
                  d="M20 78 L37 46 L80 39 L111 14 L199 14 L231 43 L258 50 L266 78Z"
                  fill="#34475e"
                />
                <path d="M94 39L119 20H192L213 39Z" fill="#7cb5ce" />
                <circle cx="70" cy="78" r="18" fill="#101a29" />
                <circle cx="70" cy="78" r="9" fill="#90a2b8" />
                <circle cx="219" cy="78" r="18" fill="#101a29" />
                <circle cx="219" cy="78" r="9" fill="#90a2b8" />
              </svg>
            ) : (
              <div className={s.sceneBottles}>
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        </div>
      </div>
      <span className={s.projectPlaceholder}>VISUAL ILUSTRATIVO</span>
    </div>
  );
}
