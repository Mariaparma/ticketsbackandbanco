const express = require("express");
const app = express();


app.use(express.json());

const pool = require("../config/database");
const ingressoModel = require("./ingressoModel");

const getIngressos = async (evento) => {
    console.log(evento);
    if (!evento) {
        const result = await pool.query("SELECT * FROM ingressos");
        return result.rows;
    } else {
        const result = await pool.query("SELECT * FROM ingressos WHERE evento ILIKE $1", [`%${evento}%`]);
        return result.rows;
    }
};

const getIngressosById = async (id) => {
    const result = await pool.query("SELECT * FROM ingressos WHERE id = $1", [id]);
    return result.rows[0];
};

const createIngresso = async (ingresso) => {
    const { nome_evento, local_evento, data_evento, preco, categoria, quantidade_ingressos } = ingresso;

    
    if (!nome_evento || !local_evento || !data_evento || !preco || !categoria || quantidade_ingressos == null) {
        return { error: "Todos os campos obrigatórios devem ser preenchidos" };
    }

    
    if (categoria === "Pista" && preco < 100) {
        return { error: "Preço inválido para categoria Pista" };
    } else if (categoria === "Pista VIP" && preco < 200) {
        return { error: "Preço inválido para categoria Pista VIP" };
    } else if (categoria === "Camarote" && preco < 300) {
        return { error: "Preço inválido para categoria Camarote" };
    } else if (categoria === "Arquibancada" && preco < 400) {
        return { error: "Preço inválido para categoria Arquibancada" };
    }

    const result = await pool.query(
        "INSERT INTO ingressos (nome_evento, local_evento, data_evento, preco, categoria, quantidade_ingressos) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [nome_evento, local_evento, data_evento, preco, categoria, quantidade_ingressos]
    );
    return result.rows[0];
};

const updateIngresso = async (req, res) => {
    try {
        const id = req.params.id;
        const ingresso = req.body;

        const result = await ingressoModel.updateIngresso(id, ingresso);

        if (result.error) {
            return res.status(404).json({ error: result.error });
        }

        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
};

const deleteIngresso = async (id) => {
    const result = await pool.query("DELETE FROM ingressos WHERE id = $1 RETURNING *", [id]);   
    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado" };
    }
    return { message: "Ingresso deletado com sucesso" };
};

const createVenda = async (id_ingresso, id_quantidade) => {
    const query = `
        INSERT INTO vendas (id_ingresso, quantidade)
        VALUES ($1, $2)
        RETURNING *;
    `;
    const values = [id_ingresso, id_quantidade];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = { getIngressos, getIngressosById, createIngresso, updateIngresso, deleteIngresso, createVenda };