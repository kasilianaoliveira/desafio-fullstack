import { Request, Response, Router } from "express";
import { ListSchoolsController } from "./controllers/ListSchoolsController";
import { DetailSchoolController } from "./controllers/DetailsSchoolController";

export const router = Router();

router.get('/search',  new ListSchoolsController().handle);
router.get('/detail/:id',  new DetailSchoolController().handle);

//remove
// router.delete('/deleteSchool/:id',  new DetailSchoolController().handle);

