import { Router } from "express";
import { ListSchoolsController } from "./controllers/ListSchoolsController";
import { DetailSchoolController } from "./controllers/DetailsSchoolController";
import { DeleteSchoolController } from "./controllers/DeleteSchoolController";
import { CreateSchoolController } from "./controllers/CreateSchoolController";

export const router = Router();

router.get('/search', new ListSchoolsController().handle);
router.get('/detail/:id', new DetailSchoolController().handle);
router.delete('/deleteSchool/:id', new DeleteSchoolController().handle);
router.post('/school', new CreateSchoolController().handle);


