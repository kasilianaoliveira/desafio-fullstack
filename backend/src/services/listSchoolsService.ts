import { prismaClient } from "../prisma";
import { SeachParams } from "../types/SearchParams";


export class ListSchoolsService {
	async execute({ search, city, uf, skip, take }: SeachParams) {

		try {
				const schoolsResult = await prismaClient.school.findMany({
					where: {
            no_escola:{contains: search,mode: 'insensitive'},
            no_municipio: { contains: city, mode: 'insensitive' },
            no_uf: { contains: uf,mode: 'insensitive' },
          },
					take: Number(take),
					skip: Number(skip)
				})
				return schoolsResult;
			
		} catch (error) {
			throw new Error('Error when searching for schools.');
		}
	}
}