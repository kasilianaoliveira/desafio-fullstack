import { Request, Response } from "express";
import { CreateSchoolService } from "../services/CreateSchoolService";

export class CreateSchoolController {
  async handle(req: Request, res: Response) {
    const { id_escola,
      nu_ano_saeb,
      co_uf, sg_uf,
      no_uf, co_municipio,
      no_municipio,
      no_escola,
      tp_tipo_rede,
      tp_localizacao,
      tp_capital,
      qtd_alunos_inse,
      media_inse,
      inse_classificacao,
      pc_nivel_1,
      pc_nivel_2,
      pc_nivel_3,
      pc_nivel_4,
      pc_nivel_5,
      pc_nivel_6,
      pc_nivel_7,
      pc_nivel_8 } = req.body;
    const createSchoolService = new CreateSchoolService();

    const point = await createSchoolService.execute({
      id_escola,
      nu_ano_saeb,
      co_uf, sg_uf,
      no_uf, co_municipio,
      no_municipio,
      no_escola,
      tp_tipo_rede,
      tp_localizacao,
      tp_capital,
      qtd_alunos_inse,
      media_inse,
      inse_classificacao,
      pc_nivel_1,
      pc_nivel_2,
      pc_nivel_3,
      pc_nivel_4,
      pc_nivel_5,
      pc_nivel_6,
      pc_nivel_7,
      pc_nivel_8
    })

    return res.status(200).json(point);

  }
}