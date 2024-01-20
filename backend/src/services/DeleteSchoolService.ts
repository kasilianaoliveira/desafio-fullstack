import { prismaClient } from "../prisma";

export class DeleteSchoolService {
  async execute(id: number) {

    try {

      const existingSchool = await prismaClient.school.findUnique({
        where: { id_escola: id },
      });

      if (!existingSchool) {
        throw new Error(`School ${id} not found`);
      }

      await prismaClient.school.delete({
        where: { id_escola: id },
      });


    } catch (error) {
      throw new Error(error)
    }
  }
}