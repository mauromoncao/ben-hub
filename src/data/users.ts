// ── Usuários do sistema ─────────────────────────────────────────────────────
// Credencial única de administrador: BenHub@Center2026
// E-mails autorizados: mauromoncaoestudos@gmail.com | mauromoncaoadv.escritorio@gmail.com
// Em produção, migrar para backend/banco de dados.

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'client'
  organization: string
  accessLevel: 'full' | 'readonly'
  active: boolean
  createdAt: string
}

export const USERS: User[] = [
  {
    id: '1',
    name: 'Mauro Monção',
    email: 'mauromoncaoestudos@gmail.com',
    password: 'BenHub@Center2026',
    role: 'admin',
    organization: 'Mauro Monção Advogados Associados',
    accessLevel: 'full',
    active: true,
    createdAt: '2026-01-01',
  },
  {
    id: '2',
    name: 'Mauro Monção',
    email: 'mauromoncaoadv.escritorio@gmail.com',
    password: 'BenHub@Center2026',
    role: 'admin',
    organization: 'Mauro Monção Advogados Associados',
    accessLevel: 'full',
    active: true,
    createdAt: '2026-01-01',
  },
]
