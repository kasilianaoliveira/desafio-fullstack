import { prismaClient } from "../prisma";
import { SeachParams } from "../types/SearchParams";


export class ListSchoolsService {
	async execute({ search, city, uf, skip, take }: SeachParams) {

		try {
			const totalItems = await prismaClient.school.count({
				where: {
					no_escola: { contains: search, mode: 'insensitive' },
					no_municipio: { contains: city, mode: 'insensitive' },
					no_uf: { contains: uf, mode: 'insensitive' },
				},
			});

			const schoolsResult = await prismaClient.school.findMany({
				where: {
					no_escola: { contains: search, mode: 'insensitive' },
					no_municipio: { contains: city, mode: 'insensitive' },
					no_uf: { contains: uf, mode: 'insensitive' },
				},
				take: Number(take),
				skip: Number(skip),
			});

			return { schools: schoolsResult, totalItems };

		} catch (error) {
			throw new Error('Error when searching for schools.');
		}
	}
}