import {Router} from 'express'
import {
    create,
    update,
    getAllRegister,
    deleteRegister
} from '../controllers/todoList.controller';

const router=Router()

router.post('/save',create)
router.put('/update',update)
router.get('/getAllRegister',getAllRegister)
router.delete('/delete/:nombre',deleteRegister)

export default router;