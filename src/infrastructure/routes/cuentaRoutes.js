import { Router } from "express";

import {
  createCuenta,
  getCuentas,
  getCuentaById,
  consignarSaldo,
  retirarSaldo,
  deleteCuenta
} from "../controllers/cuentaController.js";
const router = Router();
router.post("/", createCuenta);
router.get("/", getCuentas);
router.get("/:id", getCuentaById);
router.put("/consignar/:id", consignarSaldo);
router.put("/retirar/:id", retirarSaldo);
router.delete("/:id", deleteCuenta);

export default router;