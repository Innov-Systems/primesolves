import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  CircleCheck,
  CodeXml,
  Compass,
  HeartHandshake,
  Layers3,
  Lightbulb,
  MoveUpRight,
  Puzzle,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Brand } from "@/components/Brand";
import { Contact } from "@/components/Contact";
import { Enhancements } from "@/components/Enhancements";
import {
  HeroVisual,
  ProductVisual,
  ProjectVisual,
} from "@/components/Illustrations";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { projects, validProjectUrl } from "@/data/projects";
import { faqs } from "@/data/faq";
import { site } from "@/config/site";
import s from "@/components/Site.module.css";
const differences = [
  {
    icon: Puzzle,
    title: "Soluções personalizadas",
    text: "O ponto de partida é o seu negócio. Construímos a solução em torno do que você precisa.",
  },
  {
    icon: Compass,
    title: "A tecnologia certa",
    text: "Escolhemos ferramentas e abordagens adequadas ao contexto e aos objetivos de cada projeto.",
  },
  {
    icon: HeartHandshake,
    title: "Experiência em primeiro lugar",
    text: "Interfaces claras e funcionais para facilitar a vida de quem usa a sua solução.",
  },
  {
    icon: Sparkles,
    title: "Evolução contínua",
    text: "Pensamos no próximo passo, com espaço para melhorias e novas necessidades.",
  },
];
const steps = [
  ["Descoberta", "Entendemos os desafios e objetivos."],
  ["Planejamento", "Definimos requisitos, escopo e abordagem."],
  ["Desenvolvimento", "Construímos a solução com atenção a cada detalhe."],
  ["Validação", "Testamos, ouvimos e refinamos o produto."],
  [
    "Entrega e evolução",
    "Disponibilizamos a solução e planejamos melhorias quando contratadas.",
  ],
];
export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section className={s.hero} id="inicio">
          <div className={`${s.container} ${s.heroGrid}`}>
            <div className={s.heroCopy}>
              <span className={s.heroEyebrow}>
                <span /> SOFTWARE HOUSE & SOLUÇÕES DIGITAIS
              </span>
              <h1>
                Transformamos
                <br />
                ideias em
                <br />
                <span>soluções digitais.</span>
              </h1>
              <p>
                Desenvolvemos softwares sob medida e soluções digitais para
                empresas que querem simplificar processos, otimizar operações e
                crescer com tecnologia.
              </p>
              <div className={s.heroActions}>
                <a href="#contato" className={s.button}>
                  Solicitar orçamento <ArrowUpRight size={18} />
                </a>
                <a href="#solucoes" className={s.heroSecondary}>
                  Conhecer soluções <ArrowRight size={17} />
                </a>
              </div>
              <div className={s.heroNote}>
                <CheckCheck size={17} />
                <span>
                  Tecnologia com propósito. Soluções com a sua essência.
                </span>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className={`${s.container} ${s.heroFoot}`}>
            <span>DO PRIMEIRO INSIGHT AO PRÓXIMO PASSO.</span>
            <a href="#solucoes" aria-label="Explorar nossas soluções">
              <ArrowDown size={17} />
            </a>
            <span>SOFTWARE FEITO PARA EVOLUIR.</span>
          </div>
        </section>
        <section className={`${s.section} ${s.services}`} id="solucoes">
          <div className={s.container}>
            <div className={s.splitHeading} data-reveal>
              <div>
                <span className={s.eyebrow}>NOSSAS SOLUÇÕES</span>
                <h2>
                  Tecnologia para
                  <br />
                  transformar o seu negócio<span className={s.blue}>.</span>
                </h2>
              </div>
              <p>
                Criamos soluções digitais personalizadas para ajudar empresas a
                organizar processos, melhorar experiências e desenvolver novas
                oportunidades.
              </p>
            </div>
            <div className={s.servicesGrid}>
              {services.map((service, i) => (
                <article
                  className={s.serviceCard}
                  key={service.title}
                  data-reveal
                >
                  <div className={s.serviceTop}>
                    <span className={s.iconBox}>
                      <service.icon size={24} strokeWidth={1.6} />
                    </span>
                    <span className={s.cardNumber}>0{i + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className={s.serviceBottom}>
                    <span>{service.tag}</span>
                    <ArrowUpRight size={17} />
                  </div>
                </article>
              ))}
            </div>
            <div className={s.servicesNote}>
              <span>Seu desafio não cabe em uma caixinha?</span>
              <a href="#contato">
                Vamos pensar juntos <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className={`${s.section} ${s.products}`} id="produtos">
          <div className={s.container}>
            <div className={s.centerHeading} data-reveal>
              <span className={s.eyebrow}>NOSSOS PRODUTOS</span>
              <h2>
                Soluções próprias pensadas
                <br />
                para o seu dia a dia<span className={s.blue}>.</span>
              </h2>
              <p>
                Estamos construindo novas formas de simplificar a rotina de
                negócios.
              </p>
            </div>
            <div className={s.productsGrid}>
              {products.map((p) => (
                <article className={s.productCard} key={p.id} data-reveal>
                  <ProductVisual type={p.id} />
                  <div className={s.productCopy}>
                    <span className={s.status}>
                      <span /> Em desenvolvimento
                    </span>
                    <h3>
                      {p.name}
                      <small>Nome provisório</small>
                    </h3>
                    <p>{p.detail}</p>
                    <ul>
                      {p.features.map((f) => (
                        <li key={f}>
                          <Check size={15} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      className={s.productLink}
                      href={`#contato?interesse=${p.id}`}
                    >
                      Tenho interesse <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className={s.productDisclaimer}>
              Produtos em desenvolvimento. Funcionalidades planejadas, ainda não
              disponíveis para contratação.
            </p>
          </div>
        </section>
        <section className={`${s.section} ${s.differences}`}>
          <div className={`${s.container} ${s.differenceGrid}`}>
            <div className={s.differenceIntro} data-reveal>
              <span className={s.eyebrow}>O NOSSO JEITO DE FAZER</span>
              <h2>
                Mais do que desenvolver software, buscamos{" "}
                <span>resolver problemas.</span>
              </h2>
              <p>
                O código é parte do caminho. Entender o que importa para o seu
                negócio é o que dá direção a tudo.
              </p>
              <a href="#sobre" className={s.lightLink}>
                Conheça a Prime Solves <ArrowUpRight size={17} />
              </a>
              <div className={s.connectedArt} aria-hidden="true">
                <div>
                  <Lightbulb size={26} />
                </div>
                <span />
                <div>
                  <CodeXml size={26} />
                </div>
                <span />
                <div>
                  <Zap size={26} />
                </div>
              </div>
            </div>
            <div className={s.differenceCards}>
              {differences.map((d) => (
                <article key={d.title} data-reveal>
                  <d.icon size={25} strokeWidth={1.5} />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className={`${s.section} ${s.process}`}>
          <div className={s.container}>
            <div className={s.splitHeading} data-reveal>
              <div>
                <span className={s.eyebrow}>COMO TRABALHAMOS</span>
                <h2>
                  Da ideia à solução<span className={s.blue}>.</span>
                </h2>
              </div>
              <p>
                Um processo claro, com diálogo em cada etapa.
                <br />
                Você acompanha o caminho. A gente constrói junto.
              </p>
            </div>
            <ol className={s.timeline}>
              {steps.map(([title, text], i) => (
                <li key={title} data-reveal>
                  <div className={s.stepNumber}>
                    0{i + 1}
                    <span />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className={`${s.section} ${s.portfolio}`} id="portfolio">
          <div className={s.container}>
            <div className={s.splitHeading} data-reveal>
              <div>
                <span className={s.eyebrow}>DO PLANEJAMENTO À PRÁTICA</span>
                <h2>
                  Projetos que transformam
                  <br />
                  ideias em realidade<span className={s.blue}>.</span>
                </h2>
              </div>
              <p>
                Diferentes desafios. Soluções pensadas para cada contexto.
                Conheça alguns projetos desenvolvidos.
              </p>
            </div>
            <div className={s.projectsGrid}>
              {projects.map((p) => (
                <article className={s.projectCard} key={p.title} data-reveal>
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`Projeto ${p.title}`}
                      width={640}
                      height={420}
                    />
                  ) : (
                    <ProjectVisual type={p.visual} />
                  )}
                  <div className={s.projectCopy}>
                    <span>{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    {validProjectUrl(p.url) && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.productLink}
                      >
                        Ver projeto <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <p className={s.portfolioNote}>
              Representações ilustrativas. As imagens reais dos projetos serão
              adicionadas em breve.
            </p>
          </div>
        </section>
        <section className={`${s.section} ${s.about}`} id="sobre">
          <div className={`${s.container} ${s.aboutGrid}`}>
            <div className={s.aboutArt} data-reveal aria-hidden="true">
              <span className={s.artLabel}>IDEIAS QUE GANHAM FORMA</span>
              <div className={s.artOrbit} />
              <div className={s.artOrbitTwo} />
              <div className={s.artCore}>
                <Layers3 size={69} strokeWidth={1} />
              </div>
              <div className={s.artChip}>
                <Target size={18} /> Propósito
              </div>
              <div className={s.artChipTwo}>
                <CodeXml size={18} /> Tecnologia
              </div>
              <div className={s.artChipThree}>
                <MoveUpRight size={18} /> Evolução
              </div>
              <span className={s.artFooter}>
                PRIME SOLVES · CONSTRUIR. CONECTAR. EVOLUIR.
              </span>
            </div>
            <div data-reveal>
              <span className={s.eyebrow}>TECNOLOGIA COM PROPÓSITO</span>
              <h2>
                Conheça a Prime Solves<span className={s.blue}>.</span>
              </h2>
              <p>
                A Prime Solves nasce com o propósito de transformar desafios em
                soluções digitais práticas e eficientes.
              </p>
              <p>
                Atuamos no desenvolvimento de software sob medida e na criação
                de produtos próprios, combinando tecnologia, usabilidade e
                atenção às necessidades de cada negócio.
              </p>
              <p>
                Acreditamos que boas soluções começam com a compreensão do
                problema e evoluem por meio de uma parceria próxima com nossos
                clientes.
              </p>
              <div className={s.values}>
                {["Qualidade", "Transparência", "Inovação", "Compromisso"].map(
                  (v) => (
                    <span key={v}>
                      <CircleCheck size={16} />
                      {v}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={s.technologies}>
          <div className={s.container}>
            <div className={s.techHeading}>
              <CodeXml size={22} />
              <h2>Tecnologias para construir soluções modernas.</h2>
              <span>NOSSAS COMPETÊNCIAS</span>
            </div>
            <ul className={s.techList}>
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Golang",
                "Firebase",
                "PostgreSQL",
                "MySQL",
                "Docker",
              ].map((t, i) => (
                <li key={t}>
                  <span>{["N", "⚛", "TS", "Go", "F", "P", "M", "D"][i]}</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={`${s.section} ${s.faq}`} id="faq">
          <div className={`${s.container} ${s.faqGrid}`}>
            <div data-reveal>
              <span className={s.eyebrow}>PERGUNTAS FREQUENTES</span>
              <h2>
                Vamos esclarecer
                <br />
                suas dúvidas<span className={s.blue}>.</span>
              </h2>
              <p>
                Cada projeto tem suas particularidades.
                <br />
                Aqui estão algumas respostas para começar.
              </p>
              <a className={s.productLink} href="#contato">
                Vamos conversar <ArrowUpRight size={17} />
              </a>
            </div>
            <div className={s.accordion}>
              {faqs.map(([q, a]) => (
                <details key={q} name="faq">
                  <summary>
                    {q}
                    <span aria-hidden="true" />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className={s.finalCta}>
          <div className={`${s.container} ${s.ctaInner}`} data-reveal>
            <div>
              <span className={s.heroEyebrow}>
                SEU PRÓXIMO PASSO COMEÇA AQUI
              </span>
              <h2>
                Vamos transformar sua
                <br />
                ideia em realidade?
              </h2>
              <p>
                Conte o que sua empresa precisa e descubra como podemos ajudar
                com tecnologia.
              </p>
            </div>
            <a className={s.button} href="#contato">
              Solicitar orçamento <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.footerGrid}>
            <div>
              <Brand />
              <p>
                Transformamos desafios em soluções digitais.
                <br />
                Tecnologia com propósito para o seu negócio.
              </p>
              <span className={s.footerTag}>
                <span /> CONSTRUIR. CONECTAR. EVOLUIR.
              </span>
            </div>
            <div>
              <h3>Explore</h3>
              {navigation
                .filter((n) => n.href !== "#inicio")
                .map((n) => (
                  <a key={n.href} href={n.href}>
                    {n.label}
                  </a>
                ))}
            </div>
            <div>
              <h3>Soluções</h3>
              {services.slice(0, 4).map((service) => (
                <a key={service.title} href="#solucoes">
                  {service.title}
                </a>
              ))}
            </div>
            <div>
              <h3>Nossos produtos</h3>
              {products.map((p) => (
                <a href="#produtos" key={p.id}>
                  {p.name}
                  <span className={s.footerProduct}>Em desenvolvimento</span>
                </a>
              ))}
              {site.social
                .filter((n) => validProjectUrl(n.url))
                .map((n) => (
                  <a
                    key={n.url}
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {n.label}
                  </a>
                ))}
            </div>
          </div>
          <div className={s.footerBottom}>
            <span>
              © {new Date().getFullYear()} Prime Solves. Todos os direitos
              reservados.
            </span>
            <a href="#inicio">
              Voltar ao topo <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </footer>
      <Enhancements />
    </>
  );
}
