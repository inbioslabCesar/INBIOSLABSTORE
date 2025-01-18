import modalShow from "../components/modalShow";
import testRow from "../components/testRow";
import testRowCard from "../components/testRowCard";

export const createListTests = (tests) => {
  tests.map((item) => {
    const tr = document.createElement("tr");
    tr.className = "contenedor-fila";
    tr.innerHTML = testRow(item);

    document.querySelector(".items").append(tr);
  });
};

export const asignarEventoModal = (data) => {
  const btnModalVer = document.querySelectorAll(".desplegar-modal");
  for (let btn of btnModalVer) {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.target.closest("button").id);
      modalShow(productId, data);
      modalClose();
    });
  }
};

export const modalClose = () => {
  const modalClose = document.querySelector(".modal-close");
  modalClose.addEventListener("click", () => {
    document.querySelector(".contenedor-modal").classList.remove("show");
  });
};

export const modalCardShow = () => {
  const cardClosed = document.querySelector(".button-carrito");
  cardClosed.addEventListener("click", () => {
    const modalShowCard = document.querySelector(".modal-carrito-cabecera");
    modalShowCard.classList.add("show-carrito");
  });
  modalCardClosed();
};

const modalCardClosed = () => {
  const modalClosedCard = document.querySelector(".modal-close-carrito");
  modalClosedCard.addEventListener("click", () => {
    const modalShowCard = document.querySelector(".modal-carrito-cabecera");
    modalShowCard.classList.remove("show-carrito");
  });
};

let carrito = {};

export const asignarEventoButton = (data) => {
  const btnModalComprar = document.querySelectorAll(".button-comprar");
  for (let btnCard of btnModalComprar) {
    btnCard.addEventListener("click", (e) => {
      const testId = parseInt(e.target.closest("button").id);
      const prueba = data.find((item) => item.id === testId);
      prueba.cantidad = 1;
      if (carrito.hasOwnProperty(prueba.id)) {
        prueba.cantidad++;
      }

      carrito[prueba.id] = { ...prueba };
      pintarCarrito(carrito);
    });
  }
};

const tbody = document.querySelector("#items");
const pintarCarrito = (carrito) => {
  tbody.innerHTML = "";
  const datosCarrito = Object.values(carrito);
  for (let pruebaCarrito of datosCarrito) {
    const tr = document.createElement("tr");

    tr.innerHTML = testRowCard(pruebaCarrito);
    tbody.appendChild(tr);
  }
  //pintarFooter();
};
