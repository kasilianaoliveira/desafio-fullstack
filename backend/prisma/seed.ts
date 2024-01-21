import { convertCsvToJson } from "../src/FileConverter/csvToJsonConverter";
import { prismaClient } from "../src/prisma";
import { CsvRow } from "../src/types/CsvRow";
const caminhoCsv = 'src/FileConverter/INSE_ESC_2021.csv';

convertCsvToJson(caminhoCsv)
  .then(async (jsondataSchool: CsvRow[]) => {
    jsondataSchool.sort((a, b) => a.NO_MUNICIPIO.localeCompare(b.NO_MUNICIPIO));

    for (const dataSchool of jsondataSchool) {
      const batchInsert = [];
      batchInsert.push({
        id_escola: dataSchool.ID_ESCOLA,
          nu_ano_saeb: dataSchool.NU_ANO_SAEB,
          co_uf: dataSchool.CO_UF,
          sg_uf: dataSchool.SG_UF,
          no_uf: dataSchool.NO_UF,
          co_municipio: dataSchool.CO_MUNICIPIO,
          no_municipio: dataSchool.NO_MUNICIPIO,
          no_escola: dataSchool.NO_ESCOLA,
          tp_tipo_rede: dataSchool.TP_TIPO_REDE,
          tp_localizacao: dataSchool.TP_LOCALIZACAO,
          tp_capital: dataSchool.TP_CAPITAL,
          qtd_alunos_inse: dataSchool.QTD_ALUNOS_INSE,
          media_inse: dataSchool.MEDIA_INSE,
          inse_classificacao: dataSchool.INSE_CLASSIFICACAO,
          pc_nivel_1: dataSchool.PC_NIVEL_1,
          pc_nivel_2: dataSchool.PC_NIVEL_2,
          pc_nivel_3: dataSchool.PC_NIVEL_3,
          pc_nivel_4: dataSchool.PC_NIVEL_4,
          pc_nivel_5: dataSchool.PC_NIVEL_5,
          pc_nivel_6: dataSchool.PC_NIVEL_6,
          pc_nivel_7: dataSchool.PC_NIVEL_7,
          pc_nivel_8: dataSchool.PC_NIVEL_8,
      })
      await prismaClient.school.createMany({
        data: batchInsert,
      });
      // await prismaClient.school.create({
      //   data: {
      //     id_escola: dataSchool.ID_ESCOLA,
      //     nu_ano_saeb: dataSchool.NU_ANO_SAEB,
      //     co_uf: dataSchool.CO_UF,
      //     sg_uf: dataSchool.SG_UF,
      //     no_uf: dataSchool.NO_UF,
      //     co_municipio: dataSchool.CO_MUNICIPIO,
      //     no_municipio: dataSchool.NO_MUNICIPIO,
      //     no_escola: dataSchool.NO_ESCOLA,
      //     tp_tipo_rede: dataSchool.TP_TIPO_REDE,
      //     tp_localizacao: dataSchool.TP_LOCALIZACAO,
      //     tp_capital: dataSchool.TP_CAPITAL,
      //     qtd_alunos_inse: dataSchool.QTD_ALUNOS_INSE,
      //     media_inse: dataSchool.MEDIA_INSE,
      //     inse_classificacao: dataSchool.INSE_CLASSIFICACAO,
      //     pc_nivel_1: dataSchool.PC_NIVEL_1,
      //     pc_nivel_2: dataSchool.PC_NIVEL_2,
      //     pc_nivel_3: dataSchool.PC_NIVEL_3,
      //     pc_nivel_4: dataSchool.PC_NIVEL_4,
      //     pc_nivel_5: dataSchool.PC_NIVEL_5,
      //     pc_nivel_6: dataSchool.PC_NIVEL_6,
      //     pc_nivel_7: dataSchool.PC_NIVEL_7,
      //     pc_nivel_8: dataSchool.PC_NIVEL_8,
      //   },
      // });
    }
  
  })
  .catch((erro) => {
    console.error('Error converting CSV to JSON:', erro);
  });