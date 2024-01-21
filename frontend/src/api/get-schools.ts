import { api } from '@/lib/axios'

export interface GetSchoolsQuery {
  pageIndex?: number | null
  search?: string | null
  city?: string | null
  uf?: string | null
}
export interface GetSchool {
  schools: {
    id_escola: number
    nu_ano_saeb: number
    co_uf: number
    sg_uf: string
    no_uf: string
    co_municipio: number
    no_municipio: string
    no_escola: string
    tp_tipo_rede: number
    tp_localizacao: number
    tp_capital: number
    qtd_alunos_inse: number
    media_inse: number
    inse_classificacao: string
    pc_nivel_1: number
    pc_nivel_2: number
    pc_nivel_3: number
    pc_nivel_4: number
    pc_nivel_5: number
    pc_nivel_6: number
    pc_nivel_7: number
    pc_nivel_8: number
  }[]
  totalItems: number
  city?: string[]
  estado?: string[]
}
export async function getSchools({
  pageIndex,
  city,
  search,
  uf,
}: GetSchoolsQuery) {
  try {
    const response = await api.get<GetSchool>('/search', {
      params: {
        pageIndex,
        city,
        search,
        uf,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar escolas:', error)
    throw error
  }
}
