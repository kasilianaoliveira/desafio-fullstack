import { Request, Response } from "express";
import { describe, expect, it, jest } from "@jest/globals"
import { DeleteSchoolController } from "../DeleteSchoolController";
import { DeleteSchoolService } from "../../services/DeleteSchoolService";
jest.mock("../../services/DeleteSchoolService");

describe("DeleteSchoolController", () => {
  it("should handle deletion of a school successfully", async () => {
    const req: Request = { params: { id: 1 } } as any;

    const res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;

    const executeMock = jest.fn().mockImplementation(() => Promise.resolve({ id: 1 }));

    (DeleteSchoolService as jest.Mock).mockImplementation(() => ({
      execute: executeMock,
    }));

    const controller = new DeleteSchoolController();

    await controller.handle(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "School deleted",
      deletedUser: { id: 1 },
    });
    expect(executeMock).toHaveBeenCalledWith(1);
  });
  

  it("should handle deletion failure and return a 400 status", async () => {
    const req: Request = { params: { id: 1 } } as any;
    const res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;
  
    const executeMock = jest.fn().mockRejectedValue({ message: "Deletion failed" } as never);
    (DeleteSchoolService as jest.Mock).mockImplementation(() => ({
      execute: executeMock,
    }));
  
    const controller = new DeleteSchoolController();
    await controller.handle(req, res);
  
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Deletion failed" });
    expect(executeMock).toHaveBeenCalledWith(1);
  });
  
});
