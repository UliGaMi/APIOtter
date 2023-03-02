// definicion de rutas


const {
  getNutriologos,
  createNutriologo,
  updateNutriologo,
  deleteNutriologo,
  iniciarSesion
} = require("./controllers/nutriologo");

const {
  getPacientes,
  createPaciente,
  updatePaciente,
  deletePaciente,
} = require("./controllers/paciente");

const {
  getHistoriales,
  createHistorial,
  updateHistorial,
  deleteHistorial,
} = require("./controllers/historial");

const {
  getKCs,
  createKC,
  updateKC,
  deleteKC
} = require("./controllers/kc");

const {
  getEquivalentes,
  createEquivalente,
  updateEquivalente,
  deleteEquivalente,
} = require("./controllers/equivalente");

const router = require("express").Router();

// ruta get principal






//NUTRIOLOGOS

// ruta get /nutriologos
router.get("/nutriologos", getNutriologos);
// ruta post todos
router.post("/nutriologos", createNutriologo);
// ruta put nutriologos
router.put("/nutriologos/:nutriologoID", updateNutriologo);
// ruta delete nutriologos
router.delete("/nutriologos/:nutriologoID", deleteNutriologo);
//iniciar sesión
router.post("/nutriologos/iniciar", iniciarSesion);


//PACIENTES

// ruta get /pacientes
router.get("/pacientes", getPacientes);
// ruta post todos
router.post("/pacientes", createPaciente);
// ruta put pacientes
router.put("/pacientes/:pacienteID", updatePaciente);
// ruta delete pacientes
router.delete("/pacientes/:pacienteID", deletePaciente);


//HISTORIAL

// ruta get /historiales
router.get("/historiales", getHistoriales);
// ruta post historiales
router.post("/historiales", createHistorial);
// ruta put historiales
router.put("/historiales/:historialID", updateHistorial);
// ruta delete historiales
router.delete("/historiales/:historialID", deleteHistorial);


//KC

// ruta get /kcs
router.get("/kcs", getKCs);
// ruta post kcs
router.post("/kcs", createKC);
// ruta put kcs
router.put("/kcs/:kcID", updateKC);
// ruta delete kcs
router.delete("/kcs/:kcID", deleteKC);

//Equivalente

// ruta get /equivalentes
router.get("/equivalentes", getEquivalentes);
// ruta post equivalentes
router.post("/equivalentes", createEquivalente);
// ruta put equivalentes
router.put("/equivalentes/:equivalenteID", updateEquivalente);
// ruta delete equivalentes
router.delete("/equivalentes/:equivalenteID", deleteEquivalente);

module.exports = router;
