// constante del modelo de datos
const Nutriologo = require("../model/nutriologo");

// Obtener todos los objetos
const getNutriologos = async (req, res) => {
  Nutriologo.find((err, nutriologo) => {
    if (err) {
      res.send(err);
    }
    res.json(nutriologo);
  });
};

const iniciarSesion = async (req, res) => {
  try {
    const correo = req.body.correo;
    const contrasenia = req.body.contrasenia;
    const nutriologo = await Nutriologo.findOne({ correo: correo});
    if (!nutriologo) {
      res.send({ status: false, message: 'Correo incorrecto'});
    }
    else {
      if (nutriologo.contrasenia !== contrasenia) {
        res.send({ status: false, message: 'Contraseña incorrecta' });
      }
      else {
        res.send({ status: true, message: 'Sesión iniciada correctamente', nutriologo: nutriologo});
      }
    }


  } catch (err) {
    res.send({ status: false, message: 'Error en el servidor' });
  }


}

// Crear un objeto con el formato indicado
const createNutriologo = async (req, res) => {
  try {
    const correo = req.body.correo;
    const nutriologo = await Nutriologo.findOne({ correo: correo });
    if (!nutriologo) {
      const nutriologo = new Nutriologo({
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
      });

      nutriologo.save(async (err, nutriologo) => {
        if (err) {
          res.send(err);
        }
        res.send({status: true, message: 'Usuario registrado con exito'});
      });

    }
    else {
      res.send({ status: false, message: 'La dirrección de correo ya ha sido utilizada para crear una cuenta' });
    }
  }catch(err)
  {
    res.send({ status: false, message: 'Error en el servidor' });
  }
  




};

// actualizar un elemento a partir del _id
const updateNutriologo = async (req, res) => {
  Nutriologo.findOneAndUpdate(
    { _id: req.params.nutriologoID },
    {
      $set: {
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia
      },
    },
    { new: true },
    (err, Nutriologo) => {
      if (err) {
        res.send({status: false, message: "Los datos no han podido ser actualizados"});
      } else res.send({status: true, message: "Datos actualizados con éxito"});
    }
  );
};

// borrar un elemento a través del _id
const deleteNutriologo = async (req, res) => {
  Nutriologo.deleteOne({ _id: req.params.nutriologoID })
    .then(() => res.json({ message: "Nutriologo Deleted" }))
    .catch((err) => res.send(err));
};

// 
module.exports = {
  getNutriologos,
  createNutriologo,
  updateNutriologo,
  deleteNutriologo,
  iniciarSesion
};