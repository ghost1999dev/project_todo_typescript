import {Router} from 'express'
import {
    create,
    update,
    getAllRegister,
    deleteRegister
} from '../controllers/todoList.controller';

const router=Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *         message:
 *                type: string
 *                description: Mensaje de confirmación
 *         data:
 *              type: object
 *              properties:
 *                  nombre:
 *                        type: string
 *                        description: Nombre que se guardó en la base de datos
 *                  descripcion:
 *                             type: string
 *                             description: Descripción que se guardó en la base de datos
 *                  completado:
 *                            type: boolean
 *                            description: Si está completado o no
 *                  fechaCreacion:
 *                               type: date
 *                               description: Fecha de creación de la tarea
 *
 *    TaskSave:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: Nombre de la tarea
 *        descripcion:
 *          type: string
 *          description: Descripción de la tarea
 *        completado:
 *          type: boolean
 *          description: Si se completó la tarea
 *
 *    TaskUpdate:
 *      type: object
 *      properties:
 *         id:
 *                type: string
 *                description: Id de la tarea a eliminar
 *         nombre:
 *              type: string
 *              description: Nombre a actualizar
 *         descripcion:
 *              type: string
 *              description: descripcion a actualizar
 *         completado:
 *              type: boolean
 *              description: se completo la tarea
 */

/**
 * @swagger
 * /save:
 *  post:
 *    summary: create a new task
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema: 
 *                $ref: '#/components/schemas/TaskSave'  # Corregido el formato de $ref
 *    responses:
 *      200:
 *        description: mensaje de confirmacion
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      501:
 *        description: error del servidor
 */
router.post('/save',create)

/**
 * @swagger
 * /update:
 *   put:
 *     summary: Actualizar una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre de la tarea a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskUpdate'  # Ajusta esto según la estructura de tu objeto Task
 *     responses:
 *       '200':
 *         description: Tarea actualizada exitosamente
 *       '404':
 *         description: Tarea no encontrada
 */

router.put('/update',update)
/**
 * @swagger
 * /getAllRegister:
 *   get:
 *     summary: Obtener todos los registros
 *     tags: [Tasks]
 *     responses:
 *       '200':
 *         description: Lista de todos los registros obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'  # Ajusta según tu estructura de respuesta
 *       '404':
 *         description: No se encontraron registros
 */



router.get('/getAllRegister',getAllRegister)

/**
 * @swagger
 * /delete/{nombre}:
 *   delete:
 *     summary: Eliminar una tarea por nombre
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre de la tarea a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Registro eliminado con exito
 *       '404':
 *         description: Ha ocurrido un error al eliminar el registro
 */
router.delete('/delete/:nombre',deleteRegister)

export default router;