const pool = require("../../db.js")

const getAllTasks = async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    console.log(result)
    res.json(result.rows)
}

const getTask = (req, res) => {
    res.send("Consultando un task")
}

const createTask = (req, res) => {
    res.send("Creando un task")
}

const deleteTask = (req, res) => {
    res.send("Eliminando task")
}

const updateTask = (req, res) => {
    res.send("Actualizando task")
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}