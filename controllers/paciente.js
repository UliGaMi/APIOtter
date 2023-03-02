// constante del modelo de datos
const Paciente = require("../model/paciente");

// Obtener todos los objetos
const getPacientes = async (req, res) => {
  Paciente.find((err, paciente) => {
    if (err) {
      res.send(err);
    }
    res.json(paciente);
  });
};

// Crear un objeto con el formato indicado
const createPaciente = async (req, res) => {
  const paciente = new Paciente({
    nombre: req.body.nombre,
    genero: req.body.genero,
    altura: req.body.altura,
    nacimiento: req.body.nacimiento,
    id_nutriologo: req.body.id_nutriologo

  });

  paciente.save( async (err, paciente) => {
    if (err) {
      res.send({status: false, message: "Error al registrar al paciente"});
    }
    res.send({status: true, message: "Paciente registrado con éxito"});
  });
};

// actualizar un elemento a partir del _id
const updatePaciente = async (req, res) => {
  Paciente.findOneAndUpdate(
    { _id: req.params.pacienteID },
    {
      $set: {
        nombre: req.body.nombre,
        genero: req.body.genero,
        altura: req.body.altura,
        nacimiento: req.body.nacimiento,
        id_nutriologo: req.body.id_nutriologo
      },
    },
    { new: true },
    (err, Paciente) => {
      if (err) {
        res.send(err);
      } else res.json(Paciente);
    }
  );
};

// borrar un elemento a través del _id
const deletePaciente = async (req, res) => {
  Paciente.deleteOne({ _id: req.params.pacienteID })
    .then(() => res.json({ message: "Paciente Deleted" }))
    .catch((err) => res.send(err));
};

// 
module.exports = {
  getPacientes,
  createPaciente,
  updatePaciente,
  deletePaciente,
};