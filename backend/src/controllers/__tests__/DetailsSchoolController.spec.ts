import { Request, Response } from "express";
import { describe, expect, it, jest } from "@jest/globals"
import { DetailSchoolController } from "../DetailsSchoolController";
import { DetailsSchoolService } from "../../services/DetailsSchoolService";
jest.mock("../../services/DetailsSchoolService");

describe("DetailSchoolController", () => {
  it("should handle school details retrieval successfully", async () => {

    const req: Request = { params: { id: 12027855 } } as any;
    const res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;
    
    const executeMock = jest.fn().mockImplementation(() => Promise.resolve({
      ID_ESCOLA: 12027855,
      NU_ANO_SAEB: 2021,
      CO_UF: 12,
      SG_UF: "AC",
      NO_UF: "Acre",
      CO_MUNICIPIO: 1200401,
      NO_MUNICIPIO: "Rio Branco",
      NO_ESCOLA: "ESC QUALQUER",
      TP_TIPO_REDE: 3,
      TP_LOCALIZACAO: 1,
      TP_CAPITAL: 1,
      QTD_ALUNOS_INSE: 5,
      MEDIA_INSE: 4.12,
      INSE_CLASSIFICACAO: "Nível III",
      PC_NIVEL_1: 0,
      PC_NIVEL_2: 20,
      PC_NIVEL_3: 40,
      PC_NIVEL_4: 40,
      PC_NIVEL_5: 0,
      PC_NIVEL_6: 0,
      PC_NIVEL_7: 0,
      PC_NIVEL_8: 0,
    }));
    

    (DetailsSchoolService as jest.Mock).mockImplementation(() => ({
      execute: executeMock,
    }));

    const controller = new DetailSchoolController();

    await controller.handle(req, res);
    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith({
      ID_ESCOLA: 12027855,
      NU_ANO_SAEB: 2021,
      CO_UF: 12,
      SG_UF: "AC",
      NO_UF: "Acre",
      CO_MUNICIPIO: 1200401,
      NO_MUNICIPIO: "Rio Branco",
      NO_ESCOLA: "ESC QUALQUER",
      TP_TIPO_REDE: 3,
      TP_LOCALIZACAO: 1,
      TP_CAPITAL: 1,
      QTD_ALUNOS_INSE: 5,
      MEDIA_INSE: 4.12,
      INSE_CLASSIFICACAO: "Nível III",
      PC_NIVEL_1: 0,
      PC_NIVEL_2: 20,
      PC_NIVEL_3: 40,
      PC_NIVEL_4: 40,
      PC_NIVEL_5: 0,
      PC_NIVEL_6: 0,
      PC_NIVEL_7: 0,
      PC_NIVEL_8: 0,
    });
    expect(executeMock).toHaveBeenCalledWith(12027855);
  });

  it("should handle errors during school details retrieval", async () => {
    const req: Request = { params: { id: 22344 } } as any;

    const res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;

    const executeMock = jest.fn().mockRejectedValue({ message: "Failed to retrieve school details" } as never);

    (DetailsSchoolService as jest.Mock).mockImplementation(() => ({
      execute: executeMock,
    }));

    const controller = new DetailSchoolController();

    await controller.handle(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Failed to retrieve school details" });
  
  });
});
