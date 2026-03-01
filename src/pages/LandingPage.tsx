import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight, Shield, TrendingUp, Brain, Scale, BarChart3,
  Users, Target, Layers, Zap, Globe, Lock, ChevronDown, ExternalLink
} from 'lucide-react'

// ── Logos SVG inline ─────────────────────────────────────────────────────────
function LogoMM() {
  return (
    <svg viewBox="0 0 120 40" className="h-9 w-auto" fill="none">
      <rect width="32" height="32" rx="4" x="0" y="4" fill="none" stroke="#DEC078" strokeWidth="1.5"/>
      <text x="16" y="23" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="18" fontWeight="700" fill="#DEC078">M</text>
      <line x1="38" y1="8" x2="38" y2="36" stroke="#DEC078" strokeWidth="1" opacity="0.5"/>
      <text x="80" y="20" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="13" fontWeight="700" fill="#fff" letterSpacing="1">MAURO MONÇÃO</text>
      <text x="80" y="32" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="7" fill="#DEC078" letterSpacing="2.5">ADVOGADOS ASSOCIADOS</text>
    </svg>
  )
}

function LogoBen() {
  return (
    <svg viewBox="0 0 140 40" className="h-9 w-auto" fill="none">
      <circle cx="20" cy="20" r="16" fill="none" stroke="#DEC078" strokeWidth="1.5"/>
      <path d="M14 14 L20 26 L26 14" stroke="#DEC078" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="20" cy="20" r="3" fill="#DEC078"/>
      <text x="75" y="18" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="16" fontWeight="700" fill="#fff" letterSpacing="2">BEN</text>
      <text x="75" y="31" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="6.5" fill="#DEC078" letterSpacing="2.5">STRATEGIC INTELLIGENCE HUB</text>
    </svg>
  )
}

// ── hook de intersecção para animações ───────────────────────────────────────
function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

// ── componente principal ─────────────────────────────────────────────────────
export default function LandingPage() {
  const navigate = useNavigate()
  const hero = useVisible(0.1)
  const about = useVisible(0.15)
  const pillars = useVisible(0.1)
  const diff = useVisible(0.1)
  const footer = useVisible(0.1)

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0f2340' }}>

      {/* ══ NAVBAR ══════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: 'rgba(15,35,64,0.92)', borderBottom: '1px solid rgba(222,192,120,0.15)', backdropFilter: 'blur(12px)' }}>
        <LogoMM />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
          <a href="#sobre" className="hover:text-gold transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>Sobre o Hub</a>
          <a href="#modulos" className="hover:text-gold transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>Módulos</a>
          <a href="#diferencial" className="hover:text-gold transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>Diferenciais</a>
          <button onClick={() => navigate('/login')} className="btn-outline text-xs px-5 py-2.5">
            <Lock size={13} /> Área Restrita
          </button>
        </div>
        <button onClick={() => navigate('/login')} className="md:hidden btn-outline text-xs px-4 py-2">
          <Lock size={13} />
        </button>
      </nav>

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #C8960E 0%, #DEC078 35%, #F0C040 55%, #DEC078 75%, #B8860B 100%)' }}>
        {/* bg decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(15,35,64,0.35), transparent)' }} />
          {/* grade de pontos navy */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#0f2340"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>

        <div ref={hero.ref}
          className={`relative max-w-4xl transition-all duration-1000 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium font-sans"
            style={{ background: 'rgba(15,35,64,0.12)', border: '1px solid rgba(15,35,64,0.25)', color: '#19385C' }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: '#19385C' }} />
            Mauro Monção Advogados Associados · Ecossistema Estratégico
          </div>

          {/* título */}
          <h1 className="font-serif font-bold leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#0f2340', letterSpacing: '-0.02em' }}>
            BEN Strategic
            <span className="block" style={{ color: '#19385C' }}>Intelligence Hub</span>
          </h1>

          {/* subtítulo */}
          <p className="text-lg md:text-xl font-serif italic mb-6" style={{ color: 'rgba(15,35,64,0.75)' }}>
            Núcleo estratégico do ecossistema institucional
          </p>

          {/* texto de apoio */}
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10 font-sans"
            style={{ color: 'rgba(15,35,64,0.80)' }}>
            O Ben Strategic Intelligence Hub integra inteligência comercial, gestão jurídica,
            governança e performance em uma estrutura estratégica unificada, concebida para
            fortalecer a advocacia contemporânea com organização, eficiência e visão de futuro.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm font-sans transition-all duration-200 hover:scale-105"
              style={{ background: '#0f2340', color: '#DEC078', border: '1px solid #0f2340' }}>
              <TrendingUp size={16} />Ben Growth Center
              <ExternalLink size={13} className="opacity-70" />
            </a>
            <button onClick={() => navigate('/login')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm font-sans transition-all duration-200 hover:scale-105"
              style={{ background: 'rgba(15,35,64,0.15)', color: '#0f2340', border: '1px solid rgba(15,35,64,0.40)' }}>
              <Scale size={16} />Ben Juris Center
              <Lock size={13} className="opacity-70" />
            </button>
            <a href="#sobre"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm font-sans transition-all duration-200 hover:scale-105"
              style={{ background: 'rgba(15,35,64,0.08)', color: 'rgba(15,35,64,0.70)', border: '1px solid rgba(15,35,64,0.20)' }}>
              Conhecer o Ecossistema
              <ChevronDown size={14} />
            </a>
          </div>

          {/* logos dos módulos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="px-6 py-3 flex items-center gap-3 transition-all rounded-xl"
              style={{ background: 'rgba(15,35,64,0.10)', border: '1px solid rgba(15,35,64,0.20)' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(15,35,64,0.15)' }}>
                <TrendingUp size={18} style={{ color: '#0f2340' }} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold font-sans" style={{ color: '#0f2340' }}>Ben Growth Center</div>
                <div className="text-xs font-sans" style={{ color: 'rgba(15,35,64,0.65)' }}>Inteligência Comercial</div>
              </div>
            </div>
            <div className="w-px h-8 hidden sm:block" style={{ background: 'rgba(15,35,64,0.25)' }} />
            <div className="px-6 py-3 flex items-center gap-3 transition-all rounded-xl"
              style={{ background: 'rgba(15,35,64,0.10)', border: '1px solid rgba(15,35,64,0.20)' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(15,35,64,0.15)' }}>
                <Scale size={18} style={{ color: '#0f2340' }} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold font-sans" style={{ color: '#0f2340' }}>Ben Juris Center</div>
                <div className="text-xs font-sans" style={{ color: 'rgba(15,35,64,0.65)' }}>Gestão Jurídica</div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="text-xs font-sans" style={{ color: '#0f2340' }}>scroll</span>
          <ChevronDown size={14} style={{ color: '#0f2340' }} className="animate-bounce" />
        </div>
      </section>

      {/* ══ SOBRE O HUB ═════════════════════════════════════════════════════ */}
      <section id="sobre" className="py-24 px-6 md:px-12"
        style={{ background: 'linear-gradient(180deg, #0f2340 0%, #19385C 100%)' }}>
        <div ref={about.ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-100 ${about.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* left */}
            <div className="md:w-2/5">
              <div className="section-divider mb-5" />
              <h2 className="font-serif font-bold text-4xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                O Núcleo <span style={{ color: '#DEC078' }}>Estratégico</span>
              </h2>
              <p className="font-serif italic text-lg mb-6" style={{ color: 'rgba(222,192,120,0.80)' }}>
                Advocacia contemporânea com estrutura, inteligência e governança.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(222,192,120,0.15)', border: '1px solid rgba(222,192,120,0.30)' }}>
                  <Brain size={18} style={{ color: '#DEC078' }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-sans">Inteligência Aplicada</div>
                  <div className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.55)' }}>Decisões orientadas por dados e processos</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(222,192,120,0.15)', border: '1px solid rgba(222,192,120,0.30)' }}>
                  <Layers size={18} style={{ color: '#DEC078' }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-sans">Ecossistema Integrado</div>
                  <div className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.55)' }}>Módulos conectados, visão unificada</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(222,192,120,0.15)', border: '1px solid rgba(222,192,120,0.30)' }}>
                  <Shield size={18} style={{ color: '#DEC078' }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-sans">Governança Institucional</div>
                  <div className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.55)' }}>Controle, conformidade e segurança</div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="md:w-3/5">
              <p className="text-base md:text-lg leading-8 font-sans mb-6" style={{ color: 'rgba(255,255,255,0.80)' }}>
                O <strong style={{ color: '#DEC078' }}>Ben Strategic Intelligence Hub</strong> é o núcleo estratégico
                que integra inteligência comercial, gestão jurídica, governança e performance em um único
                ecossistema estruturado.
              </p>
              <p className="text-base leading-8 font-sans mb-6" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Desenvolvido como extensão institucional de <strong style={{ color: '#DEC078' }}>Mauro Monção Advogados Associados</strong>,
                o Hub foi concebido para organizar, conectar e potencializar as frentes centrais da advocacia
                contemporânea, unindo visão estratégica, eficiência operacional e inteligência aplicada
                à tomada de decisão.
              </p>
              <p className="text-base leading-8 font-sans" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Cada módulo foi projetado para operar de forma autônoma e, ao mesmo tempo, integrada —
                garantindo que dados, processos e estratégias estejam sempre alinhados ao propósito
                institucional do escritório.
              </p>

              {/* métricas */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { n: '2', label: 'Módulos Centrais' },
                  { n: '360°', label: 'Visão Estratégica' },
                  { n: '1', label: 'Ecossistema Unificado' },
                ].map(m => (
                  <div key={m.label} className="text-center glass-card py-4 px-2 transition-all">
                    <div className="font-serif font-bold text-3xl" style={{ color: '#DEC078' }}>{m.n}</div>
                    <div className="text-xs font-sans mt-1" style={{ color: 'rgba(255,255,255,0.60)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OS DOIS PILARES ══════════════════════════════════════════════════ */}
      <section id="modulos" className="py-24 px-6 md:px-12" style={{ background: '#19385C' }}>
        <div ref={pillars.ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 ${pillars.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-5" style={{ width: '60px', background: 'linear-gradient(90deg, transparent, #DEC078, transparent)' }} />
            <h2 className="font-serif font-bold text-4xl text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
              Os Dois <span style={{ color: '#DEC078' }}>Pilares</span> do Ecossistema
            </h2>
            <p className="text-base font-sans max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Módulos premium interligados, cada um especializado em sua frente estratégica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Growth Center */}
            <div className="glass-card p-8 flex flex-col transition-all duration-300 group"
              style={{ borderColor: 'rgba(222,192,120,0.25)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(222,192,120,0.25), rgba(222,192,120,0.10))', border: '1px solid rgba(222,192,120,0.35)' }}>
                  <TrendingUp size={26} style={{ color: '#DEC078' }} />
                </div>
                <div>
                  <div className="text-xs font-semibold font-sans uppercase tracking-widest mb-1" style={{ color: 'rgba(222,192,120,0.70)' }}>Módulo 01</div>
                  <h3 className="font-serif font-bold text-2xl text-white">Ben Growth Center</h3>
                </div>
              </div>

              <p className="text-sm leading-7 font-sans mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Centro de inteligência comercial, tráfego, CRM e performance, voltado à organização
                do crescimento, da comunicação estratégica e da gestão de oportunidades.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: BarChart3, text: 'Inteligência comercial' },
                  { icon: Globe, text: 'Tráfego estratégico' },
                  { icon: Users, text: 'CRM e conversão' },
                  { icon: Target, text: 'Performance e dados' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-2">
                    <item.icon size={13} style={{ color: '#DEC078', flexShrink: 0 }} />
                    <span className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.70)' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="w-full h-px mb-6" style={{ background: 'rgba(222,192,120,0.15)' }} />
                <a href="https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold w-full justify-center">
                  Entrar no Ben Growth Center <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Juris Center */}
            <div className="glass-card p-8 flex flex-col transition-all duration-300 group"
              style={{ borderColor: 'rgba(222,192,120,0.25)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(222,192,120,0.25), rgba(222,192,120,0.10))', border: '1px solid rgba(222,192,120,0.35)' }}>
                  <Scale size={26} style={{ color: '#DEC078' }} />
                </div>
                <div>
                  <div className="text-xs font-semibold font-sans uppercase tracking-widest mb-1" style={{ color: 'rgba(222,192,120,0.70)' }}>Módulo 02</div>
                  <h3 className="font-serif font-bold text-2xl text-white">Ben Juris Center</h3>
                </div>
              </div>

              <p className="text-sm leading-7 font-sans mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Centro de gestão jurídica corporativa e pública, voltado ao controle operacional,
                gestão de processos, prazos, documentos, contratos, fluxos internos e governança institucional.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Scale, text: 'Gestão jurídica' },
                  { icon: Shield, text: 'Processos e prazos' },
                  { icon: Layers, text: 'Governança e controle' },
                  { icon: Brain, text: 'Operação pública' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-2">
                    <item.icon size={13} style={{ color: '#DEC078', flexShrink: 0 }} />
                    <span className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.70)' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* badge acesso restrito */}
              <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-xl text-xs font-sans"
                style={{ background: 'rgba(222,192,120,0.10)', border: '1px solid rgba(222,192,120,0.25)', color: 'rgba(222,192,120,0.85)' }}>
                <Lock size={12} />
                Acesso restrito — credenciais fornecidas pelo administrador
              </div>

              <div className="mt-auto">
                <div className="w-full h-px mb-6" style={{ background: 'rgba(222,192,120,0.15)' }} />
                <button onClick={() => window.location.href = '/login'}
                  className="btn-outline w-full justify-center">
                  <Lock size={14} />Entrar no Ben Juris Center
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ DIFERENCIAL ═════════════════════════════════════════════════════ */}
      <section id="diferencial" className="py-24 px-6 md:px-12"
        style={{ background: 'linear-gradient(180deg, #19385C 0%, #0f2340 100%)' }}>
        <div ref={diff.ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 ${diff.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-5" style={{ width: '60px', background: 'linear-gradient(90deg, transparent, #DEC078, transparent)' }} />
            <h2 className="font-serif font-bold text-4xl text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
              Diferencial <span style={{ color: '#DEC078' }}>Estratégico</span>
            </h2>
            <p className="text-base font-sans max-w-2xl mx-auto leading-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Mais do que uma plataforma, o Ben Strategic Intelligence Hub representa uma arquitetura
              de trabalho pensada para uma advocacia de alta performance: integrada, organizada,
              inteligente e orientada por dados, processos e estratégia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: Target,   word: 'Estratégia',    desc: 'Visão de longo prazo integrada à operação diária' },
              { icon: Brain,    word: 'Inteligência',  desc: 'Dados e IA aplicados à tomada de decisão jurídica' },
              { icon: Layers,   word: 'Integração',    desc: 'Módulos conectados em um único ecossistema' },
              { icon: Shield,   word: 'Governança',    desc: 'Controle institucional com conformidade e segurança' },
              { icon: Zap,      word: 'Performance',   desc: 'Eficiência operacional com indicadores em tempo real' },
              { icon: TrendingUp, word: 'Escalabilidade', desc: 'Estrutura preparada para crescer com o escritório' },
            ].map((item, i) => (
              <div key={item.word}
                className="glass-card p-6 flex flex-col gap-3 transition-all duration-300 cursor-default group"
                style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(222,192,120,0.12)', border: '1px solid rgba(222,192,120,0.25)' }}>
                  <item.icon size={18} style={{ color: '#DEC078' }} />
                </div>
                <div className="font-serif font-bold text-xl text-white">{item.word}</div>
                <div className="text-xs font-sans leading-5" style={{ color: 'rgba(255,255,255,0.60)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER / ASSINATURA ═════════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 text-center relative overflow-hidden" style={{ background: '#0f2340' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(222,192,120,0.35), transparent)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-5"
            style={{ background: 'radial-gradient(circle, #DEC078 0%, transparent 70%)' }} />
        </div>
        <div ref={footer.ref}
          className={`relative max-w-3xl mx-auto transition-all duration-1000 ${footer.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <LogoMM />
            <div className="hidden sm:block w-px h-10" style={{ background: 'rgba(222,192,120,0.35)' }} />
            <LogoBen />
          </div>

          <h3 className="font-serif font-bold text-3xl text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            Estratégia, inteligência e governança
          </h3>
          <p className="font-serif italic text-lg mb-10" style={{ color: 'rgba(222,192,120,0.80)' }}>
            aplicadas à advocacia contemporânea.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/"
              target="_blank" rel="noopener noreferrer" className="btn-gold">
              <TrendingUp size={15} />Ben Growth Center
            </a>
            <button onClick={() => window.location.href = '/login'} className="btn-outline">
              <Scale size={15} />Ben Juris Center
            </button>
          </div>

          <div className="w-full h-px mb-8" style={{ background: 'rgba(222,192,120,0.12)' }} />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans"
            style={{ color: 'rgba(255,255,255,0.40)' }}>
            <span>© 2026 Mauro Monção Advogados Associados. Todos os direitos reservados.</span>
            <a href="https://www.mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gold transition-colors"
              style={{ color: 'rgba(255,255,255,0.40)' }}>
              www.mauromoncao.adv.br <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
