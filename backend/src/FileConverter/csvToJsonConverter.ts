import csvtojson from 'csvtojson';
import { CsvRow } from '../types/CsvRow';

export async function convertCsvToJson(csvFilePath: string): Promise<CsvRow[]> {
  const csvConverter = csvtojson({
    colParser: {
      ID_ESCOLA: 'number',
      NU_ANO_SAEB: 'number',
      CO_MUNICIPIO: 'number',
      CO_UF: 'number',
      TP_TIPO_REDE: 'number',
      TP_LOCALIZACAO: 'number',
      TP_CAPITAL: 'number',
      QTD_ALUNOS_INSE: 'number',
      MEDIA_INSE: (item) => parseFloat(item.replace(',', '.')),
      PC_NIVEL_1: (item) => parseFloat(item.replace(',', '.')),
      PC_NIVEL_2: (item) => parseFloat(item.replace(',', '.')),
      PC_NIVEL_3: (item) => parseFloat(item.replace(',', '.')),
      PC_NIVEL_4: (item) => parseFloat(item.replace(',', '.')),
      PC_NIVEL_5: (item) => parseFloat(item.replace(',', '.')),
      PC_NIVEL_6: (item) => parseFloat(item.replace(',', '.')),
      PC_NIVEL_7: (item) => parseFloat(item.replace(',', '.')),
      PC_NIVEL_8: (item) => parseFloat(item.replace(',', '.')),
    },
  });

  return csvConverter.fromFile(csvFilePath) as unknown as Promise<CsvRow[]>;
}