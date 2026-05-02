import { Terminal, Code2, Wrench, TrendingUp, DollarSign, BarChart3 } from "lucide-react";

const languages = [
  { name: "Python", desc: "A mais utilizada — automatização do trabalho." },
  { name: "JavaScript", desc: "Indispensável para a segurança de sites." },
  { name: "C / C++", desc: "Usada para exploração de vulnerabilidades." },
  { name: "SQL", desc: "Manipulação e proteção de bancos de dados." },
  { name: "Bash", desc: "Linguagem de terminal do Linux." },
];

const tools = [
  { name: "Wireshark", desc: "Análise do tráfego de rede." },
  { name: "Nmap", desc: "Varredura de portas e dispositivos." },
  { name: "Metasploit", desc: "Testes de invasão (pentest)." },
  { name: "Burp Suite", desc: "Segurança de aplicações web." },
  { name: "John the Ripper", desc: "Teste de força de senhas." },
];

const About = () => (
  <section id="profissao" className="border-t border-border/40 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          Sobre a Profissão
        </span>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          Tecnologias, linguagens e ferramentas
        </h2>
        <p className="text-muted-foreground">
          O analista deve dominar o sistema operacional onde a segurança é aplicada.
          O <strong className="text-foreground">Linux</strong> é o mais usado em servidores —
          principal SO de domínio do profissional — embora <strong className="text-foreground">Windows Server</strong> também
          seja amplamente adotado.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sistemas Operacionais */}
        <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Terminal className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mb-4 text-xl font-bold">Sistemas Operacionais</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <div>
                <strong className="text-foreground">Linux</strong>
                <p className="text-muted-foreground">Padrão em servidores e segurança.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <div>
                <strong className="text-foreground">Windows Server</strong>
                <p className="text-muted-foreground">Concorrente amplamente utilizado em ambientes corporativos.</p>
              </div>
            </li>
          </ul>
        </article>

        {/* Linguagens */}
        <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <Code2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mb-4 text-xl font-bold">Linguagens de Programação</h3>
          <ul className="space-y-3 text-sm">
            {languages.map((l) => (
              <li key={l.name} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong className="text-foreground">{l.name}</strong>
                  <p className="text-muted-foreground">{l.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* Ferramentas */}
        <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Wrench className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mb-4 text-xl font-bold">Ferramentas / Softwares</h3>
          <ul className="space-y-3 text-sm">
            {tools.map((t) => (
              <li key={t.name} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-foreground">{t.name}</strong>
                  <p className="text-muted-foreground">{t.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Média salarial e perspectivas */}
      <div className="mx-auto mt-20 max-w-5xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Mercado de Trabalho
          </span>
          <h3 className="mb-4 text-2xl font-bold md:text-4xl">
            Média salarial e perspectivas para os próximos anos
          </h3>
          <p className="text-muted-foreground">
            A área de segurança da informação está entre as mais bem pagas no mercado de TI,
            porém variando muito com a experiência do profissional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <DollarSign className="h-6 w-6" aria-hidden="true" />
            </div>
            <h4 className="mb-2 text-lg font-bold">CAGED (oficial)</h4>
            <p className="mb-3 text-3xl font-bold text-primary">R$ 8 mil</p>
            <p className="text-sm text-muted-foreground">
              Média mensal de um analista de segurança da informação, podendo chegar a
              aproximadamente <strong className="text-foreground">R$ 14 mil</strong>.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h4 className="mb-2 text-lg font-bold">Glassdoor</h4>
            <p className="mb-3 text-3xl font-bold text-accent">R$ 4 – 8 mil</p>
            <p className="text-sm text-muted-foreground">
              Faixa salarial inicial indicada por plataformas de mercado para profissionais
              em começo de carreira.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <TrendingUp className="h-6 w-6" aria-hidden="true" />
            </div>
            <h4 className="mb-2 text-lg font-bold">Perspectivas</h4>
            <p className="mb-3 text-3xl font-bold text-primary">Alta demanda</p>
            <p className="text-sm text-muted-foreground">
              Crescimento contínuo de contratações, com ainda
              <strong className="text-foreground"> poucos profissionais qualificados</strong> competindo no mercado.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default About;
