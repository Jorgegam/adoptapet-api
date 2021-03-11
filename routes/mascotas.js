const router = require('express').Router();
const {
  crearMascota,
  obtenerMascotas,
  obtenerMascotasById,
  modificarMascota,
  eliminarMascota
} = require('../controllers/mascota')
var auth = require('./auth');
 
router.get('/', auth.opcional,obtenerMascotas)
router.get('/:id', auth.opcional, obtenerMascotasById)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearMascota)
router.put('/:id',auth.requerido, modificarMascota)
router.delete('/:id',auth.requerido, eliminarMascota)

module.exports = router;