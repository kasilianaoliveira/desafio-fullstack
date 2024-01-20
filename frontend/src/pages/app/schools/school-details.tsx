import { Separator } from '@radix-ui/react-separator'

import { TableDetails } from '@/components/table-details'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export const SchoolDetails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Escola - EEEP DR JOSÉ ALVES DA SILVEIRA</DialogTitle>
        <DialogDescription>Detalhes da escola</DialogDescription>
      </DialogHeader>

      <div className="spece-y-6 flex justify-between">
        <div>
          <h3 className="font-medium">Informações - INSE</h3>
          <Separator
            orientation="vertical"
            className="my-4 h-1 rounded-sm bg-teal-500"
          />
          <div className="flex flex-col gap-2">
            <TableDetails title="Ano SAEB" value="2021" />
            <TableDetails title="Tipo de rede" value="2021" />
            <TableDetails title="Tipo de localização" value="2021" />
            <TableDetails title="Tipo de capital " value="2021" />
            <TableDetails title="Quantidade de alunos (INSE)" value="2021" />
            <TableDetails title="Média (INSE)" value="2021" />
            <TableDetails title="Classificação (INSE)" value="2021" />
            <TableDetails title="Ano SAEB" value="2021" />
          </div>
        </div>

        <div>
          <h3 className="font-medium">Informações - Percentuais</h3>
          <Separator
            orientation="vertical"
            className="my-4 h-1 rounded-sm bg-teal-500"
          />
          <div className="flex flex-col gap-2">
            <TableDetails title="Percentual nivel 1" value="1.29" />
            <TableDetails title="Percentual nivel 2" value="1.29" />
            <TableDetails title="Percentual nivel 3" value="1.29" />
            <TableDetails title="Percentual nivel 4" value="1.29" />
            <TableDetails title="Percentual nivel 5" value="1.29" />
            <TableDetails title="Percentual nivel 6" value="1.29" />
            <TableDetails title="Percentual nivel 7" value="1.29" />
            <TableDetails title="Percentual nivel 8" value="1.29" />
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
