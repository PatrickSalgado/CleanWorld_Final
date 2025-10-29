const wasteType = require('../service/wasteTypeService.js');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

async function getAllWasteType(req, res) {
    try {
        const rows = await wasteType.getAllWasteType();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).send({
            message: "Error getting residuo",
            body: error.message,
        });
    }
}

async function createWasteType(req, res) {
    const { nameEnterprise, cnpj, phone, userType, email, password } = req.body;
    try {
        await wasteType.createWasteType(nameEnterprise, cnpj, phone, userType, email, password);
        res.status(201).json({ message: "Sucess" });
    } catch (error) {
        res.status(500).send({
            message: "Error adding user!",
            error: error.message
        });
    }
}

async function updateWasteType(req, res) {
    try {
        const { idCollector } = req.params;
        const { nameEnterprise, cnpj, phone, userType, email, password } = req.body;

        await wasteType.updateWasteType(idCollector, nameEnterprise, cnpj, phone, userType, email, password);

        res.status(201).json({ message: "Sucess" });
    } catch (error) {
        res.status(500).send({
            message: "Error updating residuo",
            body: error.message,
        })
    }
}

async function deleteWasteType(req, res) {
    try {
        const { idCollector } = req.params;

        await wasteType.deleteWasteType(idCollector);

        res.status(201).json({ message: "Sucess" });
    } catch (error) {
        res.status(500).send({
            message: "Error updating residuo",
            body: error.message,
        })
    }
}

async function getWasteTypeById(req, res) {
    const { idCollector } = req.params; // 🔥 Agora ela é visível no catch também

    try {
        if (!idCollector || isNaN(idCollector)) {
            return res.status(400).json({ message: 'ID do residuo inválido' });
        }

        const coletor = await wasteType.getWasteTypeById(idCollector);
        if (!coletor) {
            return res.status(404).json({ message: 'Residuo não encontrado' });
        }

        res.status(200).json([coletor]);
    } catch (error) {
        console.error(`Erro ao buscar coletor ${idCollector}:`, error); // ✅ Agora funciona
        res.status(500).json({
            message: 'Erro ao buscar coletor',
            error: error.message,
        });
    }
}

module.exports = {
    getAllWasteType,
    createWasteType,
    updateWasteType,
    deleteWasteType,
    getWasteTypeById,
}