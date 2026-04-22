import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import antes1 from "@/assets/antes-1.png";
import depois1 from "@/assets/depois-1.png";
import antes2 from "@/assets/antes-2.png";
import depois2 from "@/assets/depois-2.png";
import av1 from "@/assets/avaliacao-1.png";
import av2 from "@/assets/avaliacao-2.png";
import av3 from "@/assets/avaliacao-3.png";
import av4 from "@/assets/avaliacao-4.png";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, ShieldCheck, Wrench, Flame, Sparkles, Settings, CheckCircle2, Home, Utensils, Factory, Microwave, Square, Soup, Droplets } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Oliveira Fogões e Fornos — Conserto de Fogões, Cooktops e Fornos em Goiânia" },
      {
        name: "description",
        content:
          "Especialista em conserto e manutenção de fogões, cooktops e fornos em Goiânia, Aparecida e região. Peças originais, garantia e atendimento rápido via WhatsApp.",
      },
      { property: "og:title", content: "Oliveira Fogões e Fornos" },
      {
        property: "og:description",
        content: "Conserto de fogões, cooktops e fornos em Goiânia, Aparecida e região. Atendimento rápido via WhatsApp.",
      },
      { property: "og:image", content: logo },
    ],
  }),
});

const WHATS = "https://wa.me/5562983136817";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.76.46 3.48 1.34 5L2 22l5.18-1.36a9.95 9.95 0 0 0 4.85 1.24h.01c5.49 0 9.96-4.47 9.96-9.96 0-2.66-1.04-5.16-2.89-7.01ZM12.04 20.2h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.07.81.82-3-.2-.31a8.24 8.24 0 0 1-1.27-4.4c0-4.56 3.71-8.27 8.27-8.27 2.21 0 4.29.86 5.85 2.42a8.21 8.21 0 0 1 2.42 5.86c0 4.56-3.71 8.27-8.3 8.27Zm4.54-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-dark)" }}
        />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full -z-10 opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--brand-blue) 0%, transparent 60%)" }}
        />
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-32 text-center">
          <img
            src={logo}
            alt="Oliveira Fogões e Fornos - logo"
            className="mx-auto w-full max-w-md md:max-w-xl mb-8"
          />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            Especialista em conserto de{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-flame)" }}>
              fogões, cooktops e fornos
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendimento rápido em Goiânia, Aparecida e região
          </p>
          <div className="mt-10">
            <a href={WHATS} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-base md:text-lg h-14 px-8 rounded-full font-semibold bg-[oklch(0.65_0.18_150)] hover:bg-[oklch(0.7_0.18_150)] text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="h-6 w-6 mr-2" />
                Faça um orçamento no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* SOBRE */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Flame className="h-4 w-4" /> Sobre nós
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Profissionais que você pode confiar</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Atendimento profissional, rápido e com diagnóstico preciso. Trabalhamos com peças originais
            e garantia em todos os serviços.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Trabalhamos também com <span className="text-foreground font-medium">serviços a domicílio</span> em
            fogões, cooktops, fogões industriais, fornos a gás e elétrico, chapas a gás e elétrico,
            fritadeiras a água e a óleo, cubas e banho-maria.
          </p>
        </div>
      </Section>

      {/* ANTES E DEPOIS */}
      <Section className="bg-card/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Antes e Depois</h2>
          <p className="mt-3 text-muted-foreground">Veja a transformação dos nossos serviços</p>
        </div>

        <div className="space-y-12">
          {[
            { antes: antes1, depois: depois1 },
            { antes: antes2, depois: depois2 },
          ].map((pair, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
                <img src={pair.antes} alt={`Antes do conserto ${i + 1}`} className="w-full h-64 md:h-80 object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-destructive/90 text-destructive-foreground text-xs font-bold uppercase tracking-wide">
                  Antes
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-primary/40 shadow-[var(--shadow-glow)]">
                <img src={pair.depois} alt={`Depois do conserto ${i + 1}`} className="w-full h-64 md:h-80 object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                  Depois
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVIÇOS */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nossos Serviços</h2>
          <p className="mt-3 text-muted-foreground">
            Atendimento a domicílio com soluções completas para sua cozinha residencial e industrial
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Home, title: "Serviços a domicílio" },
            { icon: Wrench, title: "Conserto de fogões" },
            { icon: Flame, title: "Manutenção de cooktops" },
            { icon: Factory, title: "Fogões industriais" },
            { icon: Microwave, title: "Fornos a gás e elétrico" },
            { icon: Square, title: "Chapas a gás e elétrico" },
            { icon: Droplets, title: "Fritadeiras a água e a óleo" },
            { icon: Soup, title: "Cubas e banho-maria" },
            { icon: Flame, title: "Manutenção de fornos" },
            { icon: Settings, title: "Troca de peças" },
            { icon: Sparkles, title: "Limpeza técnica" },
            { icon: Flame, title: "Ajuste de chama" },
            { icon: ShieldCheck, title: "Diagnóstico preciso" },
          ].map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-flame)" }}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* AVALIAÇÕES */}
      <Section className="bg-card/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">O que nossos clientes dizem</h2>
          <p className="mt-3 text-muted-foreground">Avaliações reais de quem já foi atendido</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[av1, av2, av3, av4].map((src, i) => (
            <div key={i} className="rounded-2xl bg-white p-3 shadow-[var(--shadow-card)] border border-border">
              <img src={src} alt={`Avaliação de cliente ${i + 1}`} className="w-full rounded-xl" />
            </div>
          ))}
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Por que escolher a Oliveira?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: MapPin, title: "Atendimento em Goiânia, Aparecida e região" },
            { icon: ShieldCheck, title: "Peças originais" },
            { icon: CheckCircle2, title: "Garantia em todos os serviços" },
            { icon: Flame, title: "Especialista em fogões, cooktops e fornos" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: "var(--gradient-flame)" }}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <p className="font-medium">{title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle at 50% 50%, var(--brand-blue) 0%, transparent 60%)" }}
        />
        <div className="text-center max-w-2xl mx-auto p-8 md:p-12 rounded-3xl border border-primary/30 bg-card/60 backdrop-blur shadow-[var(--shadow-glow)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de conserto no seu fogão?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Fale agora com a Oliveira Fogões e Fornos e receba seu orçamento.
          </p>
          <a href={WHATS} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="text-base md:text-lg h-14 px-8 rounded-full font-semibold bg-[oklch(0.65_0.18_150)] hover:bg-[oklch(0.7_0.18_150)] text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-6 w-6 mr-2" />
              Chamar no WhatsApp agora
            </Button>
          </a>
        </div>
      </Section>

      {/* RODAPÉ */}
      <footer className="border-t border-border py-10 px-4 bg-card/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <img src={logo} alt="Oliveira Fogões e Fornos" className="h-14 w-auto mx-auto md:mx-0 mb-3" />
            <p className="font-bold">Oliveira Fogões e Fornos</p>
            <p className="text-sm text-muted-foreground">Especialista em conserto e manutenção</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Atendimento</p>
            <p className="text-sm text-muted-foreground">Goiânia, Aparecida e região</p>
          </div>
          <div>
            <p className="font-semibold mb-1">WhatsApp</p>
            <a href={WHATS} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4" /> (62) 98313-6817
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} Oliveira Fogões e Fornos. Todos os direitos reservados.
        </p>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={WHATS}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center bg-[oklch(0.65_0.18_150)] hover:bg-[oklch(0.7_0.18_150)] text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-110 animate-pulse"
      >
        <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      </a>
    </div>
  );
}
