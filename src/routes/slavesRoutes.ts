import { Router } from "express";
import { 
  getAllSlaves, 
  getSlaveByID,
  createSlave,
  updateSlave,
  deleteSlave 
} from "../controllers/slaveController";

const router = Router();
/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Obtener todos los esclavos | Cuchau | 
 *    responses:
 *      200:
 *        description: Lista de Esclavos
 */
router.get("slaves/", getAllSlaves);
/**
 * @swagger
 * /api/slaves/{id}:
 *   get:
 *     summary: Obtener un esclavo por ID
 *     tags: [Slaves]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del esclavo
 *     responses:
 *       200:
 *         description: Detalles del esclavo
 *       404:
 *         description: Esclavo no encontrado
 */
router.get("slaves/:id", getSlaveByID);
/**
 * @swagger
 * /api/slaves:
 *   post:
 *     summary: Crear un nuevo esclavo
 *     tags: [Slaves]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - age
 *               - price
 *               - race
 *               - gender
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: string
 *               price:
 *                 type: number
 *               race:
 *                 type: string
 *               gender:
 *                 type: string
 *     responses:
 *       201:
 *         description: Esclavo creado
 *       500:
 *         description: Error en el servidor
 */
router.post("slaves/", createSlave);
/**
 * @swagger
 * /api/slaves/{id}:
 *   put:
 *     summary: Actualizar un esclavo existente
 *     tags: [Slaves]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del Esclavo
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: string
 *               price:
 *                 type: number
 *               race:
 *                 type: string
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Esclavo actualizado
 *       404:
 *         description: Esclavo no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put("slaves/:id", updateSlave);
/**
 * @swagger
 * /api/slaves/{id}:
 *   delete:
 *     summary: Eliminar un esclavo
 *     tags: [Slaves]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del esclavo
 *     responses:
 *       200:
 *         description: Esclavo eliminado
 *       404:
 *         description: Esclavo no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete("slaves/:id", deleteSlave);

export default router;