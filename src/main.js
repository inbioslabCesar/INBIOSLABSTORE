import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/styles.css";
import { getTest } from "./js/apiTest.js";

import {
  asignarEventoButton,
  asignarEventoModal,
  createListTests,
  modalCardShow,
} from "./js/funciones";

const cargarTests = async () => {
  const tests = await getTest();
  createListTests(tests);
  asignarEventoModal(tests);
  modalCardShow();
  asignarEventoButton(tests);
};

cargarTests();
