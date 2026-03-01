// ── Usuários do sistema ─────────────────────────────────────────────────────
// Em produção, isso viria de um banco de dados/API.
// Por ora, lista local gerenciada pelo administrador.

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
    email: 'mauro@mauromoncao.adv.br',
    password: 'admin2026',
    role: 'admin',
    organization: 'Mauro Monção Advogados Associados',
    accessLevel: 'full',
    active: true,
    createdAt: '2026-01-01',
  },
  {
    id: '2',
    name: 'Prefeitura Municipal de Teresina',
    email: 'prefeitura.teresina@cliente.hub',
    password: 'teresina2026',
    role: 'client',
    organization: 'Prefeitura Municipal de Teresina',
    accessLevel: 'readonly',
    active: true,
    createdAt: '2026-02-01',
  },
  {
    id: '3',
    name: 'Câmara Municipal de Parnaíba',
    email: 'camara.parnaiba@cliente.hub',
    password: 'parnaiba2026',
    role: 'client',
    organization: 'Câmara Municipal de Parnaíba',
    accessLevel: 'readonly',
    active: true,
    createdAt: '2026-02-15',
  },
]
