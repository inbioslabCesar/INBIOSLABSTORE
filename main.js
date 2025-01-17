import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/styles.css";

import { getTest } from "./js/apiTest.js";

import {
  asignarEventoModal,
  createListTests,
  modalCardShow,
} from "./js/funciones.js";

const cargarTests = async () => {
  const tests = await getTest();
  createListTests(tests);
  asignarEventoModal(tests);
  modalCardShow();
};

cargarTests();
