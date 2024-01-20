import { Request, Response } from "express";
import { DeleteSchoolService } from "../services/DeleteSchoolService";


export class DeleteSchoolController {
  async handle(req: Request, res: Response){
    const { id } = req.params; 
    const numericId = parseInt(id, 10);
    const deleteUserService = new DeleteSchoolService();

    try {
      const deletedUser = await deleteUserService.execute(numericId);

      return res.status(200).json({ message: "School deleted", deletedUser });

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}