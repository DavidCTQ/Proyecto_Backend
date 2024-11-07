import { Router } from "express";
import { 
  getAllSlaves, 
  getSlaveByID,
  createSlave,
  updateSlave,
  deleteSlave 
} from "../controllers/slaveController";

const router = Router();

router.get("slaves/", getAllSlaves);
router.get("slaves/:id", getSlaveByID);
router.post("slaves/", createSlave);
router.put("slaves/:id", updateSlave);
router.delete("slaves/:id", deleteSlave);

export default router;