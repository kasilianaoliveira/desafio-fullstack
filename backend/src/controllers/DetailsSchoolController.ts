import { Request, Response } from "express";
import { DetailsSchoolService } from "../services/detailsSchoolService";


export class DetailSchoolController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const numericId = parseInt(id, 10);
    try {
      const detailsSchoolService = new DetailsSchoolService();

      const schools = await detailsSchoolService.execute(numericId);
      return res.status(200).json(schools);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}