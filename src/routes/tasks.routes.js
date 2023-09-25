const { Router } = require("express")

//OBJETO QUE PERMITE CREAR URL'S
const router = Router()

const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require("../controllers/tasks.controllers.js")

//CONSULTAR TODOS LOS TASKS
router.get('/tasks', getAllTasks)

//CONSULTAR UN TASK
router.get('/tasks/5', getTask)

//CREAR UN TASK
router.post('/tasks/5', createTask)

//BORRAR UN TASK
router.delete('/tasks', deleteTask)

//ACTUALIZAR
router.put('/tasks', updateTask)

//EXPORTA EL MODULO EN NODE
module.exports = router;