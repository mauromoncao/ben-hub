import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TrendingUp, Scale, Shield, Brain, Layers, Target,
  Zap, BarChart3, Users, Globe, Lock, ChevronDown,
  ExternalLink, Menu, X, ChevronRight
} from 'lucide-react'

// ── BEN Hub Logo — real PNG, cropped, transparent background ─────────────────
function BenHubLogo({ height = 80 }: { height?: number }) {
  // Real logo aspect ratio: 710×250 = 2.84:1
  const width = Math.round(height * 2.84)
  return (
    <img
      src="/logos/logo-ben-hub-real-crop.png"
      alt="BEN Strategic Intelligence Hub"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        objectFit: 'contain',
        imageRendering: 'crisp-edges',
        display: 'block',
        flexShrink: 0,
      }}
    />
  )
}

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
            background: 'linear-gradient(135deg, #0f2340 0%, #19385C 100%)',
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
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="#0f2340">
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
            background: 'linear-gradient(135deg, #0f2340 0%, #19385C 100%)',
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

// ── Ecosystem SVG Illustration ────────────────────────────────────────────────
function EcosystemIllustration() {
  return (
    <svg viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl mx-auto" aria-label="Ecossistema BEN Strategic Intelligence Hub">

      {/* ── Background glow ── */}
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DEC078" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#DEC078" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="growthGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00b37e" stopOpacity="0.20"/>
          <stop offset="100%" stopColor="#00b37e" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="jurisGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.20"/>
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Outer orbit ring */}
      <ellipse cx="260" cy="170" rx="220" ry="140" stroke="rgba(222,192,120,0.12)" strokeWidth="1" strokeDasharray="6 4"/>
      <ellipse cx="260" cy="170" rx="165" ry="105" stroke="rgba(222,192,120,0.08)" strokeWidth="1" strokeDasharray="4 6"/>

      {/* Radial connection lines — center to modules */}
      <line x1="260" y1="170" x2="108" y2="170" stroke="rgba(222,192,120,0.30)" strokeWidth="1.5" strokeDasharray="5 3"/>
      <line x1="260" y1="170" x2="412" y2="170" stroke="rgba(222,192,120,0.30)" strokeWidth="1.5" strokeDasharray="5 3"/>
      <line x1="260" y1="170" x2="200" y2="52"  stroke="rgba(222,192,120,0.18)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="260" y1="170" x2="320" y2="52"  stroke="rgba(222,192,120,0.18)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="260" y1="170" x2="200" y2="290" stroke="rgba(222,192,120,0.18)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="260" y1="170" x2="320" y2="290" stroke="rgba(222,192,120,0.18)" strokeWidth="1" strokeDasharray="4 4"/>

      {/* Connection line Growth ↔ Juris */}
      <path d="M 148 170 Q 260 100 372 170" stroke="rgba(222,192,120,0.15)" strokeWidth="1" fill="none" strokeDasharray="5 3"/>

      {/* ── CENTER — BEN Strategic Intelligence Hub ── */}
      <circle cx="260" cy="170" r="62" fill="url(#centerGlow)"/>
      <circle cx="260" cy="170" r="58" fill="#0f2340" stroke="#DEC078" strokeWidth="1.8"/>
      <circle cx="260" cy="170" r="52" fill="none" stroke="rgba(222,192,120,0.25)" strokeWidth="1"/>

      {/* Brain circuit icon — center */}
      <g transform="translate(236,146)" filter="url(#glow)">
        {/* Brain outline */}
        <path d="M24 4C18 4 13 8 12 14C11 8 6 4 0 4C-3 4 -6 6.5 -6 10C-6 13.5 -3 16 0 16H1C1 20 4 23 8 23H16C20 23 23 20 23 16H24C27 16 30 13.5 30 10C30 6.5 27 4 24 4Z" stroke="#DEC078" strokeWidth="1.5" fill="rgba(222,192,120,0.08)"/>
        {/* Circuit lines */}
        <line x1="12" y1="14" x2="12" y2="23" stroke="#DEC078" strokeWidth="1.2"/>
        <line x1="8" y1="10" x2="4" y2="10" stroke="#DEC078" strokeWidth="1"/>
        <line x1="16" y1="10" x2="20" y2="10" stroke="#DEC078" strokeWidth="1"/>
        <circle cx="4" cy="10" r="1.5" fill="#DEC078"/>
        <circle cx="20" cy="10" r="1.5" fill="#DEC078"/>
        <circle cx="12" cy="23" r="1.5" fill="#DEC078"/>
        <line x1="8" y1="17" x2="5" y2="20" stroke="#DEC078" strokeWidth="1"/>
        <line x1="16" y1="17" x2="19" y2="20" stroke="#DEC078" strokeWidth="1"/>
        <circle cx="5" cy="20" r="1.5" fill="#DEC078"/>
        <circle cx="19" cy="20" r="1.5" fill="#DEC078"/>
      </g>

      {/* Center label */}
      <text x="260" y="205" textAnchor="middle" fill="#DEC078" fontFamily="Cormorant Garamond,serif" fontSize="9.5" fontWeight="700" letterSpacing="2">BEN</text>
      <text x="260" y="215" textAnchor="middle" fill="rgba(222,192,120,0.65)" fontFamily="Outfit,sans-serif" fontSize="6" letterSpacing="1.5">STRATEGIC HUB</text>

      {/* ── LEFT — Ben Growth Center ── */}
      <circle cx="108" cy="170" r="44" fill="url(#growthGlow)"/>
      <circle cx="108" cy="170" r="40" fill="#0a1e38" stroke="rgba(0,179,126,0.60)" strokeWidth="1.8"/>

      {/* Growth icon — bar chart + arrow */}
      <g transform="translate(88,155)">
        <rect x="0"  y="14" width="6" height="6" rx="1" fill="#00b37e" opacity="0.8"/>
        <rect x="8"  y="9"  width="6" height="11" rx="1" fill="#00b37e" opacity="0.9"/>
        <rect x="16" y="4"  width="6" height="16" rx="1" fill="#00b37e"/>
        <path d="M2 12 L10 5 L20 2" stroke="#00b37e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <polygon points="20,2 20,7 25,2" fill="#00b37e"/>
      </g>

      <text x="108" y="204" textAnchor="middle" fill="#00b37e" fontFamily="Outfit,sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="1">BEN GROWTH</text>
      <text x="108" y="213" textAnchor="middle" fill="rgba(0,179,126,0.65)" fontFamily="Outfit,sans-serif" fontSize="5.5" letterSpacing="1">CENTER</text>

      {/* ── RIGHT — Ben Juris Center ── */}
      <circle cx="412" cy="170" r="44" fill="url(#jurisGlow)"/>
      <circle cx="412" cy="170" r="40" fill="#0a1e38" stroke="rgba(59,130,246,0.60)" strokeWidth="1.8"/>

      {/* Juris icon — shield + document governance (NO balance/scale) */}
      <g transform="translate(394,150)">
        {/* Outer shield */}
        <path d="M18 2 L32 7 L32 18 Q32 27 18 32 Q4 27 4 18 L4 7 Z" stroke="#3b82f6" strokeWidth="1.5" fill="rgba(59,130,246,0.12)"/>
        {/* Document lines inside shield */}
        <line x1="10" y1="13" x2="26" y2="13" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="10" y1="17" x2="26" y2="17" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="10" y1="21" x2="20" y2="21" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Shield checkmark */}
        <circle cx="18" cy="17" r="6" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.35)" strokeWidth="0.8"/>
        <path d="M14.5 17 L17 19.5 L21.5 14.5" stroke="#3b82f6" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      <text x="412" y="204" textAnchor="middle" fill="#3b82f6" fontFamily="Outfit,sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="1">BEN JURIS</text>
      <text x="412" y="213" textAnchor="middle" fill="rgba(59,130,246,0.65)" fontFamily="Outfit,sans-serif" fontSize="5.5" letterSpacing="1">CENTER</text>

      {/* ── Satellite nodes ── */}
      {/* Top-left: Inteligência */}
      <circle cx="200" cy="52" r="22" fill="#0a1e38" stroke="rgba(222,192,120,0.35)" strokeWidth="1.2"/>
      <text x="200" y="49" textAnchor="middle" fill="rgba(222,192,120,0.9)" fontFamily="Outfit,sans-serif" fontSize="6" fontWeight="600">Inteligência</text>
      <text x="200" y="58" textAnchor="middle" fill="rgba(222,192,120,0.6)" fontFamily="Outfit,sans-serif" fontSize="5">Aplicada</text>

      {/* Top-right: Estratégia */}
      <circle cx="320" cy="52" r="22" fill="#0a1e38" stroke="rgba(222,192,120,0.35)" strokeWidth="1.2"/>
      <text x="320" y="49" textAnchor="middle" fill="rgba(222,192,120,0.9)" fontFamily="Outfit,sans-serif" fontSize="6" fontWeight="600">Estratégia</text>
      <text x="320" y="58" textAnchor="middle" fill="rgba(222,192,120,0.6)" fontFamily="Outfit,sans-serif" fontSize="5">& Governança</text>

      {/* Bottom-left: Performance */}
      <circle cx="200" cy="290" r="22" fill="#0a1e38" stroke="rgba(222,192,120,0.35)" strokeWidth="1.2"/>
      <text x="200" y="287" textAnchor="middle" fill="rgba(222,192,120,0.9)" fontFamily="Outfit,sans-serif" fontSize="6" fontWeight="600">Performance</text>
      <text x="200" y="296" textAnchor="middle" fill="rgba(222,192,120,0.6)" fontFamily="Outfit,sans-serif" fontSize="5">& Dados</text>

      {/* Bottom-right: Integração */}
      <circle cx="320" cy="290" r="22" fill="#0a1e38" stroke="rgba(222,192,120,0.35)" strokeWidth="1.2"/>
      <text x="320" y="287" textAnchor="middle" fill="rgba(222,192,120,0.9)" fontFamily="Outfit,sans-serif" fontSize="6" fontWeight="600">Integração</text>
      <text x="320" y="296" textAnchor="middle" fill="rgba(222,192,120,0.6)" fontFamily="Outfit,sans-serif" fontSize="5">& Escalabilidade</text>

      {/* Animated pulse dots on connection lines */}
      <circle cx="184" cy="170" r="2.5" fill="#DEC078" opacity="0.7">
        <animate attributeName="cx" values="184;140;108" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.4;0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="336" cy="170" r="2.5" fill="#DEC078" opacity="0.7">
        <animate attributeName="cx" values="336;380;412" dur="3s" repeatCount="indefinite" begin="1.5s"/>
        <animate attributeName="opacity" values="0.8;0.4;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
      </circle>
    </svg>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function LandingPage() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [accessDropdown, setAccessDropdown] = useState(false)

  const hero = useVisible(0.05)
  const about = useVisible(0.12)
  const pillars = useVisible(0.08)
  const diff = useVisible(0.08)
  const footer = useVisible(0.08)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waPhone = '5586994820054'
  const waMsg = 'Olá! Gostaria de informações sobre o BEN Strategic Intelligence Hub.'
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0f2340' }}>

      {/* ================================================================
          NAVBAR — same pattern as mauro-site header
      ================================================================ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(15,35,64,0.97)' : '#0f2340',
          borderBottom: '2px solid rgba(212,160,23,0.45)',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.35)' : 'none',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-[80px] gap-4">

          {/* Logo MM — transparente, ampliada, padrão mauro-site */}
          <a href="https://www.mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
            className="flex items-center shrink-0">
            <img src="/logos/logo-mm-crop.png" alt="Mauro Monção Advogados Associados"
              style={{ height: '64px', objectFit: 'contain', imageRendering: 'crisp-edges' }} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-5 flex-1 justify-end">
            <a href="https://www.mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
              className="text-[14px] font-semibold text-white/85 hover:text-[#D4A017] transition-colors whitespace-nowrap">
              Site Principal
            </a>
            <a href="#sobre"
              className="text-[14px] font-semibold text-white/85 hover:text-[#D4A017] transition-colors whitespace-nowrap">
              Sobre o Hub
            </a>
            <a href="#modulos"
              className="text-[14px] font-semibold text-white/85 hover:text-[#D4A017] transition-colors whitespace-nowrap">
              Módulos
            </a>
            <a href="#diferencial"
              className="text-[14px] font-semibold text-white/85 hover:text-[#D4A017] transition-colors whitespace-nowrap">
              Diferenciais
            </a>

            {/* Dr. Ben badge */}
            <a href="https://mauromoncao.adv.br/assistente-juridico"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 text-[#0f2340] px-3.5 py-2 rounded-full text-[13px] font-bold transition-all whitespace-nowrap shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #D4A017, #F0C040, #C8960E)',
                borderColor: '#F0C040',
                boxShadow: '0 0 16px rgba(212,160,23,0.55), 0 2px 8px rgba(0,0,0,0.3)',
              }}>
              <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-[#0f2340]/30 shrink-0">
                <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
              </div>
              <span className="font-black">Dr. Ben</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            </a>

            {/* Área Restrita — dropdown com 3 acessos */}
            <div className="relative">
              <button
                onClick={() => setAccessDropdown(!accessDropdown)}
                onBlur={() => setTimeout(() => setAccessDropdown(false), 180)}
                className="flex items-center gap-2 text-[13px] font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap"
                style={{ background: 'rgba(222,192,120,0.08)', border: '1.5px solid rgba(222,192,120,0.40)', color: '#DEC078' }}>
                <Lock size={13} /> Área Restrita <ChevronDown size={12} className={`transition-transform duration-200 ${accessDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown panel */}
              {accessDropdown && (
                <div
                  className="absolute right-0 top-[calc(100%+8px)] z-50 w-72 rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(10,22,50,0.97)',
                    border: '1.5px solid rgba(222,192,120,0.35)',
                    backdropFilter: 'blur(18px)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(222,192,120,0.08)'
                  }}
                >
                  <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(222,192,120,0.15)' }}>
                    <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(222,192,120,0.60)' }}>Selecione o Acesso</p>
                  </div>

                  {/* Growth Center */}
                  <a
                    href="https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3.5 transition-all group hover:bg-white/5"
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
                      <Shield size={16} style={{ color: '#3b82f6' }} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[13px] font-bold text-white group-hover:text-[#3b82f6] transition-colors">Ben Juris Center</div>
                      <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Módulo 02 · Gestão Jurídica</div>
                    </div>
                    <Lock size={12} style={{ color: 'rgba(255,255,255,0.30)' }} />
                  </button>

                  <div className="mx-4" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                  {/* Acesso do Cliente */}
                  <button
                    onClick={() => { setAccessDropdown(false); navigate('/login?panel=cliente') }}
                    className="w-full flex items-center gap-3 px-4 py-3.5 transition-all group hover:bg-white/5"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(222,192,120,0.12)', border: '1px solid rgba(222,192,120,0.35)' }}>
                      <Users size={16} style={{ color: '#DEC078' }} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[13px] font-bold text-white group-hover:text-[#DEC078] transition-colors">Acesso do Cliente</div>
                      <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Credenciais fornecidas pelo escritório</div>
                    </div>
                    <Lock size={12} style={{ color: 'rgba(255,255,255,0.30)' }} />
                  </button>

                  <div className="px-4 py-2.5" style={{ background: 'rgba(0,0,0,0.25)' }}>
                    <p className="text-[10px] text-center" style={{ color: 'rgba(255,255,255,0.28)' }}>Credenciais emitidas pelo administrador</p>
                  </div>
                </div>
              )}
            </div>

            {/* Fale Conosco */}
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="bg-[#D4A017] text-[#0f2340] px-5 py-2.5 rounded-full text-[14px] font-bold hover:brightness-110 transition-all whitespace-nowrap shadow-md"
              style={{ boxShadow: '0 0 12px rgba(212,160,23,0.45)' }}>
              Fale Conosco
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 text-[#D4A017]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="xl:hidden bg-[#0f2340] border-t border-[#D4A017]/30 px-5 pb-6">
            <div className="flex flex-col gap-0.5 pt-3">
              {[
                { href: 'https://www.mauromoncao.adv.br', label: 'Site Principal', external: true },
                { href: '#sobre',       label: 'Sobre o Hub',  external: false },
                { href: '#modulos',     label: 'Módulos',      external: false },
                { href: '#diferencial', label: 'Diferenciais', external: false },
              ].map(l => (
                <a key={l.label}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 border-b border-white/10 text-white/90 text-[16px] font-semibold hover:text-[#D4A017] transition-colors">
                  {l.label}
                </a>
              ))}

              <a href="https://mauromoncao.adv.br/assistente-juridico"
                target="_blank" rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-3 border-2 text-[#0f2340] py-3.5 rounded-full text-[15px] font-bold"
                style={{ background: 'linear-gradient(135deg, #D4A017, #F0C040, #C8960E)', borderColor: '#F0C040', boxShadow: '0 0 16px rgba(212,160,23,0.5)' }}>
                <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-[#0f2340]/30">
                  <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
                </div>
                <span className="font-black">Dr. Ben — Assistente IA</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </a>

              {/* Mobile — 3 access options */}
              <div className="mt-2 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(222,192,120,0.25)', background: 'rgba(255,255,255,0.03)' }}>
                <div className="px-4 py-2 border-b" style={{ borderColor: 'rgba(222,192,120,0.12)' }}>
                  <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(222,192,120,0.55)' }}>Área de Acesso</p>
                </div>
                <a href="https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/"
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <TrendingUp size={16} style={{ color: '#00b37e' }} />
                  <div>
                    <div className="text-[14px] font-bold text-white">Ben Growth Center</div>
                    <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Módulo 01</div>
                  </div>
                  <ExternalLink size={13} className="ml-auto" style={{ color: 'rgba(255,255,255,0.30)' }} />
                </a>
                <button onClick={() => { setMobileOpen(false); navigate('/login?panel=juris') }}
                  className="w-full flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <Shield size={16} style={{ color: '#3b82f6' }} />
                  <div className="text-left">
                    <div className="text-[14px] font-bold text-white">Ben Juris Center</div>
                    <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Módulo 02</div>
                  </div>
                  <Lock size={13} className="ml-auto" style={{ color: 'rgba(255,255,255,0.30)' }} />
                </button>
                <button onClick={() => { setMobileOpen(false); navigate('/login?panel=cliente') }}
                  className="w-full flex items-center gap-3 px-4 py-3.5">
                  <Users size={16} style={{ color: '#DEC078' }} />
                  <div className="text-left">
                    <div className="text-[14px] font-bold text-white">Acesso do Cliente</div>
                    <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Credenciais do escritório</div>
                  </div>
                  <Lock size={13} className="ml-auto" style={{ color: 'rgba(255,255,255,0.30)' }} />
                </button>
              </div>

              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="mt-2 bg-[#D4A017] text-[#0f2340] text-center px-4 py-3.5 rounded-full text-[15px] font-bold hover:brightness-110 transition-all">
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================================================================
          HERO — fundo dourado gradiente
      ================================================================ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}>

        {/* Overlay escuro para legibilidade sobre a foto */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(110deg, rgba(8,18,45,0.88) 0%, rgba(8,18,45,0.70) 55%, rgba(8,18,45,0.30) 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(222,192,120,0.40), transparent)' }} />

        <div ref={hero.ref}
          className={`relative w-full max-w-6xl mx-auto transition-all duration-1000 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div className="text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold font-sans"
                style={{ background: 'rgba(222,192,120,0.12)', border: '1px solid rgba(222,192,120,0.35)', color: '#DEC078' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#DEC078] animate-pulse" />
                Mauro Monção Advogados Associados
              </div>

              {/* Logo BEN Hub — real PNG cropada, fundo transparente */}
              <div className="mb-6" style={{ overflow: 'visible' }}>
                <BenHubLogo height={72} />
              </div>

              {/* Title */}
              <h1 className="font-serif font-bold leading-[1.05] mb-4"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-0.02em' }}>
                BEN Strategic
                <span className="block" style={{ color: '#DEC078' }}>Intelligence Hub</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg font-serif italic mb-5" style={{ color: 'rgba(222,192,120,0.85)' }}>
                Núcleo estratégico do ecossistema institucional
              </p>

              {/* Body */}
              <p className="text-base md:text-[17px] leading-relaxed mb-9 font-sans max-w-lg"
                style={{ color: 'rgba(255,255,255,0.82)' }}>
                Inteligência comercial, gestão jurídica, governança e performance integrados
                em uma estrutura estratégica unificada — concebida para fortalecer a advocacia
                contemporânea com organização, eficiência e visão de futuro.
              </p>

              {/* CTA buttons — three access points */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3 mb-10">
                <a href="https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold font-sans transition-all duration-200 hover:scale-105 hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)', color: '#0f2340', boxShadow: '0 4px 20px rgba(212,160,23,0.45)' }}>
                  <TrendingUp size={15} />
                  Ben Growth Center
                  <ExternalLink size={12} className="opacity-70" />
                </a>
                <button onClick={() => navigate('/login?panel=juris')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold font-sans transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(59,130,246,0.12)', color: '#93c5fd', border: '2px solid rgba(59,130,246,0.45)' }}>
                  <Shield size={15} />
                  Ben Juris Center
                  <Lock size={12} className="opacity-70" />
                </button>
                <button onClick={() => navigate('/login?panel=cliente')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold font-sans transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', border: '2px solid rgba(255,255,255,0.30)' }}>
                  <Users size={15} />
                  Acesso do Cliente
                </button>
              </div>

              {/* Scroll */}
              <a href="#sobre" className="inline-flex items-center gap-2 text-xs font-sans"
                style={{ color: 'rgba(255,255,255,0.55)' }}>
                Conhecer o Ecossistema
                <ChevronDown size={14} className="animate-bounce" />
              </a>
            </div>

            {/* Right — SVG Ecosystem Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full">
                {/* Glow backdrop */}
                <div className="absolute inset-0 rounded-3xl opacity-30"
                  style={{ background: 'radial-gradient(circle at 50% 50%, rgba(15,35,64,0.2), transparent 70%)' }} />
                <EcosystemIllustration />
              </div>
            </div>
          </div>

          {/* Module cards — mobile */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center justify-center px-4 py-4 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(222,192,120,0.22)' }}>
              <img src="/logos/logo-ben-growth-crop.png" alt="Ben Growth Center"
                className="w-full" style={{ height: '56px', objectFit: 'contain', imageRendering: 'crisp-edges' }} />
            </div>
            <div className="flex items-center justify-center px-4 py-4 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(222,192,120,0.22)' }}>
              <img src="/logos/logo-ben-juris-crop.png" alt="Ben Juris Center"
                className="w-full" style={{ height: '56px', objectFit: 'contain', imageRendering: 'crisp-edges' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SOBRE O HUB
      ================================================================ */}
      <section id="sobre" className="py-24 px-6 md:px-12"
        style={{ background: 'linear-gradient(180deg, #0f2340 0%, #19385C 100%)' }}>
        <div ref={about.ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-100 ${about.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="flex flex-col md:flex-row gap-14 items-start">
            {/* Left */}
            <div className="md:w-2/5">
              <div className="section-divider mb-5" />
              <h2 className="font-serif font-bold text-4xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                O Núcleo <span style={{ color: '#DEC078' }}>Estratégico</span>
              </h2>
              <p className="font-serif italic text-lg mb-8" style={{ color: 'rgba(222,192,120,0.80)' }}>
                Advocacia contemporânea com estrutura, inteligência e governança.
              </p>

              {/* Brand logos — sem fundo, proporcional, lado a lado */}
              <div className="flex flex-row items-center gap-6 flex-wrap">
                <img src="/logos/logo-mm-crop.png" alt="Mauro Monção Advogados Associados"
                  style={{ height: '52px', objectFit: 'contain', imageRendering: 'crisp-edges' }} />
                <div className="w-px h-10 hidden sm:block" style={{ background: 'rgba(222,192,120,0.30)' }} />
                <BenHubLogo height={42} />
              </div>

              {[
                { icon: Brain, title: 'Inteligência Aplicada', sub: 'Decisões orientadas por dados e processos' },
                { icon: Layers, title: 'Ecossistema Integrado', sub: 'Módulos conectados, visão unificada' },
                { icon: Shield, title: 'Governança Institucional', sub: 'Controle, conformidade e segurança' },
              ].map(item => (
                <div key={item.title} className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(222,192,120,0.12)', border: '1px solid rgba(222,192,120,0.28)' }}>
                    <item.icon size={18} style={{ color: '#DEC078' }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-sans">{item.title}</div>
                    <div className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.52)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="md:w-3/5">
              <p className="text-base md:text-lg leading-8 font-sans mb-6" style={{ color: 'rgba(255,255,255,0.82)' }}>
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

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { n: '2', label: 'Módulos Centrais' },
                  { n: '360°', label: 'Visão Estratégica' },
                  { n: '1', label: 'Ecossistema Unificado' },
                ].map(m => (
                  <div key={m.label} className="text-center glass-card py-5 px-2 transition-all">
                    <div className="font-serif font-bold text-3xl" style={{ color: '#DEC078' }}>{m.n}</div>
                    <div className="text-xs font-sans mt-1" style={{ color: 'rgba(255,255,255,0.58)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          OS DOIS PILARES — with real logos
      ================================================================ */}
      <section id="modulos" className="py-24 px-6 md:px-12" style={{ background: '#19385C' }}>
        <div ref={pillars.ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 ${pillars.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-5"
              style={{ width: '60px', background: 'linear-gradient(90deg, transparent, #DEC078, transparent)' }} />
            <h2 className="font-serif font-bold text-4xl text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
              Os Dois <span style={{ color: '#DEC078' }}>Pilares</span> do Ecossistema
            </h2>
            <p className="text-base font-sans max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.62)' }}>
              Módulos premium interligados, cada um especializado em sua frente estratégica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Growth Center */}
            <div className="glass-card p-8 flex flex-col transition-all duration-300 group hover:scale-[1.01]"
              style={{ borderColor: 'rgba(0,179,126,0.30)' }}>
              {/* Logo Growth — cropada, tamanho generoso */}
              <div className="mb-5 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.20)' }}>
                <img src="/logos/logo-ben-growth-crop.png" alt="Ben Growth Center"
                  className="w-full" style={{ height: '80px', objectFit: 'contain', imageRendering: 'crisp-edges' }} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xs font-semibold font-sans uppercase tracking-widest"
                  style={{ color: 'rgba(0,179,126,0.80)' }}>Módulo 01</div>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00b37e' }} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-4">Ben Growth Center</h3>

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
                    <item.icon size={13} style={{ color: '#00b37e', flexShrink: 0 }} />
                    <span className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.68)' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="w-full h-px mb-6" style={{ background: 'rgba(0,179,126,0.18)' }} />
                <a href="https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 rounded-full font-bold text-sm font-sans transition-all duration-200 hover:scale-105"
                  style={{ background: '#00b37e', color: '#fff', boxShadow: '0 4px 18px rgba(0,179,126,0.35)' }}>
                  Entrar no Ben Growth Center <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Juris Center */}
            <div className="glass-card p-8 flex flex-col transition-all duration-300 group hover:scale-[1.01]"
              style={{ borderColor: 'rgba(59,130,246,0.30)' }}>
              {/* Logo Juris — cropada, tamanho generoso */}
              <div className="mb-5 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.20)' }}>
                <img src="/logos/logo-ben-juris-crop.png" alt="Ben Juris Center"
                  className="w-full" style={{ height: '80px', objectFit: 'contain', imageRendering: 'crisp-edges' }} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xs font-semibold font-sans uppercase tracking-widest"
                  style={{ color: 'rgba(59,130,246,0.80)' }}>Módulo 02</div>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#3b82f6' }} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-4">Ben Juris Center</h3>

              <p className="text-sm leading-7 font-sans mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Centro de gestão jurídica corporativa e pública, voltado ao controle operacional,
                gestão de processos, prazos, documentos, contratos, fluxos internos e governança institucional.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Scale, text: 'Gestão jurídica' },
                  { icon: Shield, text: 'Processos e prazos' },
                  { icon: Layers, text: 'Governança e controle' },
                  { icon: Brain, text: 'Operação pública' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-2">
                    <item.icon size={13} style={{ color: '#3b82f6', flexShrink: 0 }} />
                    <span className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.68)' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-6 px-3 py-2.5 rounded-xl text-xs font-sans"
                style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.25)', color: 'rgba(147,197,253,0.90)' }}>
                <Lock size={12} />
                Acesso restrito — credenciais fornecidas pelo administrador
              </div>

              <div className="mt-auto">
                <div className="w-full h-px mb-6" style={{ background: 'rgba(59,130,246,0.18)' }} />
                <button onClick={() => navigate('/login?panel=juris')}
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 rounded-full font-bold text-sm font-sans transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd', border: '1.5px solid rgba(59,130,246,0.45)' }}>
                  <Lock size={14} />Entrar no Ben Juris Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          DIFERENCIAL ESTRATÉGICO
      ================================================================ */}
      <section id="diferencial" className="py-24 px-6 md:px-12"
        style={{ background: 'linear-gradient(180deg, #19385C 0%, #0f2340 100%)' }}>
        <div ref={diff.ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 ${diff.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-5"
              style={{ width: '60px', background: 'linear-gradient(90deg, transparent, #DEC078, transparent)' }} />
            <h2 className="font-serif font-bold text-4xl text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
              Diferencial <span style={{ color: '#DEC078' }}>Estratégico</span>
            </h2>
            <p className="text-base font-sans max-w-2xl mx-auto leading-7" style={{ color: 'rgba(255,255,255,0.62)' }}>
              Uma arquitetura de trabalho pensada para a advocacia de alta performance:
              integrada, organizada, inteligente e orientada por dados, processos e estratégia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: Target,     word: 'Estratégia',      desc: 'Visão de longo prazo integrada à operação diária' },
              { icon: Brain,      word: 'Inteligência',    desc: 'Dados e IA aplicados à tomada de decisão jurídica' },
              { icon: Layers,     word: 'Integração',      desc: 'Módulos conectados em um único ecossistema' },
              { icon: Shield,     word: 'Governança',      desc: 'Controle institucional com conformidade e segurança' },
              { icon: Zap,        word: 'Performance',     desc: 'Eficiência operacional com indicadores em tempo real' },
              { icon: TrendingUp, word: 'Escalabilidade',  desc: 'Estrutura preparada para crescer com o escritório' },
            ].map((item) => (
              <div key={item.word}
                className="glass-card p-6 flex flex-col gap-3 transition-all duration-300 cursor-default hover:scale-[1.02]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(222,192,120,0.12)', border: '1px solid rgba(222,192,120,0.25)' }}>
                  <item.icon size={18} style={{ color: '#DEC078' }} />
                </div>
                <div className="font-serif font-bold text-xl text-white">{item.word}</div>
                <div className="text-xs font-sans leading-5" style={{ color: 'rgba(255,255,255,0.58)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER / ASSINATURA
      ================================================================ */}
      <section className="py-20 px-6 md:px-12 text-center relative overflow-hidden"
        style={{ background: '#0f2340' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(222,192,120,0.35), transparent)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #DEC078 0%, transparent 70%)' }} />
        </div>

        <div ref={footer.ref}
          className={`relative max-w-3xl mx-auto transition-all duration-1000 ${footer.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Logos footer — cropadas, proporcionais */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
            <img src="/logos/logo-mm-crop.png" alt="Mauro Monção Advogados Associados"
              style={{ height: '64px', objectFit: 'contain', imageRendering: 'crisp-edges' }} />
            <div className="hidden sm:block w-px h-12" style={{ background: 'rgba(222,192,120,0.35)' }} />
            <BenHubLogo height={52} />
          </div>

          <h3 className="font-serif font-bold text-3xl text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            Estratégia, inteligência e governança
          </h3>
          <p className="font-serif italic text-lg mb-10" style={{ color: 'rgba(222,192,120,0.80)' }}>
            aplicadas à advocacia contemporânea.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mb-12">
            <a href="https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="btn-gold">
              <TrendingUp size={15} />Ben Growth Center
            </a>
            <button onClick={() => navigate('/login?panel=juris')} className="btn-outline">
              <Shield size={15} />Ben Juris Center
            </button>
            <button onClick={() => navigate('/login?panel=cliente')}
              className="btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.75)' }}>
              <Users size={14} />Acesso do Cliente
            </button>
            <a href="https://www.mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
              className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.50)' }}>
              <ExternalLink size={14} />Site Principal
            </a>
          </div>

          <div className="w-full h-px mb-8" style={{ background: 'rgba(222,192,120,0.12)' }} />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans"
            style={{ color: 'rgba(255,255,255,0.38)' }}>
            <span>© 2026 Mauro Monção Advogados Associados. Todos os direitos reservados.</span>
            <a href="https://www.mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#DEC078] transition-colors"
              style={{ color: 'rgba(255,255,255,0.38)' }}>
              www.mauromoncao.adv.br <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </section>

      {/* Floating buttons */}
      <FloatingButtons />
    </div>
  )
}
