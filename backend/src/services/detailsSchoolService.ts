import { prismaClient } from "../prisma";

export class DetailsSchoolService {
	async execute(id: number) {

		try {
				const schoolsResult = await prismaClient.school.findFirst({
					where: {
            id_escola: id
          },
				})
				return schoolsResult;
			
		} catch (error) {
			throw new Error('Error when searching for school.');
		}
	}
}