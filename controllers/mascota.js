const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascotasById(req, res) {
  var mascota1 = new Mascota(1, 'firulais', 'Razas Pequeñas', 'firulais.jpg', 'pequeño blanco', 'anunciante', 'cdmx')
  var mascota2 = new Mascota(2, 'solovino', 'Razas Pequeñas', 'solovino.jpg', 'pequeño cafe', 'anunciante', 'veracruz')
  var id = req.params.id;
  if(mascota1.id === id){
    res.send(mascota1)
  }
  else if(mascota2.id === id){
    res.send(mascota2)
  }
  else{
    res.send(`Mascota ${id} no encontrada`)
  }
}

function modificarMascota(req, res) {
  
  var mascota1 = new Mascota(2, 'solovino', 'Razas Pequeñas', 'solovino.jpg', 'pequeño cafe', 'anunciante', 'veracruz')
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

function obtenerMascotas(req, res, next) {
  if(req.params.id){
    Mascota.findById(req.params.id)
			.populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
	      res.send(mascotas)
	    }).catch(next)
  } else {
    Mascota.find().then(mascotas=>{
      res.send(mascotas)
    }).catch(next)
  }
}
// exportamos las funciones definidas
module.exports = {
  crearMascota,
  obtenerMascotasById,
  modificarMascota,
  eliminarMascota,
  obtenerMascotas
}