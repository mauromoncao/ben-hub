import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Lock, Mail, Eye, EyeOff, ArrowLeft, Shield } from 'lucide-react'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { ok, error: err } = await login(email, password)
    setLoading(false)
    if (ok) navigate('/portal')
    else setError(err || 'Erro ao autenticar.')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: '#0f2340' }}>

      {/* bg decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, rgba(222,192,120,0.12) 0%, transparent 70%)' }} />
        <svg className="absolute inset-0 w-full h-full opacity-4">
          <defs><pattern id="dots2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#DEC078"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots2)"/>
        </svg>
      </div>

      <div className="relative w-full max-w-md">
        {/* voltar */}
        <button onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-sans mb-8 transition-colors"
          style={{ color: 'rgba(222,192,120,0.70)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#DEC078')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(222,192,120,0.70)')}>
          <ArrowLeft size={14} /> Voltar ao Hub
        </button>

        {/* card */}
        <div className="rounded-2xl p-8 md:p-10"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(222,192,120,0.25)', backdropFilter: 'blur(12px)' }}>

          {/* header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'linear-gradient(135deg, rgba(222,192,120,0.25), rgba(222,192,120,0.10))', border: '1px solid rgba(222,192,120,0.35)' }}>
              <Shield size={28} style={{ color: '#DEC078' }} />
            </div>
            <h1 className="font-serif font-bold text-2xl text-white mb-2" style={{ letterSpacing: '-0.01em' }}>
              Ben Juris Center
            </h1>
            <p className="text-sm font-sans" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Área de acesso restrito
            </p>
            <p className="text-xs font-sans mt-1" style={{ color: 'rgba(222,192,120,0.65)' }}>
              Credenciais fornecidas pelo administrador
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* email */}
            <div>
              <label className="block text-xs font-semibold font-sans mb-2 uppercase tracking-wider"
                style={{ color: 'rgba(222,192,120,0.80)' }}>
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

            {/* senha */}
            <div>
              <label className="block text-xs font-semibold font-sans mb-2 uppercase tracking-wider"
                style={{ color: 'rgba(222,192,120,0.80)' }}>
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
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: 'rgba(222,192,120,0.50)' }}>
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* erro */}
            {error && (
              <div className="flex items-start gap-2 px-4 py-3 rounded-xl text-xs font-sans"
                style={{ background: 'rgba(225,29,72,0.15)', border: '1px solid rgba(225,29,72,0.30)', color: '#fca5a5' }}>
                <Shield size={13} className="flex-shrink-0 mt-0.5" />
                {error}
              </div>
            )}

            {/* botão */}
            <button type="submit" disabled={loading}
              className="btn-gold w-full justify-center py-3.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Verificando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Lock size={15} />Entrar no Sistema
                </span>
              )}
            </button>
          </form>

          {/* rodapé do card */}
          <div className="mt-8 pt-6 text-center"
            style={{ borderTop: '1px solid rgba(222,192,120,0.12)' }}>
            <p className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Mauro Monção Advogados Associados
            </p>
            <p className="text-xs font-sans mt-0.5" style={{ color: 'rgba(222,192,120,0.45)' }}>
              Ben Strategic Intelligence Hub
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
