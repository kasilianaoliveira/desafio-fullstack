import { prismaClient } from "../prisma";
export class ResultListService {
	async execute() {
		try {
			const schoolsByState = await prismaClient.school.groupBy({
				by:["sg_uf"],
				_count:{
					no_uf:true
				},
				orderBy:{
					sg_uf:'asc'
				}
			});
			
			const result= schoolsByState.map((entry) => ({
        uf: entry.sg_uf,
        value: entry._count?.no_uf || 0,
      }));

			const averageStudents = await prismaClient.school.aggregate({
				_avg: {
					media_inse: true,
				},
			});
			const roundedAverage = Math.round(averageStudents._avg.media_inse * 100) / 100;

			const totalStudents = await prismaClient.school.aggregate({
				_sum: {
					qtd_alunos_inse: true,
				},
			});
			const mostFrequentClassifications = await prismaClient.school.groupBy({
				by: ['inse_classificacao'],
				_count: true,
			});

			mostFrequentClassifications.sort((a, b) => b._count - a._count);

			const mostFrequentClassification = mostFrequentClassifications[0]?.inse_classificacao;
			return { schools:  result, roundedAverage, totalStudents, mostFrequentClassification };

		} catch (error) {
			throw new Error('Error when searching for schools.');
		}
	}
}