import { Separator } from '@radix-ui/react-separator'
import { useQuery } from '@tanstack/react-query'

import { getSchoolDetail } from '@/api/get-school-detail'
import { TableDetails } from '@/components/table-details'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { SchoolDetailSkeleton } from './school.details-skeleton'

export interface SchoolDetailProps {
  schoolId: number
  open: boolean
}
export const SchoolDetails = ({ schoolId, open }: SchoolDetailProps) => {
  const { data: detail } = useQuery({
    queryKey: ['school', schoolId],
    queryFn: () => getSchoolDetail({ schoolId }),
    enabled: open,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Escola - {detail?.no_escola}</DialogTitle>
        <DialogDescription>Detalhes da escola</DialogDescription>
      </DialogHeader>

      {detail ? (
        <div className="spece-y-6 flex justify-between">
          <div>
            <h3 className="font-medium">Informações - INSE</h3>
            <Separator
              orientation="vertical"
              className="my-4 h-1 rounded-sm bg-teal-500"
            />
            <div className="flex flex-col gap-2">
              <TableDetails title="Ano SAEB" value={detail?.nu_ano_saeb} />
              <TableDetails title="Tipo de rede" value={detail.tp_tipo_rede} />
              <TableDetails
                title="Tipo de localização"
                value={detail.tp_localizacao}
              />
              <TableDetails
                title="Tipo de capital "
                value={detail.tp_capital}
              />
              <TableDetails
                title="Quantidade de alunos (INSE)"
                value={detail.qtd_alunos_inse}
              />
              <TableDetails title="Média (INSE)" value={detail.media_inse} />
              <TableDetails
                title="Classificação (INSE)"
                value={detail.inse_classificacao}
              />
            </div>
          </div>

          <div>
            <h3 className="font-medium">Informações - Percentuais</h3>
            <Separator
              orientation="vertical"
              className="my-4 h-1 rounded-sm bg-teal-500"
            />
            <div className="flex flex-col gap-2">
              <TableDetails
                title="Percentual nivel 1"
                value={detail.pc_nivel_1}
              />
              <TableDetails
                title="Percentual nivel 2"
                value={detail.pc_nivel_2}
              />
              <TableDetails
                title="Percentual nivel 3"
                value={detail.pc_nivel_3}
              />
              <TableDetails
                title="Percentual nivel 4"
                value={detail.pc_nivel_4}
              />
              <TableDetails
                title="Percentual nivel 5"
                value={detail.pc_nivel_5}
              />
              <TableDetails
                title="Percentual nivel 6"
                value={detail.pc_nivel_6}
              />
              <TableDetails
                title="Percentual nivel 7"
                value={detail.pc_nivel_7}
              />
              <TableDetails
                title="Percentual nivel 8"
                value={detail.pc_nivel_8}
              />
            </div>
          </div>
        </div>
      ) : (
        <SchoolDetailSkeleton />
      )}
    </DialogContent>
  )
}
