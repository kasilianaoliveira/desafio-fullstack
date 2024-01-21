import { prismaClient } from "../prisma";
import { SeachParams } from "../types/SearchParams";


export class ListSchoolsService {
	async execute({ search, city, uf,  pageIndex }: SeachParams) {

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
				take: 10,
				skip: (pageIndex * 10),
				orderBy: [
					{ co_municipio: 'asc' },
					{ id_escola: 'asc' }
				]
			});

			const uniqueCityNames = await prismaClient.school.findMany({
				distinct: ['no_municipio'],
				select: {
					no_municipio: true,
				},
				orderBy:{
					no_municipio:'asc'
				}
			});

			const uniqueUfNames = await prismaClient.school.findMany({
				distinct: ['no_uf'],
				select: {
					no_uf: true,
				},
				orderBy:{
					no_uf:'asc'
				}
			});
			const cities = uniqueCityNames.map((entry) => entry.no_municipio);
			const ufs = uniqueUfNames.map((entry) => entry.no_uf);

			return { schools: schoolsResult, totalItems,cities,ufs };

		} catch (error) {
			throw new Error('Error when searching for schools.');
		}
	}
}