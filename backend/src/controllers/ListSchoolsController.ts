import { Request, Response } from "express";
import { ListSchoolsService } from "../services/listSchoolsService";
import { SeachParams } from "../types/SearchParams";


export class ListSchoolsController {
  async handle(req: Request, res: Response) {
    try {

      const { search, uf, city, take, skip } = req.query as unknown as SeachParams;

      const listSchoolsService = new ListSchoolsService();

      const schools = await listSchoolsService.execute({search, uf, city, take, skip});
      console.log(search)
      return res.json(schools);

    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } 
    }
  }
}