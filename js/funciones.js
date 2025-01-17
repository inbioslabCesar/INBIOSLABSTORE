import modalShow from "../components/modalShow";
import testRow from "../components/testRow";

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
