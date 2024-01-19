import { Request, Response } from "express";
import { DetailsSchoolService } from "../services/detailsSchoolService";


export class DetailSchoolController {
  async handle(req: Request, res: Response) {
    try {

      const {id} = req.params;
      const numericId = parseInt(id, 10);
      const detailsSchoolService = new DetailsSchoolService();

      const schools = await detailsSchoolService.execute(numericId);
      return res.json(schools);

    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } 
    }
  }
}