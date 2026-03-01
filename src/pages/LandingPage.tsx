import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TrendingUp, Scale, Shield, Brain, Layers, Target,
  Zap, BarChart3, Users, Lock, ChevronDown,
  ExternalLink, Menu, X, ChevronRight, HeadphonesIcon, Globe
} from 'lucide-react'

// ── Intersection observer hook ───────────────────────────────────────────────
function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

// ── WhatsApp / Dr.Ben floating buttons ───────────────────────────────────────
function FloatingButtons() {
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 800)
    return () => clearTimeout(t)
  }, [])

  if (dismissed) return null

  const waPhone = '5586994820054'
  const waMsg = 'Olá Dr. Ben! Gostaria de uma orientação jurídica.'
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`

  return (
    <>
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .float-btn { animation: floatIn 0.45s ease forwards; }
        .float-btn-chat { animation-delay: 0.1s; opacity: 0; }
        .float-btn-wa   { animation-delay: 0.28s; opacity: 0; }
        @keyframes pulseRing {
          0%   { transform: scale(1);    opacity: 0.6; }
          70%  { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .pulse-gold  { animation: pulseRing 2.2s ease-out infinite; }
        .pulse-green { animation: pulseRing 2.2s ease-out infinite 0.5s; }
      `}</style>

      <div
        className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3"
        style={{ filter: mounted ? 'none' : 'opacity(0)' }}
      >
        {/* Chat Dr. Ben */}
        <a
          href="https://mauromoncao.adv.br/assistente-juridico"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat com Dr. Ben"
          className="float-btn float-btn-chat group relative flex items-center gap-0 hover:gap-2.5 overflow-hidden rounded-full transition-all duration-300 ease-out hover:pr-4"
          style={{
            background: 'linear-gradient(135deg, #0f2044 0%, #19385C 100%)',
            border: '2.5px solid #D4A017',
            boxShadow: '0 0 18px rgba(212,160,23,0.45), 0 4px 16px rgba(0,0,0,0.4)',
            height: '56px',
            minWidth: '56px',
          }}
        >
          <span className="pulse-gold absolute rounded-full pointer-events-none"
            style={{ width: '56px', height: '56px', border: '2px solid rgba(212,160,23,0.55)', right: 0 }} />
          <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0"
            style={{ border: '2px solid rgba(212,160,23,0.5)' }}>
            <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
          </div>
          <span className="text-[13px] font-bold whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-300"
            style={{ color: '#D4A017' }}>
            Chat Jurídico
          </span>
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center border-[2px] border-white"
            style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)' }}>
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="#0f1428">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
            </svg>
          </div>
          <div className="absolute -top-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white shadow" />
        </a>

        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Dr. Ben"
          className="float-btn float-btn-wa group relative flex items-center gap-0 hover:gap-2.5 overflow-hidden rounded-full transition-all duration-300 ease-out hover:pr-4"
          style={{
            background: 'linear-gradient(135deg, #0f2044 0%, #19385C 100%)',
            border: '2.5px solid #25D366',
            boxShadow: '0 0 18px rgba(37,211,102,0.35), 0 4px 16px rgba(0,0,0,0.4)',
            height: '56px',
            minWidth: '56px',
          }}
        >
          <span className="pulse-green absolute rounded-full pointer-events-none"
            style={{ width: '56px', height: '56px', border: '2px solid rgba(37,211,102,0.5)', right: 0 }} />
          <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0"
            style={{ border: '2px solid rgba(37,211,102,0.45)' }}>
            <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
          </div>
          <span className="text-[13px] font-bold whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-300"
            style={{ color: '#25D366' }}>
            WhatsApp
          </span>
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center border-[2px] border-white"
            style={{ background: '#25D366' }}>
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </div>
          <div className="absolute -top-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white shadow" />
        </a>

        <button onClick={() => setDismissed(true)}
          className="text-[10px] text-white/35 hover:text-white/60 transition-colors tracking-wide">
          fechar
        </button>
      </div>
    </>
  )
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate()

  const systems = [
    {
      label: 'Ben Growth Center',
      desc: 'Módulo 01 · Inteligência Comercial',
      icon: TrendingUp,
      color: '#00b37e',
      href: 'https://ben-growth-center.vercel.app/',
      external: true,
    },
    {
      label: 'Ben Juris Center',
      desc: 'Módulo 02 · Gestão Jurídica',
      icon: Scale,
      color: '#3b82f6',
      href: null,
      external: false,
      action: () => { onClose(); navigate('/login?panel=juris') },
    },
  ]

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className="fixed top-0 left-0 z-50 h-full flex flex-col transition-transform duration-300"
        style={{
          width: '280px',
          background: '#0f2044',
          borderRight: '1px solid rgba(212,160,23,0.25)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          boxShadow: open ? '4px 0 40px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5"
          style={{ borderBottom: '1px solid rgba(212,160,23,0.15)' }}>
          {/* BEN HUB text logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #D4A017, #F0C040)', boxShadow: '0 0 12px rgba(212,160,23,0.40)' }}>
              <Brain size={18} style={{ color: '#0f1428' }} />
            </div>
            <div>
              <span className="block font-black text-lg tracking-widest leading-none"
                style={{ color: '#D4A017', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.12em' }}>
                BEN HUB
              </span>
              <span className="block text-[9px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: 'rgba(212,160,23,0.55)' }}>
                Strategic Intelligence
              </span>
            </div>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ color: 'rgba(255,255,255,0.50)', background: 'rgba(255,255,255,0.05)' }}>
            <X size={16} />
          </button>
        </div>

        {/* Systems section */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3 px-1"
            style={{ color: 'rgba(212,160,23,0.50)' }}>
            Sistemas
          </p>

          <div className="space-y-2">
            {systems.map(s => {
              const Icon = s.icon
              const handleClick = () => {
                if (s.external && s.href) {
                  window.open(s.href, '_blank', 'noopener,noreferrer')
                  onClose()
                } else if (s.action) {
                  s.action()
                }
              }

              return (
                <button key={s.label} onClick={handleClick}
                  className="sidebar-link w-full text-left"
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.color}1A`, border: `1px solid ${s.color}55` }}>
                    <Icon size={16} style={{ color: s.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-bold text-white truncate">{s.label}</div>
                    <div className="text-[11px] truncate" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</div>
                  </div>
                  <ExternalLink size={12} style={{ color: 'rgba(212,160,23,0.50)', flexShrink: 0 }} />
                </button>
              )
            })}
          </div>

          {/* Divider */}
          <div className="my-5" style={{ height: '1px', background: 'rgba(212,160,23,0.12)' }} />

          {/* Support link */}
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3 px-1"
            style={{ color: 'rgba(212,160,23,0.50)' }}>
            Ajuda
          </p>

          <a
            href="https://wa.me/5586994820054?text=Olá!%20Preciso%20de%20suporte%20com%20o%20BEN%20HUB."
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
            onClick={onClose}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(37,211,102,0.10)', border: '1px solid rgba(37,211,102,0.35)' }}>
              <HeadphonesIcon size={16} style={{ color: '#25D366' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold text-white">Suporte</div>
              <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>WhatsApp · (86) 99482-0054</div>
            </div>
            <ExternalLink size={12} style={{ color: 'rgba(37,211,102,0.50)', flexShrink: 0 }} />
          </a>
        </div>

        {/* Footer */}
        <div className="px-5 py-4" style={{ borderTop: '1px solid rgba(212,160,23,0.12)' }}>
          <a href="https://mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logos/logo-mm-crop.png" alt="Mauro Monção" style={{ height: '28px', objectFit: 'contain' }} />
          </a>
          <p className="text-[10px] mt-1.5" style={{ color: 'rgba(255,255,255,0.30)' }}>
            © 2025 Mauro Monção Advogados
          </p>
        </div>
      </aside>
    </>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function LandingPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [accessDropdown, setAccessDropdown] = useState(false)

  const hero = useVisible(0.05)
  const about = useVisible(0.12)
  const pillars = useVisible(0.08)
  const diff = useVisible(0.08)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0f1428' }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <FloatingButtons />

      {/* ================================================================
          NAVBAR
      ================================================================ */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(15,32,68,0.98)' : '#0f2044',
          borderBottom: '2px solid rgba(212,160,23,0.40)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.40)' : 'none',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-[72px] gap-4">

          {/* Left: hamburger + BEN HUB text logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
              style={{ background: 'rgba(212,160,23,0.10)', border: '1px solid rgba(212,160,23,0.30)', color: '#D4A017' }}
              aria-label="Abrir menu"
            >
              <Menu size={20} />
            </button>

            {/* BEN HUB text logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #D4A017, #F0C040)', boxShadow: '0 0 10px rgba(212,160,23,0.35)' }}>
                <Brain size={16} style={{ color: '#0f1428' }} />
              </div>
              <div className="hidden sm:block">
                <span className="block font-black text-xl tracking-widest leading-none"
                  style={{ color: '#D4A017', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.14em' }}>
                  BEN HUB
                </span>
                <span className="block text-[8px] font-semibold tracking-widest uppercase leading-none mt-0.5"
                  style={{ color: 'rgba(212,160,23,0.55)' }}>
                  Strategic Intelligence
                </span>
              </div>
            </div>
          </div>

          {/* Center: desktop nav */}
          <nav className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            <a href="https://www.mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
              className="text-[14px] font-semibold text-white/80 hover:text-[#D4A017] transition-colors whitespace-nowrap">
              Site Principal
            </a>
            <a href="#sobre"
              className="text-[14px] font-semibold text-white/80 hover:text-[#D4A017] transition-colors whitespace-nowrap">
              Sobre o Hub
            </a>
            <a href="#modulos"
              className="text-[14px] font-semibold text-white/80 hover:text-[#D4A017] transition-colors whitespace-nowrap">
              Módulos
            </a>
            <a href="#diferencial"
              className="text-[14px] font-semibold text-white/80 hover:text-[#D4A017] transition-colors whitespace-nowrap">
              Diferenciais
            </a>
          </nav>

          {/* Right: Dr. Ben + Área Restrita */}
          <div className="flex items-center gap-3">
            {/* Dr. Ben badge */}
            <a href="https://mauromoncao.adv.br/assistente-juridico"
              target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] font-bold transition-all whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #B8860B, #D4A017, #F0C040)',
                color: '#0f1428',
                boxShadow: '0 0 14px rgba(212,160,23,0.45)',
              }}>
              <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
              </div>
              Dr. Ben
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0" />
            </a>

            {/* Área Restrita dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccessDropdown(!accessDropdown)}
                onBlur={() => setTimeout(() => setAccessDropdown(false), 180)}
                className="flex items-center gap-2 text-[13px] font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap"
                style={{ background: 'rgba(212,160,23,0.08)', border: '1.5px solid rgba(212,160,23,0.40)', color: '#D4A017' }}>
                <Lock size={13} />
                <span className="hidden sm:inline">Área Restrita</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${accessDropdown ? 'rotate-180' : ''}`} />
              </button>

              {accessDropdown && (
                <div
                  className="absolute right-0 top-[calc(100%+8px)] z-50 w-72 rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(10,18,42,0.98)',
                    border: '1.5px solid rgba(212,160,23,0.35)',
                    backdropFilter: 'blur(18px)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.60)',
                  }}
                >
                  <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(212,160,23,0.15)' }}>
                    <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(212,160,23,0.60)' }}>
                      Selecione o Acesso
                    </p>
                  </div>

                  {/* Growth Center */}
                  <a
                    href="https://ben-growth-center.vercel.app/"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3.5 transition-all group hover:bg-white/5"
                    onClick={() => setAccessDropdown(false)}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0,179,126,0.15)', border: '1px solid rgba(0,179,126,0.40)' }}>
                      <TrendingUp size={16} style={{ color: '#00b37e' }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[13px] font-bold text-white group-hover:text-[#00b37e] transition-colors">Ben Growth Center</div>
                      <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Módulo 01 · Inteligência Comercial</div>
                    </div>
                    <ChevronRight size={14} style={{ color: 'rgba(255,255,255,0.30)' }} />
                  </a>

                  <div className="mx-4" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                  {/* Juris Center */}
                  <button
                    onClick={() => { setAccessDropdown(false); navigate('/login?panel=juris') }}
                    className="w-full flex items-center gap-3 px-4 py-3.5 transition-all group hover:bg-white/5"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.40)' }}>
                      <Scale size={16} style={{ color: '#3b82f6' }} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[13px] font-bold text-white group-hover:text-[#3b82f6] transition-colors">Ben Juris Center</div>
                      <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Módulo 02 · Gestão Jurídica</div>
                    </div>
                    <Lock size={12} style={{ color: 'rgba(255,255,255,0.30)' }} />
                  </button>

                  <div className="mx-4" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                  {/* Suporte */}
                  <a
                    href="https://wa.me/5586994820054?text=Olá!%20Preciso%20de%20suporte%20com%20o%20BEN%20HUB."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3.5 transition-all group hover:bg-white/5"
                    onClick={() => setAccessDropdown(false)}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.35)' }}>
                      <HeadphonesIcon size={16} style={{ color: '#25D366' }} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[13px] font-bold text-white group-hover:text-[#25D366] transition-colors">Suporte</div>
                      <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>WhatsApp · Atendimento 24h</div>
                    </div>
                    <ExternalLink size={12} style={{ color: 'rgba(255,255,255,0.30)' }} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ================================================================
          HERO
      ================================================================ */}
      <section
        ref={hero.ref}
        className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
        style={{ background: 'linear-gradient(160deg, #0f2044 0%, #0f1428 60%)' }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(212,160,23,0.06) 0%, transparent 70%)' }} />

        <div
          className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-20 w-full transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'translateY(0)' : 'translateY(32px)' }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: 'rgba(212,160,23,0.10)', border: '1px solid rgba(212,160,23,0.35)' }}>
                <Zap size={13} style={{ color: '#D4A017' }} />
                <span className="text-[12px] font-bold tracking-widest uppercase"
                  style={{ color: '#D4A017' }}>
                  Strategic Intelligence Hub
                </span>
              </div>

              <h1 className="font-black leading-[0.95] mb-6"
                style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
                <span style={{ color: '#fff' }}>BEN</span>
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #B8860B, #D4A017, #F0C040)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>HUB</span>
              </h1>

              <p className="text-xl font-semibold mb-3 text-white/90">
                Ecossistema Jurídico Inteligente
              </p>
              <p className="text-base leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(255,255,255,0.60)' }}>
                Plataforma unificada que integra gestão comercial, operação jurídica e
                inteligência artificial para o escritório Mauro Monção Advogados Associados.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://ben-growth-center.vercel.app/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto justify-center">
                  <TrendingUp size={16} /> Ben Growth Center
                </a>
                <button
                  onClick={() => navigate('/login?panel=juris')}
                  className="btn-outline w-full sm:w-auto justify-center">
                  <Scale size={16} /> Ben Juris Center
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
                {[
                  { val: '2', label: 'Sistemas Ativos' },
                  { val: '24h', label: 'Atendimento Dr. Ben' },
                  { val: '100%', label: 'Integrado' },
                ].map(s => (
                  <div key={s.val} className="text-center">
                    <div className="text-2xl font-black" style={{ color: '#D4A017' }}>{s.val}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: system cards */}
            <div className="flex-1 w-full max-w-md">
              <div className="space-y-4">
                {/* Growth Card */}
                <a
                  href="https://ben-growth-center.vercel.app/"
                  target="_blank" rel="noopener noreferrer"
                  className="glass-card p-6 flex items-center gap-5 group transition-all duration-300 cursor-pointer hover:scale-[1.01] block"
                  style={{ borderColor: 'rgba(0,179,126,0.30)' }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,179,126,0.15)', border: '1px solid rgba(0,179,126,0.40)' }}>
                    <TrendingUp size={26} style={{ color: '#00b37e' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#00b37e' }}>Módulo 01</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Ben Growth Center</h3>
                    <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      CRM, Campanhas, Analytics e Inteligência Comercial
                    </p>
                  </div>
                  <ExternalLink size={18} style={{ color: 'rgba(0,179,126,0.60)', flexShrink: 0 }} />
                </a>

                {/* Juris Card */}
                <button
                  onClick={() => navigate('/login?panel=juris')}
                  className="glass-card p-6 flex items-center gap-5 group transition-all duration-300 cursor-pointer hover:scale-[1.01] w-full text-left"
                  style={{ borderColor: 'rgba(59,130,246,0.30)' }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.40)' }}>
                    <Scale size={26} style={{ color: '#3b82f6' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#3b82f6' }}>Módulo 02</span>
                      <Lock size={11} style={{ color: 'rgba(255,255,255,0.35)' }} />
                    </div>
                    <h3 className="text-lg font-bold text-white">Ben Juris Center</h3>
                    <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      Processos, Prazos, Documentos e Gestão Jurídica
                    </p>
                  </div>
                  <Lock size={18} style={{ color: 'rgba(59,130,246,0.60)', flexShrink: 0 }} />
                </button>

                {/* Support Card */}
                <a
                  href="https://wa.me/5586994820054?text=Olá!%20Preciso%20de%20suporte%20com%20o%20BEN%20HUB."
                  target="_blank" rel="noopener noreferrer"
                  className="glass-card p-5 flex items-center gap-4 group transition-all duration-300 cursor-pointer hover:scale-[1.01]"
                  style={{ borderColor: 'rgba(37,211,102,0.25)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.35)' }}>
                    <HeadphonesIcon size={20} style={{ color: '#25D366' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white">Suporte</h3>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.50)' }}>
                      Central de atendimento · WhatsApp 24h
                    </p>
                  </div>
                  <ExternalLink size={14} style={{ color: 'rgba(37,211,102,0.50)', flexShrink: 0 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SOBRE O HUB
      ================================================================ */}
      <section id="sobre" ref={about.ref} className="py-24 px-6 md:px-12"
        style={{ background: '#0f1428' }}>
        <div
          className="max-w-[1280px] mx-auto transition-all duration-700"
          style={{ opacity: about.visible ? 1 : 0, transform: about.visible ? 'translateY(0)' : 'translateY(32px)' }}
        >
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-5" />
            <h2 className="font-black text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#fff' }}>
              Sobre o <span style={{ color: '#D4A017' }}>BEN HUB</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Ecossistema integrado de inteligência estratégica para escritórios jurídicos de alto desempenho.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                color: '#D4A017',
                title: 'Inteligência Artificial',
                desc: 'Dr. Ben opera 24h qualificando leads, respondendo clientes e gerando insights estratégicos com Gemini 2.5.',
              },
              {
                icon: Layers,
                color: '#00b37e',
                title: 'Módulos Integrados',
                desc: 'Growth Center e Juris Center comunicam-se em tempo real, eliminando retrabalho e unificando dados.',
              },
              {
                icon: Target,
                color: '#3b82f6',
                title: 'Alta Performance',
                desc: 'Dashboards executivos, KPIs automatizados e alertas inteligentes para decisões mais rápidas e precisas.',
              },
            ].map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} className="glass-card p-8 text-center" style={{ borderColor: `${card.color}25` }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${card.color}18`, border: `1px solid ${card.color}40` }}>
                    <Icon size={28} style={{ color: card.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          MÓDULOS
      ================================================================ */}
      <section id="modulos" ref={pillars.ref} className="py-24 px-6 md:px-12"
        style={{ background: 'linear-gradient(180deg, #0f1428 0%, #0f2044 100%)' }}>
        <div
          className="max-w-[1280px] mx-auto transition-all duration-700"
          style={{ opacity: pillars.visible ? 1 : 0, transform: pillars.visible ? 'translateY(0)' : 'translateY(32px)' }}
        >
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-5" />
            <h2 className="font-black text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#fff' }}>
              Nossos <span style={{ color: '#D4A017' }}>Módulos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Growth */}
            <div className="glass-card p-8" style={{ borderColor: 'rgba(0,179,126,0.30)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(0,179,126,0.15)', border: '1px solid rgba(0,179,126,0.40)' }}>
                  <TrendingUp size={26} style={{ color: '#00b37e' }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#00b37e' }}>Módulo 01</p>
                  <h3 className="text-2xl font-bold text-white">Ben Growth Center</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Hub Comercial', 'CRM & Leads', 'Dr. Ben IA', 'Campanhas', 'Analytics', 'Assinaturas', 'Financeiro', 'Flow Builder'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.70)' }}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00b37e' }} />
                    {f}
                  </div>
                ))}
              </div>
              <a href="https://ben-growth-center.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="btn-gold text-sm px-5 py-2.5 inline-flex">
                Acessar <ExternalLink size={13} />
              </a>
            </div>

            {/* Juris */}
            <div className="glass-card p-8" style={{ borderColor: 'rgba(59,130,246,0.30)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.40)' }}>
                  <Scale size={26} style={{ color: '#3b82f6' }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#3b82f6' }}>Módulo 02</p>
                  <h3 className="text-2xl font-bold text-white">Ben Juris Center</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Dashboard BI', 'Processos', 'Prazos', 'Documentos', 'Financeiro', 'Agenda', 'Portal Cliente', 'Núcleo IA'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.70)' }}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3b82f6' }} />
                    {f}
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/login?panel=juris')}
                className="btn-outline text-sm px-5 py-2.5 inline-flex" style={{ borderColor: '#3b82f6', color: '#3b82f6' }}>
                <Lock size={13} /> Acesso Restrito
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          DIFERENCIAIS
      ================================================================ */}
      <section id="diferencial" ref={diff.ref} className="py-24 px-6 md:px-12"
        style={{ background: '#0f1428' }}>
        <div
          className="max-w-[1280px] mx-auto transition-all duration-700"
          style={{ opacity: diff.visible ? 1 : 0, transform: diff.visible ? 'translateY(0)' : 'translateY(32px)' }}
        >
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-5" />
            <h2 className="font-black text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#fff' }}>
              Nossos <span style={{ color: '#D4A017' }}>Diferenciais</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Brain,    color: '#D4A017', title: 'IA Generativa',       desc: 'Gemini 2.5 Flash integrado em todos os módulos para automação e insights.' },
              { icon: Zap,      color: '#f59e0b', title: 'Tempo Real',          desc: 'Dados, alertas e notificações atualizados em tempo real sem recarregar.' },
              { icon: Shield,   color: '#3b82f6', title: 'Segurança',           desc: 'Autenticação segura, acesso por perfil e auditoria completa de ações.' },
              { icon: Users,    color: '#00b37e', title: 'Multi-usuário',       desc: 'Perfis para advogados, assistentes e clientes com permissões distintas.' },
              { icon: Globe,    color: '#a78bfa', title: 'Integrações',         desc: 'ZapSign, Asaas, Meta Ads, Google Ads e WhatsApp Business conectados.' },
              { icon: BarChart3, color: '#f43f5e', title: 'Analytics Avançado', desc: 'Dashboards executivos com KPIs, tendências e relatórios automatizados.' },
            ].map(d => {
              const Icon = d.icon
              return (
                <div key={d.title} className="glass-card p-6 flex gap-4" style={{ borderColor: `${d.color}20` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${d.color}18`, border: `1px solid ${d.color}35` }}>
                    <Icon size={18} style={{ color: d.color }} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{d.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{d.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER
      ================================================================ */}
      <footer className="py-12 px-6 md:px-12" style={{ background: '#0f2044', borderTop: '1px solid rgba(212,160,23,0.20)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #D4A017, #F0C040)' }}>
                <Brain size={20} style={{ color: '#0f1428' }} />
              </div>
              <div>
                <span className="block font-black text-lg tracking-widest" style={{ color: '#D4A017', fontFamily: 'Outfit, sans-serif' }}>
                  BEN HUB
                </span>
                <span className="block text-[10px]" style={{ color: 'rgba(255,255,255,0.40)' }}>
                  Strategic Intelligence Hub
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-[#D4A017] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Site Principal
              </a>
              <a href="https://ben-growth-center.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-[#D4A017] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Growth Center
              </a>
              <a href="https://wa.me/5586994820054" target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-[#D4A017] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Suporte
              </a>
            </div>

            <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.30)' }}>
              © 2025 Mauro Monção Advogados Associados · Parnaíba - PI
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
