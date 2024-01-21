
import { Request, Response } from "express";
import { ListSchoolsController } from "../ListSchoolsController";
import { describe, expect, it, jest } from "@jest/globals"
import { ListSchoolsService } from "../../services/ListSchoolsService";

jest.mock("../../services/ListSchoolsService");



describe("ListSchoolsController", () => {
  it("should list schools based on search parameters", async () => {
    const req: Request = {
      query: {
        search: "EMEIEF",
        uf: "RO",
        city: "Alta Floresta D'Oeste",
        pageIndex: "1",
      }
    } as any;

    const res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;


    const executeMock = jest.fn().mockImplementation(() => Promise.resolve([
      {
        id_escola: 11047461,
        nu_ano_saeb: 2021,
        co_uf: 11,
        sg_uf: "RO",
        no_uf: "Rondônia",
        co_municipio: 1100015,
        no_municipio: "Alta Floresta D'Oeste",
        no_escola: "EMEIEF 17 DE JUNHO",
        tp_tipo_rede: 3,
        tp_localizacao: 1,
        tp_capital: 2,
        qtd_alunos_inse: 69,
        media_inse: 4.56,
        inse_classificacao: "Nível IV",
        pc_nivel_1: 0,
        pc_nivel_2: 18.05,
        pc_nivel_3: 31.45,
        pc_nivel_4: 25.16,
        pc_nivel_5: 18.53,
        pc_nivel_6: 4.99,
        pc_nivel_7: 1.82,
        pc_nivel_8: 0,
      }
    ]));

    (ListSchoolsService as jest.Mock).mockImplementation(() => ({
      execute: executeMock,
    }));

    const listSchoolsController = new ListSchoolsController();

    await listSchoolsController.handle(req, res);

    expect(res.json).toHaveBeenCalledWith([{
        id_escola: 11047461,
        nu_ano_saeb: 2021,
        co_uf: 11,
        sg_uf: "RO",
        no_uf: "Rondônia",
        co_municipio: 1100015,
        no_municipio: "Alta Floresta D'Oeste",
        no_escola: "EMEIEF 17 DE JUNHO",
        tp_tipo_rede: 3,
        tp_localizacao: 1,
        tp_capital: 2,
        qtd_alunos_inse: 69,
        media_inse: 4.56,
        inse_classificacao: "Nível IV",
        pc_nivel_1: 0,
        pc_nivel_2: 18.05,
        pc_nivel_3: 31.45,
        pc_nivel_4: 25.16,
        pc_nivel_5: 18.53,
        pc_nivel_6: 4.99,
        pc_nivel_7: 1.82,
        pc_nivel_8: 0,
      },
    ]);

    expect(res.status).toHaveBeenCalledWith(200);

  });

  it("should handle errors during school list retrieval", async () => {
    const req: Request = {
      query: {
        search: "as",
        uf: "RO",
        city: "Alta Floresta D'Oeste",
        pageIndex: "1",
      }
    } as any;

    const res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;

    const executeMock = jest.fn().mockRejectedValue({
      message: "Failed to retrieve school list",
    } as never);

    (ListSchoolsService as jest.Mock).mockImplementation(() => ({
      execute: executeMock,
    }));

    const listSchoolsController = new ListSchoolsController();

    await listSchoolsController.handle(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Failed to retrieve school list" });
  });

});
