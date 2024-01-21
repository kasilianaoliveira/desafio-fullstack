import { Request, Response } from "express";
import { ResultListService } from "../services/ResultListService";


export class ResultListController {
  async handle(req: Request, res: Response) {
    try {
      const resultListService = new ResultListService();

      const schools = await resultListService.execute();
      return res.json(schools);

    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } 
    }
  }
}