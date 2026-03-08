import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  LogOut, ExternalLink, Shield, Scale, FileText,
  Clock, Bell, BarChart3, Building2, CheckCircle, Lock,
  TrendingUp, Cpu, Zap, Brain, Users
} from 'lucide-react'

const MODULES = [
  {
    id: 'growth',
    title: 'Ben Growth Center',
    subtitle: 'Módulo 01 · Inteligência Comercial',
    desc: 'Inteligência comercial, gestão de tráfego, CRM e performance',
    url: 'https://bengrowth.mauromoncao.adv.br',
    color: '#00b37e',
    colorBg: 'rgba(0,179,126,0.12)',
    colorBorder: 'rgba(0,179,126,0.30)',
    icon: TrendingUp,
    features: [
      { icon: BarChart3, label: 'Dashboard',    desc: 'Visão comercial' },
      { icon: Users,     label: 'CRM',          desc: 'Gestão de leads' },
      { icon: Zap,       label: 'Tráfego',      desc: 'Performance digital' },
      { icon: TrendingUp,label: 'Crescimento',  desc: 'Métricas de resultado' },
    ],
  },
  {
    id: 'juris',
    title: 'Ben Juris Center',
    subtitle: 'Módulo 02 · Gestão Jurídica',
    desc: 'Gestão jurídica corporativa e pública, controle operacional e prazos',
    url: 'https://juris.mauromoncao.adv.br',
    color: '#3b82f6',
    colorBg: 'rgba(59,130,246,0.12)',
    colorBorder: 'rgba(59,130,246,0.30)',
    icon: Scale,
    features: [
      { icon: BarChart3,   label: 'Dashboard',   desc: 'Visão executiva' },
      { icon: Scale,       label: 'Processos',   desc: 'Gestão processual' },
      { icon: Clock,       label: 'Prazos',      desc: 'Controle de prazos' },
      { icon: FileText,    label: 'Documentos',  desc: 'Gestão documental' },
      { icon: Building2,   label: 'Setor Público',desc: 'Gov. corporativa' },
      { icon: Bell,        label: 'Alertas',     desc: 'Notificações' },
      { icon: Shield,      label: 'Conformidade',desc: 'Controle e auditoria' },
      { icon: BarChart3,   label: 'Relatórios',  desc: 'Análise de dados' },
    ],
  },
  {
    id: 'ecosystem',
    title: 'BEN Ecosystem IA',
    subtitle: 'Módulo 03 · Workspace Inteligente',
    desc: 'Agentes de IA, projetos jurídicos, chat contextualizado e pipelines de automação',
    url: 'https://ecosystem.mauromoncao.adv.br',
    color: '#7c3aed',
    colorBg: 'rgba(124,58,237,0.12)',
    colorBorder: 'rgba(124,58,237,0.30)',
    icon: Cpu,
    features: [
      { icon: Brain,  label: 'Agentes IA',    desc: 'Automação inteligente' },
      { icon: Cpu,    label: 'Workspace',     desc: 'Ambiente integrado' },
      { icon: Zap,    label: 'Pipelines',     desc: 'Fluxos automáticos' },
      { icon: FileText,label: 'Projetos',     desc: 'Gestão de projetos IA' },
    ],
  },
]

export default function PortalPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => { logout(); navigate('/') }

  const isAdmin = user?.role === 'admin'

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0f2340' }}>

      {/* ── topbar ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: 'rgba(15,35,64,0.95)', borderBottom: '1px solid rgba(222,192,120,0.15)', backdropFilter: 'blur(12px)' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(222,192,120,0.25), rgba(222,192,120,0.10))', border: '1px solid rgba(222,192,120,0.35)' }}>
            <Shield size={15} style={{ color: '#DEC078' }} />
          </div>
          <div>
            <div className="text-xs font-bold text-white font-sans">BEN Strategic Hub</div>
            <div className="text-xs font-sans" style={{ color: 'rgba(222,192,120,0.70)' }}>Portal do Cliente</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans"
            style={{ background: 'rgba(0,179,126,0.15)', border: '1px solid rgba(0,179,126,0.30)', color: '#6ee7b7' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {user?.name}
          </div>
          <button onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs font-sans px-3 py-1.5 rounded-xl transition-all"
            style={{ color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.10)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(222,192,120,0.35)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)' }}>
            <LogOut size={13} />Sair
          </button>
        </div>
      </header>

      <main className="pt-24 pb-16 px-6 md:px-10 max-w-5xl mx-auto">

        {/* ── boas-vindas ─────────────────────────────────────────── */}
        <div className="mb-10 rounded-2xl px-8 py-7 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #C9A85C 0%, #DEC078 40%, #EDD49A 70%, #C9A85C 100%)',
            boxShadow: '0 4px 32px rgba(222,192,120,0.25)',
          }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.18) 0%, transparent 60%)' }} />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold font-sans uppercase tracking-widest mb-1"
                style={{ color: 'rgba(25,56,92,0.65)' }}>
                {isAdmin ? 'Administrador' : 'Portal do Cliente'}
              </p>
              <h1 className="font-serif font-bold text-2xl md:text-3xl" style={{ color: '#19385C', letterSpacing: '-0.01em' }}>
                Bem-vindo, {user?.name?.split(' ')[0]}
              </h1>
              <p className="text-sm font-sans mt-1" style={{ color: 'rgba(25,56,92,0.72)' }}>
                {user?.organization}
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{ background: 'rgba(25,56,92,0.15)', border: '1px solid rgba(25,56,92,0.25)' }}>
              <CheckCircle size={14} style={{ color: '#19385C' }} />
              <span className="text-xs font-semibold font-sans" style={{ color: '#19385C' }}>
                Acesso {user?.accessLevel === 'full' ? 'Completo' : 'Leitura'}
              </span>
            </div>
          </div>
        </div>

        {/* ── módulos ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-6 mb-8">
          {MODULES.map(mod => {
            const Icon = mod.icon
            return (
              <div key={mod.id} className="glass-card p-8"
                style={{ borderColor: mod.colorBorder }}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: mod.colorBg, border: `1px solid ${mod.colorBorder}` }}>
                      <Icon size={26} style={{ color: mod.color }} />
                    </div>
                    <div>
                      <h2 className="font-serif font-bold text-2xl text-white">{mod.title}</h2>
                      <p className="text-xs font-sans mt-0.5" style={{ color: mod.color }}>{mod.subtitle}</p>
                      <p className="text-sm font-sans mt-1" style={{ color: 'rgba(255,255,255,0.60)' }}>{mod.desc}</p>
                    </div>
                  </div>
                  <a href={mod.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-sans flex-shrink-0 transition-all"
                    style={{
                      background: mod.colorBg,
                      border: `1.5px solid ${mod.colorBorder}`,
                      color: mod.color,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}>
                    Acessar o Sistema <ExternalLink size={14} />
                  </a>
                </div>

                {/* features */}
                <div className={`grid grid-cols-2 md:grid-cols-${mod.features.length > 4 ? '4' : mod.features.length} gap-4 mt-8`}>
                  {mod.features.map(f => (
                    <div key={f.label} className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <f.icon size={15} style={{ color: mod.color, flexShrink: 0 }} />
                      <div>
                        <div className="text-xs font-bold text-white font-sans">{f.label}</div>
                        <div className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.45)' }}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── informações da sessão ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-serif font-bold text-lg text-white mb-4">Dados da Conta</h3>
            <div className="space-y-3">
              {[
                { label: 'Organização', value: user?.organization ?? '' },
                { label: 'E-mail',      value: user?.email ?? '' },
                { label: 'Perfil',      value: user?.role === 'admin' ? 'Administrador' : 'Cliente Externo' },
                { label: 'Nível',       value: user?.accessLevel === 'full' ? 'Acesso Completo' : 'Somente Leitura' },
                { label: 'Desde',       value: user?.createdAt ?? '' },
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center py-2"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.50)' }}>{item.label}</span>
                  <span className="text-xs font-semibold text-white font-sans">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-serif font-bold text-lg text-white mb-4">Informações de Acesso</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: 'rgba(0,179,126,0.10)', border: '1px solid rgba(0,179,126,0.25)' }}>
                <CheckCircle size={15} style={{ color: '#6ee7b7', flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div className="text-xs font-bold font-sans" style={{ color: '#6ee7b7' }}>Sessão Autenticada</div>
                  <div className="text-xs font-sans mt-0.5" style={{ color: 'rgba(255,255,255,0.50)' }}>
                    Sua sessão está ativa e segura.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: 'rgba(222,192,120,0.08)', border: '1px solid rgba(222,192,120,0.20)' }}>
                <Lock size={15} style={{ color: '#DEC078', flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div className="text-xs font-bold font-sans" style={{ color: '#DEC078' }}>Acesso Restrito</div>
                  <div className="text-xs font-sans mt-0.5" style={{ color: 'rgba(255,255,255,0.50)' }}>
                    Portal exclusivo — credenciais emitidas pelo administrador.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.20)' }}>
                <Shield size={15} style={{ color: '#7dd3fc', flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div className="text-xs font-bold font-sans" style={{ color: '#7dd3fc' }}>Suporte</div>
                  <div className="text-xs font-sans mt-0.5" style={{ color: 'rgba(255,255,255,0.50)' }}>
                    Dúvidas? Contate: <span style={{ color: '#DEC078' }}>mauro@mauromoncao.adv.br</span>
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
