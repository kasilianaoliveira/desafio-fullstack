import { prismaClient } from "../prisma";

export class DetailsSchoolService {
	async execute(id: number) {

		try {
			const existingSchool = await prismaClient.school.findUnique({
				where: { id_escola: id },
			});

			if (!existingSchool) {
				throw new Error(`School ${id} not found`);
			}


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