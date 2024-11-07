import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Slave";
// v Trae la tabla/entidad 'Producto' de la base de datos v //
const slaveRepository = AppDataSource.getRepository(Product);
// v Obtener todos los esclavos (GET) v //
export const getAllSlaves = async(req: Request, res: Response) => {
  try {
    const slaves = await slaveRepository.find();
    res.json(slaves);
  } catch(error) {
    res.status(500).json({
      message: "Error al obtener los esclavos."
    });
  }
};

// v Obtener un esclavo (GET) v //
export const getSlaveByID = async(req: Request, res: Response) => {
  try {
    const slave = await slaveRepository.findOneBy({
      id: parseInt(req.params.id)
    });
    if (slave) {
      res.json(slave);
    } else {
      res.status(404).json({
        message: "Esclavo no encontrado."
      });
    }
  } catch(error) {
    res.status(500).json({
      message: "Error al obtener el esclavo."
    });
  }
};

// v Crear un esclavo (POST) v //
export const createSlave = async(req: Request, res: Response) => {
  try {
    const { name, price, age, gender, race } = req.body;
    const slave = new Product();
    slave.name = name;
    slave.age = age;
    slave.price = price;
    slave.gender = gender;
    slave.race = race;
    await slaveRepository.save(slave);
    res.status(201).json(slave);
  } catch(error) {
    res.status(500).json({
      message: "Error al crear el esclavo."
    });
  }
};

// v Actualizar un esclavo existente (PUT) v //
export const updateSlave = async(req: Request, res: Response) => {
  try {
    const { name, price, age, gender, race } = req.body; 
    const slave = await slaveRepository.findOneBy({
      id: parseInt(req.params.id)
    });
    if (slave) {
      slave.name = name ?? slave.name;
      slave.age = age ?? slave.age;
      slave.price = price ?? slave.price;
      slave.gender = gender ?? slave.gender;
      slave.race = race ?? slave.race;
      await slaveRepository.save(slave); 
      res.json(slave);
    } else {
      res.status(404).json({
        message: "No se encontró el esclavo."
      });
    }
  } catch(error) {
    res.status(500).json({
      message: "Error al actualizar el esclavo."
    });
  }
};

// v Eliminar un esclavo existente (DELETE) v //
export const deleteSlave = async(req: Request, res: Response) => {
  try {
    const slave = await slaveRepository.findOneBy({
      id: parseInt(req.params.id)
    });
    if (slave) {
      await slaveRepository.remove(slave);
      res.json({
        message: "Esclavo eliminado."
      });
    } else {
      res.status(404).json({
        message: "No se encontró el esclavo."
      });
    }
  } catch(error) {
    res.status(500).json({
      message: "Error al eliminar el esclavo."
    });
  }
};