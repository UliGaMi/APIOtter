// constante del modelo de datos
const Historial = require("../model/historial");

// Obtener todos los objetos
const getHistoriales = async (req, res) => {
  Historial.find((err, historial) => {
    if (err) {
      res.send(err);
    }
    res.json(historial);
  });
};

// Crear un objeto con el formato indicado
const createHistorial = async (req, res) => {
  const historial = new Historial({
    id_paciente: req.body.id_paciente,
    imc: req.body.imc,
    igc: req.body.igc,
    peso: req.body.peso,
    actividad_fisica: req.body.actividad_fisica,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha
  });

  historial.save( async (err, historial) => {
    if (err) {
      res.send(err);
    }
    res.json(historial);
  });
};

// actualizar un elemento a partir del _id
const updateHistorial = async (req, res) => {
  Historial.findOneAndUpdate(
    { _id: req.params.historialID },
    {
      $set: {
        id_paciente: req.body.id_paciente,
        imc: req.body.imc,
        igc: req.body.igc,
        peso: req.body.peso,
        actividad_fisica: req.body.actividad_fisica,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha
      },
    },
    { new: true },
    (err, Historial) => {
      if (err) {
        res.send(err);
      } else res.json(Historial);
    }
  );
};

// borrar un elemento a través del _id
const deleteHistorial = async (req, res) => {
  Historial.deleteOne({ _id: req.params.historialID })
    .then(() => res.json({ message: "Historial Deleted" }))
    .catch((err) => res.send(err));
};

// 
module.exports = {
  getHistoriales,
  createHistorial,
  updateHistorial,
  deleteHistorial,
};