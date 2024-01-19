import { convertCsvToJson, CsvRow } from './csvToJsonConverter';

const caminhoCsv = 'src/FileConverter/INSE_ESC_2021.csv';

convertCsvToJson(caminhoCsv)
  .then((jsonData: CsvRow[]) => {
    console.log(jsonData);

    // dadosJson.forEach((row) => {
    //   console.log(row.NO_ESCOLA);
    // });
    // for (const data of jsonData) {
    //   await prismaClient.item.create({
    //     data: {
    //       image: data.image,
    //       title: item.title,
    //     },
    //   });
    // }
  
  })
  .catch((erro) => {
    console.error('Erro ao converter CSV para JSON:', erro);
  });