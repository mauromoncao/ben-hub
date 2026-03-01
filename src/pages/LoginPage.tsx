import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Lock, Mail, Eye, EyeOff, ArrowLeft, Shield, TrendingUp, Users, ChevronRight } from 'lucide-react'

// The 3 access panels
const ACCESS_PANELS = [
  {
    id: 'growth',
    label: 'Ben Growth Center',
    module: 'Módulo 01',
    desc: 'Inteligência comercial, tráfego, CRM e performance',
    icon: TrendingUp,
    color: '#00b37e',
    colorBg: 'rgba(0,179,126,0.12)',
    colorBorder: 'rgba(0,179,126,0.40)',
    loginTitle: 'Ben Growth Center',
    loginSub: 'Módulo 01 · Inteligência Comercial',
    external: 'https://ben-growth-center-rhryjjvbs-mauro-moncaos-projects.vercel.app/',
  },
  {
    id: 'juris',
    label: 'Ben Juris Center',
    module: 'Módulo 02',
    desc: 'Gestão jurídica, processos, governança e operação',
    icon: Shield,
    color: '#3b82f6',
    colorBg: 'rgba(59,130,246,0.12)',
    colorBorder: 'rgba(59,130,246,0.40)',
    loginTitle: 'Ben Juris Center',
    loginSub: 'Módulo 02 · Gestão Jurídica',
    external: null,
  },
  {
    id: 'cliente',
    label: 'Acesso do Cliente',
    module: 'Área Exclusiva',
    desc: 'Credenciais fornecidas pelo escritório',
    icon: Users,
    color: '#DEC078',
    colorBg: 'rgba(222,192,120,0.10)',
    colorBorder: 'rgba(222,192,120,0.38)',
    loginTitle: 'Acesso do Cliente',
    loginSub: 'Credenciais emitidas pelo administrador',
    external: null,
  },
]

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Read ?panel= param to pre-select a panel (juris | cliente)
  const urlPanel = new URLSearchParams(location.search).get('panel')

  // Step 1: panel selection | Step 2: login form
  const [selected, setSelected] = useState<string | null>(
    urlPanel === 'juris' || urlPanel === 'cliente' ? urlPanel : null
  )

  // If param changes (e.g. user navigates back/forward), sync
  useEffect(() => {
    if (urlPanel === 'juris' || urlPanel === 'cliente') {
      setSelected(urlPanel)
    } else {
      setSelected(null)
    }
  }, [urlPanel])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const selectedPanel = ACCESS_PANELS.find(p => p.id === selected)

  const handleSelectPanel = (panel: typeof ACCESS_PANELS[0]) => {
    // Growth Center opens directly — no login required
    if (panel.external) {
      window.open(panel.external, '_blank', 'noopener noreferrer')
      return
    }
    setSelected(panel.id)
    setError('')
    setEmail('')
    setPassword('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { ok, error: err } = await login(email, password)
    setLoading(false)
    if (ok) navigate('/portal')
    else setError(err || 'Credenciais inválidas. Verifique e tente novamente.')
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ background: '#0f2340' }}
    >
      {/* decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(222,192,120,0.07) 0%, transparent 70%)' }}
        />
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.04 }}>
          <defs>
            <pattern id="dots-login" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#DEC078" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-login)" />
        </svg>
      </div>

      <div className="relative w-full max-w-lg">

        {/* Back button */}
        <button
          onClick={() => {
            if (selected) {
              setSelected(null)
              setError('')
              navigate('/login', { replace: true })
            } else {
              navigate('/')
            }
          }}
          className="flex items-center gap-2 text-sm font-sans mb-8 transition-colors"
          style={{ color: 'rgba(222,192,120,0.70)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#DEC078')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(222,192,120,0.70)')}
        >
          <ArrowLeft size={14} />
          {selected ? 'Voltar à seleção' : 'Voltar ao Hub'}
        </button>

        {/* ═══════════════════════════════════════════════════════
            STEP 1 — Panel selection
        ═══════════════════════════════════════════════════════ */}
        {!selected && (
          <div>
            {/* Header */}
            <div className="text-center mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(222,192,120,0.20), rgba(222,192,120,0.06))',
                  border: '1px solid rgba(222,192,120,0.35)',
                }}
              >
                <Lock size={26} style={{ color: '#DEC078' }} />
              </div>
              <h1 className="font-serif font-bold text-2xl text-white mb-1" style={{ letterSpacing: '-0.01em' }}>
                Área de Acesso
              </h1>
              <p className="text-sm font-sans" style={{ color: 'rgba(255,255,255,0.50)' }}>
                Selecione o módulo que deseja acessar
              </p>
            </div>

            {/* 3 Access panels */}
            <div className="flex flex-col gap-3">
              {ACCESS_PANELS.map(panel => {
                const Icon = panel.icon
                return (
                  <button
                    key={panel.id}
                    onClick={() => handleSelectPanel(panel)}
                    className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 group"
                    style={{
                      background: panel.colorBg,
                      border: `1.5px solid ${panel.colorBorder}`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = panel.colorBg.replace('0.12', '0.20').replace('0.10', '0.18')
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = panel.colorBg
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${panel.colorBg}`, border: `1px solid ${panel.colorBorder}` }}
                    >
                      <Icon size={22} style={{ color: panel.color }} />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[15px] font-bold text-white">{panel.label}</span>
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: `${panel.colorBg}`, color: panel.color, border: `1px solid ${panel.colorBorder}` }}
                        >
                          {panel.module}
                        </span>
                      </div>
                      <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
                        {panel.desc}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight size={18} style={{ color: panel.color, flexShrink: 0 }} />
                  </button>
                )
              })}
            </div>

            {/* Footer note */}
            <div className="mt-8 text-center">
              <p className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Mauro Monção Advogados Associados · Ben Strategic Intelligence Hub
              </p>
              <p className="text-[11px] font-sans mt-1" style={{ color: 'rgba(222,192,120,0.40)' }}>
                Credenciais emitidas exclusivamente pelo administrador
              </p>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
            STEP 2 — Login form (Juris or Cliente)
        ═══════════════════════════════════════════════════════ */}
        {selected && selectedPanel && (
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${selectedPanel.colorBorder}`,
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  background: selectedPanel.colorBg,
                  border: `1px solid ${selectedPanel.colorBorder}`,
                }}
              >
                {React.createElement(selectedPanel.icon, { size: 28, style: { color: selectedPanel.color } })}
              </div>
              <h1 className="font-serif font-bold text-2xl text-white mb-1" style={{ letterSpacing: '-0.01em' }}>
                {selectedPanel.loginTitle}
              </h1>
              <p className="text-sm font-sans" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Área de acesso restrito
              </p>
              <p className="text-xs font-sans mt-1" style={{ color: `${selectedPanel.color}cc` }}>
                {selectedPanel.loginSub}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  className="block text-xs font-semibold font-sans mb-2 uppercase tracking-wider"
                  style={{ color: 'rgba(222,192,120,0.80)' }}
                >
                  E-mail
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: 'rgba(222,192,120,0.50)' }} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-sans transition-all outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(222,192,120,0.25)',
                      color: '#fff',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(222,192,120,0.60)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(222,192,120,0.25)')}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-xs font-semibold font-sans mb-2 uppercase tracking-wider"
                  style={{ color: 'rgba(222,192,120,0.80)' }}
                >
                  Senha
                </label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: 'rgba(222,192,120,0.50)' }} />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-10 pr-11 py-3 rounded-xl text-sm font-sans transition-all outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(222,192,120,0.25)',
                      color: '#fff',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(222,192,120,0.60)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(222,192,120,0.25)')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: 'rgba(222,192,120,0.50)' }}
                  >
                    {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  className="flex items-start gap-2 px-4 py-3 rounded-xl text-xs font-sans"
                  style={{
                    background: 'rgba(225,29,72,0.15)',
                    border: '1px solid rgba(225,29,72,0.30)',
                    color: '#fca5a5',
                  }}
                >
                  <Shield size={13} className="flex-shrink-0 mt-0.5" />
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full justify-center py-3.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Verificando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock size={15} /> Entrar no Sistema
                  </span>
                )}
              </button>
            </form>

            {/* Footer */}
            <div
              className="mt-8 pt-6 text-center"
              style={{ borderTop: '1px solid rgba(222,192,120,0.12)' }}
            >
              <p className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.40)' }}>
                Mauro Monção Advogados Associados
              </p>
              <p className="text-xs font-sans mt-0.5" style={{ color: 'rgba(222,192,120,0.45)' }}>
                Ben Strategic Intelligence Hub
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
