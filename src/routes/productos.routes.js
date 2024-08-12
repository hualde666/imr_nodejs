import { Router } from 'express'
import { getProductos, getUnProducto, getProductoDescripcion, crearProducto, modiProducto, borrarProducto } from "../controllers/productos.controllers.js"

const router = Router()
router.get('/productos', getProductos)

router.get('/productos/:id', getUnProducto)
router.get('/des', getProductoDescripcion)

router.post('/productos', crearProducto)

router.put('/productos/:id', modiProducto)
router.delete('/productos/:id', borrarProducto)
export default router