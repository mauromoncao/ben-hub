import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  LogOut, ExternalLink, Scale, FileText,
  Clock, BarChart3, Building2, CheckCircle, Lock,
  TrendingUp, Brain, HeadphonesIcon, Menu, X,
  DollarSign, Users
} from 'lucide-react'
import { useState } from 'react'

const GROWTH_URL = 'https://ben-growth-center.vercel.app/'
const JURIS_URL  = 'https://ben-juris-center-1q2o8vhr7-mauro-moncaos-projects.vercel.app/'

// ── Portal Sidebar ────────────────────────────────────────────────────────────
function PortalSidebar({ open, onClose, onLogout }: { open: boolean; onClose: () => void; onLogout: () => void }) {
  const systems = [
    {
      label: 'Ben Growth Center',
      desc: 'Módulo 01 · Comercial',
      icon: TrendingUp,
      color: '#00b37e',
      href: GROWTH_URL,
    },
    {
      label: 'Ben Juris Center',
      desc: 'Módulo 02 · Jurídico',
      icon: Scale,
      color: '#3b82f6',
      href: JURIS_URL,
    },
  ]

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      )}

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

        <div className="flex-1 overflow-y-auto px-4 py-5">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3 px-1"
            style={{ color: 'rgba(212,160,23,0.50)' }}>
            Sistemas
          </p>
          <div className="space-y-2">
            {systems.map(s => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link"
                  onClick={onClose}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.color}1A`, border: `1px solid ${s.color}55` }}>
                    <Icon size={16} style={{ color: s.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-bold text-white truncate">{s.label}</div>
                    <div className="text-[11px] truncate" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</div>
                  </div>
                  <ExternalLink size={12} style={{ color: 'rgba(212,160,23,0.50)', flexShrink: 0 }} />
                </a>
              )
            })}
          </div>

          <div className="my-5" style={{ height: '1px', background: 'rgba(212,160,23,0.12)' }} />

          <p className="text-[10px] font-bold uppercase tracking-widest mb-3 px-1"
            style={{ color: 'rgba(212,160,23,0.50)' }}>
            Ajuda
          </p>
          <a
            href="https://wa.me/5586994820054?text=Olá!%20Preciso%20de%20suporte."
            target="_blank" rel="noopener noreferrer"
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

        {/* Footer with logout */}
        <div className="px-5 py-4" style={{ borderTop: '1px solid rgba(212,160,23,0.12)' }}>
          <button
            onClick={() => { onClose(); onLogout() }}
            className="sidebar-link w-full mb-3"
          >
            <LogOut size={15} style={{ color: '#f87171', flexShrink: 0 }} />
            <span style={{ color: '#f87171' }}>Sair do Portal</span>
          </button>
          <a href="https://mauromoncao.adv.br" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logos/logo-mm-crop.png" alt="Mauro Monção" style={{ height: '26px', objectFit: 'contain' }} />
          </a>
          <p className="text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.30)' }}>
            © 2025 Mauro Monção Advogados
          </p>
        </div>
      </aside>
    </>
  )
}

// ── Main PortalPage ───────────────────────────────────────────────────────────
export default function PortalPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => { logout(); navigate('/') }

  const isAdmin = user?.role === 'admin'

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0f1428' }}>
      <PortalSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={handleLogout} />

      {/* ── TOPBAR ───────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 md:px-8 py-0 h-[68px]"
        style={{
          background: '#0f2044',
          borderBottom: '2px solid rgba(212,160,23,0.35)',
          backdropFilter: 'blur(12px)',
        }}>

        {/* Left: hamburger + BEN HUB logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
            style={{ background: 'rgba(212,160,23,0.10)', border: '1px solid rgba(212,160,23,0.30)', color: '#D4A017' }}
          >
            <Menu size={18} />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #D4A017, #F0C040)', boxShadow: '0 0 10px rgba(212,160,23,0.35)' }}>
              <Brain size={15} style={{ color: '#0f1428' }} />
            </div>
            <div className="hidden sm:block">
              <span className="block font-black text-lg tracking-widest leading-none"
                style={{ color: '#D4A017', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.14em' }}>
                BEN HUB
              </span>
              <span className="block text-[8px] font-semibold tracking-widest uppercase leading-none mt-0.5"
                style={{ color: 'rgba(212,160,23,0.50)' }}>
                Portal do Usuário
              </span>
            </div>
          </div>
        </div>

        {/* Right: user badge + logout */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(0,179,126,0.12)', border: '1px solid rgba(0,179,126,0.30)', color: '#6ee7b7' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {user?.name}
          </div>
          <button onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl transition-all"
            style={{ color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.10)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = '#f87171'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(248,113,113,0.35)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'
            }}>
            <LogOut size={13} /> Sair
          </button>
        </div>
      </header>

      {/* ── MAIN ─────────────────────────────────────────────────────────────── */}
      <main className="pt-[68px] pb-16 px-5 md:px-10 max-w-5xl mx-auto">

        {/* Welcome banner */}
        <div className="mt-8 mb-8 rounded-2xl px-8 py-7 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #B8860B 0%, #D4A017 40%, #F0C040 70%, #B8860B 100%)',
            boxShadow: '0 4px 32px rgba(212,160,23,0.25)',
          }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.18) 0%, transparent 60%)' }} />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1"
                style={{ color: 'rgba(15,20,40,0.65)' }}>
                {isAdmin ? 'Administrador' : 'Portal do Usuário'}
              </p>
              <h1 className="font-black text-2xl md:text-3xl" style={{ color: '#0f1428', fontFamily: 'Outfit, sans-serif' }}>
                Bem-vindo, {user?.name?.split(' ')[0]}
              </h1>
              <p className="text-sm font-semibold mt-1" style={{ color: 'rgba(15,20,40,0.65)' }}>
                {user?.organization}
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{ background: 'rgba(15,20,40,0.15)', border: '1px solid rgba(15,20,40,0.25)' }}>
              <CheckCircle size={14} style={{ color: '#0f1428' }} />
              <span className="text-xs font-bold" style={{ color: '#0f1428' }}>
                Acesso {user?.accessLevel === 'full' ? 'Completo' : 'Leitura'}
              </span>
            </div>
          </div>
        </div>

        {/* System cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Growth Center */}
          <a
            href={GROWTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-7 flex flex-col gap-5 group transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            style={{ borderColor: 'rgba(0,179,126,0.30)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,179,126,0.15)', border: '1px solid rgba(0,179,126,0.40)' }}>
                <TrendingUp size={26} style={{ color: '#00b37e' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#00b37e' }}>Módulo 01</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                </div>
                <h2 className="text-xl font-bold text-white">Ben Growth Center</h2>
                <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Inteligência Comercial
                </p>
              </div>
              <ExternalLink size={18} style={{ color: 'rgba(0,179,126,0.55)', flexShrink: 0 }} />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: BarChart3, label: 'Dashboard' },
                { icon: Users,     label: 'CRM & Leads' },
                { icon: Brain,     label: 'Dr. Ben IA' },
                { icon: DollarSign, label: 'Financeiro' },
              ].map(f => {
                const Icon = f.icon
                return (
                  <div key={f.label} className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: 'rgba(0,179,126,0.06)', border: '1px solid rgba(0,179,126,0.15)' }}>
                    <Icon size={13} style={{ color: '#00b37e' }} />
                    <span className="text-xs font-semibold text-white">{f.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#00b37e' }}>
              Acessar Sistema <ExternalLink size={14} />
            </div>
          </a>

          {/* Juris Center */}
          <a
            href={JURIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-7 flex flex-col gap-5 group transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            style={{ borderColor: 'rgba(59,130,246,0.30)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.40)' }}>
                <Scale size={26} style={{ color: '#3b82f6' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#3b82f6' }}>Módulo 02</span>
                  <Lock size={10} style={{ color: 'rgba(255,255,255,0.35)' }} />
                </div>
                <h2 className="text-xl font-bold text-white">Ben Juris Center</h2>
                <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Gestão Jurídica
                </p>
              </div>
              <ExternalLink size={18} style={{ color: 'rgba(59,130,246,0.55)', flexShrink: 0 }} />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Scale,     label: 'Processos' },
                { icon: Clock,     label: 'Prazos' },
                { icon: FileText,  label: 'Documentos' },
                { icon: Building2, label: 'Portal Cliente' },
              ].map(f => {
                const Icon = f.icon
                return (
                  <div key={f.label} className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)' }}>
                    <Icon size={13} style={{ color: '#3b82f6' }} />
                    <span className="text-xs font-semibold text-white">{f.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#3b82f6' }}>
              Acessar Sistema <ExternalLink size={14} />
            </div>
          </a>
        </div>

        {/* Bottom grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Account info */}
          <div className="glass-card p-6">
            <h3 className="font-bold text-lg text-white mb-4">Dados da Conta</h3>
            <div className="space-y-3">
              {[
                { label: 'Organização', value: user?.organization ?? '' },
                { label: 'E-mail',      value: user?.email ?? '' },
                { label: 'Perfil',      value: user?.role === 'admin' ? 'Administrador' : 'Cliente Externo' },
                { label: 'Nível',       value: user?.accessLevel === 'full' ? 'Acesso Completo' : 'Somente Leitura' },
                { label: 'Desde',       value: user?.createdAt ?? '' },
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center py-2"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.label}</span>
                  <span className="text-xs font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Access info */}
          <div className="glass-card p-6">
            <h3 className="font-bold text-lg text-white mb-4">Informações de Acesso</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: 'rgba(0,179,126,0.08)', border: '1px solid rgba(0,179,126,0.25)' }}>
                <CheckCircle size={14} style={{ color: '#6ee7b7', flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div className="text-xs font-bold" style={{ color: '#6ee7b7' }}>Sessão Autenticada</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Sua sessão está ativa e segura.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.25)' }}>
                <Lock size={14} style={{ color: '#D4A017', flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div className="text-xs font-bold" style={{ color: '#D4A017' }}>Acesso Restrito</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Portal exclusivo para usuários autorizados.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)' }}>
                <HeadphonesIcon size={14} style={{ color: '#25D366', flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div className="text-xs font-bold" style={{ color: '#25D366' }}>Suporte 24h</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Dúvidas?{' '}
                    <a href="https://wa.me/5586994820054" target="_blank" rel="noopener noreferrer"
                      style={{ color: '#D4A017' }}>
                      WhatsApp (86) 99482-0054
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
