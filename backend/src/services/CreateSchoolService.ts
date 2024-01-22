import { prismaClient } from "../prisma";
import { School } from "../types/School";

export class CreateSchoolService {
	async execute({
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
		pc_nivel_8 }: School) {
		try {
			const schoolAlreadyExists = await prismaClient.school.findFirst({
				where: {
					id_escola
				}
			})

			if (schoolAlreadyExists) {
				throw new Error("Existing school");
			}

			const school = await prismaClient.school.create({
				data: {
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
				},
			})

			return school

		} catch (error) {
			throw new Error(error)
		}

	}
}