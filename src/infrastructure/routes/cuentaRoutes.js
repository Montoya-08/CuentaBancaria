import { Router } from "express";

import {
  createCuenta,
  getCuentas,
  getCuentaById,
  updateCuenta,
  deleteCuenta
} from "../controllers/cuentaController.js";
const router = Router();
router.post("/", createCuenta);
router.get("/", getCuentas);
router.get("/:id", getCuentaById);
router.put("/:id", updateCuenta);
router.delete("/:id", deleteCuenta);

export default router;