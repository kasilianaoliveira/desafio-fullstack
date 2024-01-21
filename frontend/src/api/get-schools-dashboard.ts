import { api } from '@/lib/axios'

export interface GetSchoolResults {
  schools: {
    sg_uf: string
    value: number
  }[]
  mostFrequentClassification: string
  roundedAverage: number
  totalStudents: {
    _sum: {
      qtd_alunos_inse: number
    }
  }
}
export async function getSchoolsDashboard() {
  try {
    const response = await api.get<GetSchoolResults>('/results')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar escolas:', error)
    throw error
  }
}
